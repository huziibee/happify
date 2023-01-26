<script>
export default {
	name: 'Dadjokes',
    
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
    coops:0,

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
      console.log("Window Location:" , window.location);
      const mykv = window.location.search;
      console.log("key & vals:", mykv);
      const url= new URLSearchParams(mykv);
      const q =url.get('points');
      this.points= parseInt(q);
      this.coops = parseInt(url.get('comps'))+30;

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
      console.log(this.points);
      this.$router.push('/?points='+this.points+'&comps='+this.coops);
      // this.$router.push('/');

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

                    <router-link id="backbtn" to="/">
                      <img src="../assets/DadJokes/back-button.png">
                    </router-link>

                    <div>
                        <h3>Dad Jokes</h3>
                        <p> {{completed}}/5 Completed</p>
                    </div>

                </div>

                <div class="topleft" >
                  <button id="jokeSideBtn">
                    <h2 v-if="start" @click="started()">Start</h2>
                    <h2 v-else-if="next" @click="nextbtn">Next</h2>
                    <h2 v-else @click="sub()">Submit</h2>
                  </button>
                </div>

              </div>

              <section class="jokeSelection">

                <div class="jokecontainer">

                  <div class="joke">

                    <img src="../assets/DadJokes/icons8-get-quote-48.png" id="topimg">

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

                    <img id="bottomimg" src="../assets/DadJokes/icons8-get-quote-48.png" >

                  </div>
                  
                </div>
                
                <div class="jokeratingbtn">
                  <button @click="add(0)">Lame</button>
                  <button @click="add(1)">Awesome</button>
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
    }

    #punch{
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80%;
    position: absolute;
    align-self: flex-end;
    bottom: 1px;
    }

    #topimg{
    align-self: start;
    transform: rotate(180deg);
    margin: 1rem;
    margin-left: 1.5rem;
    width: 4rem;
    }


    #bottomimg{
    align-self: flex-end;
    margin: 1rem;
    margin-right: 1.5rem;
    width: 4rem;
    }

    .textcentre{
    overflow-y: auto;
    display: flex;
    position: relative;
    flex-direction: column;
    height: 60%;
    width: 100%;
    }


    .textfield{
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }




    .JokeTitle{
        display: flex;
        text-align: left;  
        width: 70%;
        align-items: center;
    }

    .JokeTitle img {
    width: 3rem;
    height: 3rem;
    margin-right: 2rem;
    }

    #start{
    text-align: left;
    }
    #punchlineid {
    text-align: right;
    }

    button:hover , #jokeSideBtn:hover{
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

    .jokeSelection{
        flex: 25;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .jokecontainer{
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

    .joke{
        display: flex;
        position: relative;
        justify-content: space-between;
        width: 90%;
        height: 70%;
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

</style>
  
  