<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	data() {
    return {

		setup: '',
		punchline: '',
		responseAvailable: false,

    point: 0,
    points: 0,
    next: true,
    start: true,
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
      if (this.completed===5){
        this.next=false;
      }
    },

    started(){
      // this.setup='moop';
      // this.punchline='moop2';
      this.fetchData();
      this.start=false;
    },

    nextbtn(){
      if (this.checkpoints){
        this.checkpoints=false;
        // this.setup='g';
        this.fetchData();
        this.points+=this.point;
        this.completed++;
        this.complete();
      }
    },

    sub(){
      // this.setup='j'

    },


		fetchData() {

			fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        "x-rapidapi-key": "e7f621adf1msh9839e5a8e50e82ep1bcd05jsnad60e3c36e67"
      }
    })
	.then(response => response.json())
      .then(data => {
        this.setup = data.body[0].setup;
		this.punchline = data.body[0].punchline;
		this.responseAvailable = true;
      });
		}


	}
};
</script>

<template>
  <body>
      <main>
          <section class="glass">

              <div class="top">
                  <div class="JokeTitle">
                    <button id="backbtn">
                      <img src="../assets/DadJokes/back-button.png">
                    </button>

                      <div class="o">
                        <h3>Dad Jokes</h3>
                        <p> {{completed}}/5 Completed</p>
                    </div>
                </div>

                <div class="topleft" >
                  
                  <button id="jokeSideBtn">
                    <h2 v-if="start" @click="started()">Start</h2>
                    <h2 v-else-if="next" @click="nextbtn">Next</h2>
                    <h2 v-else @click="sub()">Submit</h2>
                    <!-- <img src="./assets/copy.png" > -->

                  </button>
                </div>

              </div>
              <section class="jokeSelection">

                <div class="jokecontainer">

                  
                  <div class="joke">
                    <div class="topimg">
                      <img src="../assets/DadJokes/icons8-get-quote-48.png" id="topimg">

                    </div>
                      <div class="textfield">
                        <div class="textcentre">
                          <div id="setupid">

                            <h2>{{ setup }}</h2>
                          </div>
                          <br>
                          <div id="punch">

                            <p id="punchlineid">{{ punchline }}</p>
                          </div>
                        </div>
                      </div>
                      <div class="bottomimg">
                        <img src="../assets/DadJokes/icons8-get-quote-48.png" >

                      </div>

                  </div>
                  
                </div>
                
                <div class="jokeratingbtn">
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

  
<style scoped>
*{
margin: 0;
padding: 0;
box-sizing: border-box; /*what*/

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

.topleft{
  display: flex;
  justify-content: center;
  align-items: center;
}

#setupid{
  display: flex;
  align-self: start;
  /* width: 100%; */
}

#punch{
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  
  /* height: 30%;  */
  position: absolute;
  align-self: flex-end;
  bottom: 1px;
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
  overflow-y: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  height: 60%;
  width: 100%;
}


.textfield{
  display: flex;
  /* position: relative; */
  width: 80%;
  flex-direction: column;
  
  /* margin-top: 7rem;  */
  /* how do i centre this ??*/ 
  /* overflow-y: auto; */
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
#punchlineid {
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
/* margin-top: 0.5rem; */
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
display: flex;
position: relative;
justify-content: space-between;
/* align-items: center; */
/* text-align: center; */
width: 90%;
height: 70%;
/* margin: 1rem; */
background-color: rgba(255, 255, 255, 0.507);
border-style: solid;
border-color: #ffffff;
border-width: 2px;
border-radius: 15px;
flex: 5;

}


#jokeSideBtn {
width: 6rem;
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
height: 2.5rem;
margin-left: 0.3rem;
margin-right: 0.3rem; 

}

</style>
  
  