<script setup>

// import Home from './components/Home.vue';
// import questionaire from './components/questionaire.vue';
// import DadJokes from './components/DadJokes.vue';
// import Happy from './components/Happy.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <home></home> -->
  <!-- <questionaire></questionaire> -->
  <!-- <questions></questions> -->
  <!-- <DadJokes></DadJokes> -->
  <!-- <happy></happy> -->
  <router-view></router-view>
  <!-- state management: vueX 
        for global variables -->
</template>

<style>
*{
    overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box; /*what*/
}


/* background design !!! */

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

</style>

