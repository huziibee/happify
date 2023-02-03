<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<script scoped>

export default {
	name: 'HelloWorld',
	data() {
    return {

		setup: '',
		punchline: '',
		responseAvailable: false,

    point: 0,
    points: 0,
    pos: 1,
    next: true,
    checkpoints: false,
    completed: 0,

    };
  },

	methods: {

    add(num){
      this.point=num;
      this.checkpoints=true;
    },

    complete(){
      if (this.completed===4){
        this.next=false;
      }
    },

    nextbtn(){
      if (this.checkpoints){
        this.checkpoints=false;
        // this.setup='g';
        this.pos++;
        this.points+=this.point;
        this.completed++;
        this.complete();
      }
    },

    sub(){
        if (this.checkpoints){
        this.points+=this.point;
        let x = Math.floor(Math.random()*10)+1;
        this.$store.state.points+=((this.points*3)+x);
        this.$store.state.videoPage='/';
        this.$router.push('/');
        this.$store.state.VideosCompleted='Completed';
        }

        // console.log(this.points);
      // this.setup='j'

    },


	}
};
</script>

<template>
  <body>
      <main>
          <section class="glass">

              <div class="vidtop">
                  <div class="VideoTitle">
                    <router-link to="/" id="videobackbtn">
                      <img src="../assets/video/back-button.png">
                    </router-link>

                      <div class="o">
                        <h3>Funny Videos</h3>
                        <p> {{completed}}/5 Completed</p>
                    </div>
                </div>

                <div class="vidtopleft" >
                  
                  <button id="videoSideBtn">
                    
                    <h2 v-if="next" @click="nextbtn">Next</h2>
                    <h2 v-else @click="sub()">Submit</h2>
                    <!-- <img src="./assets/copy.png" > -->

                  </button>
                </div>

              </div>
              <section class="videoSelection">

                <div class="videocontainer">

                  
                  <div class="videopart">
                    <video v-if="1==pos" class="vidsc" src="../assets/video/1.mp4" autoplay controls></video>
                    <video v-else-if="2==pos" class="vidsc" src="../assets/video/2.mp4" autoplay controls></video>
                    <video v-else-if="3==pos" class="vidsc" src="../assets/video/3.mp4" autoplay controls></video>
                    <video v-else-if="4==pos" class="vidsc" src="../assets/video/4.mp4" autoplay controls></video>
                    <video v-else-if="5==pos" class="vidsc" src="../assets/video/5.mp4" autoplay controls></video>
                  </div>
                  
                </div>
                
                <div class="videoratingbtn">
                  <button @click="add(0)">Lame</button>
                  <button @click="add(1)">Awesome</button>
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

  
<style>
*{
margin: 0;
padding: 0;
box-sizing: border-box; /*what*/

}

.pp{
  display: flex;
  align-items: center;
}

.vidsc{
  height: 26rem;
  width: 20rem;
  /* border-radius: 2rem; */

}

.videopart{
display: flex;
position: relative;
justify-content: center;
/* align-items: center; */
/* text-align: center; */
/* width: fit-content; */
width: 20rem;
padding: 1rem;
height: fit-content;
/* margin: 1rem; */
background-color: rgba(255, 255, 255, 0.507);
border-style: solid;
border-color: #ffffff;
border-width: 2px;
border-radius: 15px;
flex: 5;

}


#videobackbtn{
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





.VideoTitle{
display: flex;
text-align: left;  
width: 70%;
align-items: center;
/* justify-content: space-between; */
}

.VideoTitle img {
  width: 3rem;
  height: 3rem;
  /* background: rgb(255, 255, 255); */
  /* border-radius: 50%; */
  margin-right: 2rem;
}


h1{
font-weight: 600;
opacity: 0.8;
font-size: 3rem;
padding-top: 2rem;
padding-left: 2rem;
}

button:hover , #videoSideBtn:hover{
background-image: linear-gradient(rgba(255, 255, 255, 0.583),rgba(255, 255, 255, 0.387));
cursor: pointer;
border-color: #ffffff;
border-style: solid;
border-width: 2px;
}

.vidtop{
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  padding-bottom: 0px;
}

.videoSelection{
flex: 25;
display: flex;
flex-direction: column;
align-items: center;

}

.videocontainer{
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



#videoSideBtn {
width: 6rem;
height: 4rem;
padding: 0.4rem;
border-radius: 20px;
border-color: #ffffff;
background-color: rgba(255, 255, 255, 0.407);
border-style: solid;
border-width: 2px;
}

.videoratingbtn{
display: flex;
justify-content: center;
align-items: center;
width: 60%;
height: 100%;
margin-bottom: 2rem;
}

.videoratingbtn button{

  border-radius: 20px;
  /* font-weight: 600; */
border-color: #ffffff;
background-color: rgba(255, 255, 255, 0.407);
border-style: solid;
border-width: 2px;

width: 45%;
height: 2.5rem;
margin-left: 0.3rem;
margin-right: 0.3rem; 

}

button:active{
  background-image: linear-gradient(rgba(255, 255, 255, 0.583),rgba(255, 255, 255, 0.387));


}

</style>
  
  