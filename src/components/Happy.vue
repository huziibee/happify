<script>

// import { Buffer } from "buffer";
// Buffer.from("anything", "base64");
import AWS, 
{ 
  Rekognition, CognitoIdentityCredentials 
} from "aws-sdk";

AWS.config.region = "eu-west-1"; // Region
AWS.config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: "eu-west-1:60c1f516-872d-444d-8a07-98f083cdb5ce",
});
const rekognition = new Rekognition();



export default {

  name: "Happy",
  // name: "k",
  mounted() {
    this.canvas = this.$refs.canvas
    this.video = this.$refs.video
    this.startCapture()
  },

  methods: {
    startCapture() {
      navigator.mediaDevices.getUserMedia ({video: true, audio: false}).then(stream => {
      this.video.srcObject = stream
      this.video.play()
      }).catch(error => {console.log(error)})

    },
    getBinary(base64Image) {
          var binaryImg = atob(base64Image);
          var length = binaryImg.length;
          var ab = new ArrayBuffer(length);
          var ua = new Uint8Array(ab);
          for (var i = 0; i < length; i++) {
            ua[i] = binaryImg.charCodeAt(i);
        }

        return ab;
        },
        
      takePicture() {
                            
              let context = this.canvas.getContext('2d')
              context.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight)
        
        
        var data = this.canvas.toDataURL('image/jpeg');
        var base64Image = data.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
        var imageBytes = this.getBinary(base64Image);

        var params = {
          Image: {
            Bytes: imageBytes,
            
          },
          Attributes: ["ALL"],
        };
        // console.log(params);

        rekognition
        .detectFaces(params)
      .promise()
      .then((data) => {
        if (data.FaceDetails && data.FaceDetails.length) {
          if (data.FaceDetails.length > 1) {
            data.FaceDetails.sort(
              (face1, face2) =>
              face2.BoundingBox.Height * face2.BoundingBox.Width -
              face1.BoundingBox.Height * face1.BoundingBox.Width
              );
            }
            
            const rekHappyScore = data.FaceDetails[0].Emotions.filter(
              (item) => item.Type === "HAPPY"
              )[0]["Confidence"];
              console.log(rekHappyScore);
              if (this.prog<rekHappyScore){
                this.$emit('picture-taken', this.canvas.toDataURL('image/png'))
              }
              this.prog=rekHappyScore;
              this.total+=this.prog;
              if(this.prog<25){
                this.prog+=10;
              }
              else if(this.prog<50){
                this.prog+=8;
              }
              else if(this.prog>55){
                this.prog-=8;
              }
              else if(this.prog>85){
                this.prog-=12;
              }
              // this.prog=0;
            }
            else{
              console.log('faces not found');
            }
          }).catch((err) => console.log(err, err.stack));
          
        },
        
        
        initCanvas() {
      this.canvas.setAttribute('width', this.video.videoWidth)
      this.canvas.setAttribute('height', this.video.videoHeight)
      },
      toggle(){
          // this.but=!this.but;
          if(this.On==='none'){
              this.On='visible';
          }
          else{
              this.On='none';
          }
      },
       sleep(){
        return new Promise((resolve) => setTimeout(resolve,1000));
      },
       async started(){
        if(this.On!=='none'){
          this.start=false;
          this.subtit='Detecting Happiness';
          // const that=this;
          for (let i=0;i<10;i++){
            this.takePicture();
            await this.sleep();
          }
          this.finished();
        }
      },
      finished(){
        this.$store.state.meterPage='/';
        this.$store.state.MeterCompleted='Completed';
        let x = Math.floor(Math.random()*10)+1;
        this.$store.state.points+=(Math.round((this.total/100)*1.5)+x);

        // console.log(this.total);
        this.$router.push('/');
      }
  },

    data() {
      return {
        points: 0,
        video: null,
        canvas: null,
        On: 'none',
        but: false,
        prog: 30,
        befprog: 0,
        total: 0,
        start: true,
        subtit: 'Incomplete',
      }

}}

</script>

<template scoped>
  <body>
      <main>
          <section class="glass">

              <div class="top">
                    <div class="happyTitle">
                    
                      <router-link id="backbtn" to="/">
                        <img src="../assets/Happy/back-button.png">
                      </router-link>

                    <div>
                        <h3>Happiness metre</h3>
                        <p>{{ subtit }}</p>
                    </div>

                    </div>

                <div class="topleft">

                  <button v-if="start" id="srtbtn" @click="started()"><h2>Start</h2></button>

                  <div v-else id="aftsrt">

                    <progress style="margin-right: 1rem; height: 2rem;" :value="prog" max="100">30%</progress>

                    <a>
                      <img v-if="this.prog<=15" src="../assets/Happy/sad.png" id="happySideBtn">
                      <img v-else-if="this.prog<=45" src="../assets/Happy/happy.png" id="happySideBtn">
                      <img v-else-if="this.prog<=85" src="../assets/Happy/happier.png" id="happySideBtn">
                      <img v-else src="../assets/Happy/happiest.png" id="happySideBtn">
                    </a>

                  </div>

                </div>

              </div>

              <section class="happySelection">

                <div class="happycontainer">

                  <div class="happy">
                    
                    <div v-if="start" @click="toggle()" class="toggles">
                        <img v-if="this.On==='none'"  id="toggles" src="../assets/Happy/video-camera.png">
                        <img v-else id="toggles" src="../assets/Happy/no-camera.png">

                    </div>

                    <div class="noface" v-if="On==='none'">
                      <img  id="noface" src="../assets/Happy/male.png" alt="">
                    </div>

                    <video :style="'display:'+On+';'" id="nom" ref="video" @canplay="initCanvas()">Stream unavailable</video>
                    <canvas ref="canvas" style="display: none;"/>

                  </div>
                  
                </div>
                
              </section>

          </section>
      </main>

      <div class="circles">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>      
      </div>

  </body>
  </template>

  
<style scoped>
#aftsrt{
  display: flex;
  align-items: center;
}

#srtbtn{
  width: 13rem;
height: 4rem;
padding: 0.4rem;
margin-right: 1rem;
border-radius: 20px;
border-color: #ffffff;
background-color: rgba(255, 255, 255, 0.407);
border-style: solid;
border-width: 2px;
/* transition: width 2s 0; */
}

#nom{
    width: fit-content;
    border-radius: 2rem;
    transform: rotateY(180deg);
}


#p{
    border-color: #ffffff;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 5;
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 2px;

}

#noface{
  width: 8rem;
  height: 8rem;
  padding: 1rem;
  border: 8px solid white;
  border-radius: 20px;
  filter:invert(0%);
  background-image: linear-gradient( #F9D45A,#F98F63);
  /* filter: grayscale(50%); */
}

.noface{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  /* background: linear-gradient( #F9D45A,#F98F63); */
}

#backbtn{
    width: 4rem;
    height: 4rem;
    padding: 0.4rem;
    margin-right: 1rem;
    border-radius: 20px;
    border-color: #ffffff;
    background-color: rgba(255, 255, 255, 0.407);
    border-style: solid;
    border-width: 2px;

}




#toggles{
  position: absolute;
  z-index: 3;
  margin-top: 0.5rem;
  top: 0.5rem;
  right: 0.5rem;
  height: 4rem;
  width: 4rem;
  width: 4rem;
    height: 4rem;
    padding: 0.4rem;
    border-radius: 20px;
    border-color: #ffffff;
    background-color: rgba(255, 255, 255, 0.407);
    border-style: solid;
    border-width: 2px;
}

.topleft{
  display: flex;
  justify-content: center;
  align-items: center;
}

progress {
    writing-mode: horizontal-tb !important;
    appearance: auto;
    box-sizing: border-box;
    display: inline-block;
    height: 1em;
    width: 10em;
    vertical-align: -0.2em;
}

/* background design !!! */




.happyTitle{
    display: flex;
    text-align: left;  
    width: 70%;
    align-items: center;
}

.happyTitle img {
  width: 3rem;
  height: 3rem;
  margin-right: 2rem;
}


button:hover , #happySideBtn:hover ,#backbtn:hover, #toggles:hover{
    background-image: linear-gradient(rgba(255, 255, 255, 0.583),rgba(255, 255, 255, 0.387));
    border-color: #ffffff;
    border-style: solid;
    border-width: 2px;
    cursor: pointer;
}

.top{
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  padding-bottom: 0px;
}

.happySelection{
flex: 25;
display: flex;
flex-direction: column;
margin-top: 0.5rem;
align-items: center;

}

.happycontainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 10%;
    width: 85%; /* resize for video*/
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.happy{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 70%;
    background-color: rgba(255, 255, 255, 0.507);
    border-style: solid;
    border-color: #ffffff;
    border-width: 2px;
    border-radius: 15px;
    margin-bottom: 2rem;
    flex: 5;
}


#happySideBtn {
width: 4rem;
height: 4rem;
padding: 0.4rem;
border-radius: 20px;
border-color: #ffffff;
background-color: rgba(255, 255, 255, 0.407);
border-style: solid;
border-width: 2px;
}


</style>
  
  