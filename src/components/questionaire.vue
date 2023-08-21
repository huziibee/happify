<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<script>

export default {
  
	name: 'Questionaire',
	data() {
    return {

		setup: '',
		punchline: '',
		responseAvailable: false,

    point: 0,
    points: 0,
    next: true,
    checkpoints: false,
    submitable: false,
    completed: 0,
    coops: '',

    q:[
      '2. Are you a perfectionist?',
      "3. Did you work your hardest to get to the point at which you're at right now?",
      '4. Do you have an end goal, and are you actively on the right path to achieve it?',
      '5. Do you give yourself just as much time to relax as you do to work?',
      '6. If you were to meet yourself as someone else, would you be friends with you?',
      '7. Can you accept that not everything is static, and can you welcome change?',
      '8. Do you ever sit back and praise yourself for your accomplishments?',
      '9. Do you laugh more than you cry?',
      '10. If your life were to remain the way it is right now, forever, would you be able to stand it?',
    ],
    a:[
      "Although striving for the best is good motivation, setting a bar for perfection will set you up for failure.<br><br>This will inevitably leave you unhappy with your current situation.",
      "A trick to being happy is being able to look back and realize that everything in front of you is a result of the hard work you did.<br><br>If this isn’t the case, it’s never too late.<br><br>Work hard today, and you’ll reap the benefits tomorrow (even if those benefits are just coming home to a clean house).",
      "Having a goal and desiring more are two different concepts.<br><br>If you’re actively on the path to achieving a goal, you’ll feel much more satisfied with every advancement you achieve.<br><br>Therefore, you'll be happy with every little difference, no matter how small it is.",
      "Stressing yourself out with work is a good way to spiral into dissatisfaction.<br><br>Remember to take time every day to unwind and reflect, and do something good for yourself.",
      "It’s hard to see yourself in someone else’s eyes, but take a step back.<br><br>Are you selfish? Are you a good friend? Would you trust yourself with secrets, and would you always stay reliable?<br><br>Reassurance (or simply adjusting to make yourself someone you’d associate with) are great ways to be happy with your current situation.",
      "Some people are unhappy because they’re too comfortable. But change is inevitable.<br><br>Although change can often be small, you need to be able to accept everything life throws at you.",
      "How can you be happy with how far you’ve come if you never acknowledge the good you’ve done?<br><br>Don’t wait for someone else to reward you. Reward yourself from time to time.",
      "This may sound obvious, but sometimes, we don’t even realize we’re overcome with negative emotion until there’s a profound absence of it.<br><br>Remember to allow more things in your life that will make you laugh or smile to override the few things that are bound to make you cry.",
      "Things will change. But this is the ultimate test to see if you’re content with your current situation.<br><br>This is the product of all the previous questions.<br><br>If you answer"+ ' "yes" '+ "to this, you’re ready for anything life throws your way.<br><br>If you answer "+' "no," '+" it’s time to make some changes in your life that will help you grow as a person and allow yourself the opportunity to be comfortable with your place in the world.<br><br>Happiness is something we have to learn to welcome into our lives. We can’t just expect it.<br><br>That’s the problem we often face. We expect happiness to come without any effort.<br><br>Life is about perspective.<br><br>All of these questions can have positive answers regardless of your current situation, as long as you have the proper perspective and outlook on life.<br><br>Sometimes, all we need is a little attitude adjustment. I know I do.<br><br>Choose to be happy, my friends.",
    ],
    qstr: '1. Do you often find yourself wanting more?',
    astr: "To be truly content with your life at any stage, you must learn to work for higher goals, while still accepting what you currently have.<br><br>Welcome more, but don’t covet it.",
    

    };
  },

	methods: {

    add(num){
      this.point=num;
      this.checkpoints=true;
    },

    complete(){
      if (this.completed===9){
        this.next=false;
      }
      else {
        this.submitable=true;
      }
    },

    place(){
      this.qstr=this.q[this.completed];
      this.astr=this.a[this.completed];
    },

    nextbtn(){
      if (this.checkpoints){
        this.checkpoints=false;
        // this.setup='g';
        // this.fetchData();
        this.place();
        this.points+=this.point;
        this.completed++;
        this.complete();
      }
    },

    sub(){
      if (this.checkpoints){
        this.points+=this.point;
        let x = Math.floor(Math.random()*10)+1;
        this.$store.state.points+=((this.points*1.5)+x);
        this.$store.state.QuestCompleted='Completed';
        this.$store.state.questPage='/';
        this.$router.push('/');
      }
      // this.setup='j'

      // console.log(this.points);
      
      // this.msg=this.points;


    },



	}
};
</script>

<template>
  <body>
      <main>
          <section class="glass">

              <div class="top">
                  <div class="JokeTitle">
                    <router-link id="backbtn" to="/">
                      <img src="../assets/Questions/back-button.png">
                    </router-link>

                      <div class="o">
                        <h3>Questionaire</h3>
                        <p> {{completed}}/10 Completed</p>
                    </div>
                </div>

                <div class="topleft" >
                  
                  <button id="jokeSideBtn">
                    <h2 v-if="next" @click="nextbtn">Next</h2>
                    <h2 v-else @click="sub()">Submit</h2>
                    <!-- <img src="./assets/copy.png" > -->

                  </button>
                </div>

              </div>
              <section class="jokeSelection">

                <div class="jokecontainer">

                  
                  <div class="joke">
                    <div class="topimg">
                      <img src="../assets/Questions/question-and-answers.png" id="topim">

                    </div>
                      <div class="textfield">
                        <div class="textcentre">
                          <h2 v-html="qstr"></h2>
                          <div class="ra">

                            <label class="custom-radio-btn">
                              <input type="radio" name="sample" @click="add(1)">
                                <span class="label"><h3>Yes</h3></span>
                                <span class="checkmark"></span>
                              </label>
  
                              <label class="custom-radio-btn">
                                <input type="radio" name="sample" @click="add(0)">
                                <span class="label"><h3>No</h3></span>
                                <span class="checkmark"></span>
                              </label>

                          </div>
                          <!-- <div class="opts">
                            <input type="radio" id="no">
                            <label for="no"><h3>no</h3></label>
                            <br>
                            <input type="radio" id="yes">
                            <label for="yes">yes</label>
                          </div> -->
                          
                          <p v-if="checkpoints" id="punch" v-html="astr"></p>
                          <!-- <div id="setupid">

                            <h2>{{ setup }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem quas, ab nam cupiditate atque quibusdam odit sapiente nihil dolores.</h2>
                            <br>
                          </div>
                          <br>
                          <div id="punch">

                            <p id="punchlineid">{{ punchline }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a dolorem nihil corporis quod reiciendis error aspernatur placeat, earum inventore, nostrum iure architecto hic voluptatem autem, suscipit unde tenetur! Provident.</p>
                          </div> -->
                        </div>
                      </div>
                      <div class="bottomimg">
                        <img src="../assets/Questions/question-and-answers.png" >

                      </div>

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
*{
margin: 0;
padding: 0;
box-sizing: border-box; /*what*/

}

.ra{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 7px;
}

.custom-radio-btn {
  --size: 3rem;
  min-width: 15rem;
  max-width: 8rem;
  height: var(--size);
  border-radius: 20px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  cursor: pointer;
  /* changes from the video   */
  
  /* margin: 0 10px; */
  margin: 10px;
  margin-bottom: 0px;
  position: relative;
  border: 2px solid white;
  /* padding-left: var(--size); */
}

.custom-radio-btn input {
  display: none;
}

/* handle if you want label on the left of the checkmark instead */

/* label  */

.custom-radio-btn .label {
  margin-left: 2.5rem;

  font-weight:bolder;
  
}
/* 
.custom-radio-btn[aria-label]::after {
  content: attr(aria-label);
  display: inline-block;
  margin-left: 5px;
} */

/* checkmark */

.custom-radio-btn .checkmark {
  --gap: 3px;
  --border: 12px;
  --check-color: #ffffff;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: inline-block;
  transition: opacity 0.3s ease;
  /* changes from the video  */
  

  padding: var(--gap);
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 3px;
}

.custom-radio-btn.left .checkmark {
  left: auto;
  right: 0;
}

.custom-radio-btn input:checked ~ .checkmark {
  /* changes from the video  */

  /*  content box origin will make sure the bg-image only stays inside content area in between padding  */
  background-origin: content-box;
  background-repeat: no-repeat;
  background-image: radial-gradient(
    circle at center, 
    var(--check-color) 
     /* the size of the check mark is determined by subtracting from the size of the circle
     the border(both sides) and the gap(both sides) than dividing it by 2 to get the radius of the circle        */
       calc((var(--size) - (var(--border) * 2) - (var(--gap) * 2)) / 2), 
    rgba(255, 255, 255, 0) 0);
    /* display: none; */
}

#backbtn{
  text-decoration: none;
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
  /* display: flex; */
  align-self: start;
  /* width: 100%; */
}



.opts{
  display: flex;
  align-items: center;
  justify-content: center;
}

/* #topim{
  height: 2rem;
  width: 2rem;
} */

#punch{
  display: flex;
  /* align-items: center;
  justify-content: end; */
  width: 80%;
  height: 8rem;
  overflow-y: scroll;
  
  background: white;
  border-radius: 20px;
  
  /* height: 30%;  */
  position: absolute;
  align-self: flex-end;
  bottom: 1px;
  padding: 20px;
}



.topimg{
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-items: flex-end; */
  align-self: start;
  /* transform: rotate(180deg); */
  margin: 1rem;
  margin-left: 1.5rem;

  /* height: fit-content;
  width: fit-content; */
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
cursor: pointer;
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
  
  