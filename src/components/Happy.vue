<script>

  

export default {

  name: "k",
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
    takePicture() {
      let context = this.canvas.getContext('2d')
      context.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight)
      this.$emit('picture-taken', this.canvas.toDataURL('image/png'))
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
      startnow(){
        if(this.On!=='none'){
          this.start=false;
          this.subtit='Detecting Happiness';
        }
      },
  },

    data() {
      return {
        video: null,
        canvas: null,
        On: 'none',
        but: false,
        prog: 30,
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
                  <div class="JokeTitle">
                    <button id="backbtn">
                      <img src="../assets/Happy/back-button.png">
                    </button>

                      <div class="o">
                        <h3>Happiness metre</h3>
                        <p>{{ subtit }}</p>
                    </div>
                </div>

                <div class="topleft">
                  <button v-if="start" id="srtbtn" @click="startnow()"><h2>Start</h2></button>
                  <div v-else id="aftsrt">
                    <progress style="margin-right: 1rem; height: 2rem;" :value="prog" max="100">30%</progress>
                    <a>
                      <img @click="pro" src="../assets/Happy/happy-face.png" id="jokeSideBtn">
                    </a>
                  </div>
                </div>

              </div>
              <section class="jokeSelection">

                <div class="jokecontainer">

                  
                  <div class="joke">
                    
                    <div v-if="start" id="p" @click="toggle()">
                      <img id="oo" src="../assets/Happy/no-camera.png" alt="">
                    </div>
                    <div class="noface" v-if="On==='none'">
                      
                      <img  id="noface" src="../assets/Happy/male.png" alt="">
                    </div>
                    <video :style="'display:'+On+';'" id="nom" ref="video" @canplay="initCanvas()">Stream unavailable</video>
                    <canvas ref="canvas" style="display: none;"/>
                    <!-- <video v-if="!cameraOn" controls id="vid" src="./assets/Create A Custom HTML5 Video Player.mp4">s</video> -->
                  </div>
                  
                </div>
                
              </section>

          </section>
      </main>
  
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>      
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
    /* left: 0px; */
    width: fit-content;
    /* object-fit:cover; */
    /* height: 30rem; */
    /* padding: 2rem; */
    border-radius: 2rem;
    /* height: 120%; */
    transform: rotateY(180deg);
    }
*{
margin: 0;
padding: 0;
box-sizing: border-box; /*what*/

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

#setup{
  display: flex;
  align-self: start;
  /* width: 100%; */
}

#punch{
  display: flex;
  width: 80%;
  align-self: flex-end;
}

.topimg{
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-items: flex-end; */
  align-self: start;
  transform: rotate(180deg);
  margin: 1rem;
  margin-left: 1.5rem;

  /* height: 2rem; */
  /* top: 0; */
}




.bottomimg{
  /* display: flex;
  flex-direction: column; */
  /* justify-items: flex-end; */
  align-self: flex-end;
  /* margin-left: 0rem; */
  margin: 1rem;
  margin-right: 1.5rem;
}

.textcentre{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
}

.textfield {
  height: 11rem;
  /* width: 100%; */
}
.textfield{
  display: flex;
  flex-direction: column;
  margin-top: 7rem; 
  /* how do i centre this ??*/ 
  overflow-y: auto;
  /* scroll-margin: 2px; */
  align-items: center;
  justify-content: center;
  /* text-align: right; */
}

::-webkit-scrollbar{
  /* border-radius: 2px; */
  width: 10px;
}

::-webkit-scrollbar-track{
  /* border-radius: 20px; */
  background: rgb(207, 207, 207);  
  border-radius: 2rem;
}

::-webkit-scrollbar-thumb{
  /* height: 2px; */
  border-radius: 2rem;
  /* background: rgb(154, 152, 152); */
  background: rgb(255, 255, 255);
}

::-webkit-scrollbar-thumb:hover{
  background: rgb(255, 255, 255);
}

#oo{
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

#vid{
  height: 100%;
  width: 100%;
  border-radius: 2rem;
}

main{

background-image: linear-gradient(#68B0D1,#99D8F5);
background-repeat: no-repeat;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
}

.glass {
background: white;
min-height: 80vh;
width: 60%;
background: linear-gradient(
    /* to right top, */
    rgba(255, 255, 255, 0.144), 
    rgba(255, 255, 255, 0.106)
);
/* background: rgba(255, 255, 255, 0.333); */
border-radius: 2rem;
border: 2px solid white;
z-index: 2;
backdrop-filter: blur(10px);
display: flex;
flex-direction: column;
}

.circle1, .circle2, .circle3 , .circle4{
background-image: linear-gradient(#F9D45A,#F98F63);
/* width: 20rem;
height: 20rem; */
/* margin: 30px; */
position: absolute;
border-radius: 50%;
}

.circle1 {
top: 1%;
right: 35%;
width: 10rem;
height: 10rem;
}

.circle2 {
bottom: 5%;
right: 5%;
height: 15rem;
width: 15rem;
}

.circle3 {
bottom: -10%;
left: 0%;
width: 20rem;
height: 20rem;
}

.circle4 {
top: 2%;
left: -13%;
width: 20rem;
height: 20rem;
}



.JokeTitle{
display: flex;
text-align: left;  
width: 70%;
align-items: center;
/* justify-content: space-between; */
}

.JokeTitle img {
  width: 3rem;
  height: 3rem;
  /* background: rgb(255, 255, 255); */
  /* border-radius: 50%; */
  margin-right: 2rem;
}

#start{
  text-align: left;
}
#punchline {
  text-align: right;
}

h1{
font-weight: 600;
opacity: 0.8;
font-size: 3rem;
padding-top: 2rem;
padding-left: 2rem;
/* padding: 2rem; */
/* margin: 0; */
}

button:hover , #jokeSideBtn:hover{
background-image: linear-gradient(rgba(255, 255, 255, 0.583),rgba(255, 255, 255, 0.387));
border-color: #ffffff;
border-style: solid;
border-width: 2px;
}

.top{
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  padding-bottom: 0px;
}

.jokeSelection{
flex: 25;
display: flex;
flex-direction: column;
margin-top: 0.5rem;
/* justify-content: center; */
align-items: center;

}

.jokecontainer{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex: 1;
height: 10%;
/* padding: 5rem; */
width: 85%; /* resize for video*/
/* flex: 5; */
margin-top: 2rem;
margin-bottom: 2rem;
/* background-color: rgba(255, 255, 255, 0.407);
border-style: solid;
border-color: #ffffff;
border-width: 2px;
border-radius: 20px; */
}

.joke{
  position: relative;
display: flex;
justify-content: space-between;
align-items: center;
justify-content: center;
/* text-align: center; */
width: 75%;
height: 70%;
/* border-radius: 2rem; */
/* margin: 1rem; */
background-color: rgba(255, 255, 255, 0.507);
border-style: solid;
border-color: #ffffff;
border-width: 2px;
border-radius: 15px;
margin-bottom: 2rem;
flex: 5;

}


#jokeSideBtn {
width: 4rem;
height: 4rem;
padding: 0.4rem;
border-radius: 20px;
border-color: #ffffff;
background-color: rgba(255, 255, 255, 0.407);
border-style: solid;
border-width: 2px;
}

.jokeratingbtn{
display: flex;
justify-content: center;
align-items: center;
width: 60%;
height: 100%;
margin-bottom: 2rem;
/* padding-left: 2rem; */

/* margin-top: 1.5rem; */
/* flex: 5; */
}

.jokeratingbtn button{

  border-radius: 20px;
border-color: #ffffff;
background-color: rgba(255, 255, 255, 0.407);
border-style: solid;
border-width: 2px;

width: 45%;
height: 2rem;
margin-left: 0.3rem;
margin-right: 0.3rem; 

}

</style>
  
  