<script>
  export default {
    name: 'Home',

	data() {
    return {
        complete: 'Completed',
    }
  },

  methods:{
    res(){
      if (this.$store.state.QuestCompleted===this.complete && 
      this.$store.state.VideosCompleted===this.complete && 
      this.$store.state.DadCompleted===this.complete && 
      this.$store.state.MeterCompleted===this.complete)
      {
        return true;
      }
      // return true;
    },
  }
}
</script>

<template>
<body>
    <main>

        <section class="glass">

            <div class="dash">

                <div class="user">
                  
                  <div class="imgbrd">
                    <img  src="../assets/Homepage/hexagon.png" alt="logo" id="logo">
                  </div>

                    <div class="o">
                      <h3>Happify</h3>
                      <p>by synthesis</p>
                      <!-- <p>{{ this.$store.state.points }}</p> -->
                  </div>

                </div>

                <nav id="homeNavOpts">

                    <a class="pages" href="https://youtu.be/dQw4w9WgXcQ">
                        <img src="../assets/Homepage/user.png" id="home">
                        <h3>Profile</h3>
                        <!-- profile, settings add one more thing -->
                    </a>

                    <a class="pages" href="https://youtu.be/dQw4w9WgXcQ">
                      <img style="padding:5px;" src="../assets/Homepage/settingss.png">
                        <h3>Settings</h3>
                    </a>

                    <a class="pages" href="https://youtu.be/dQw4w9WgXcQ">
                      <img style="padding:5px;" src="../assets/Homepage/mail.png">
                        <h3>Socials</h3>
                    </a>  

                    <a class="pages" href="https://youtu.be/dQw4w9WgXcQ">
                      <img style="padding:5px;" src="../assets/Homepage/about_us_icon.png">
                        <h3>About Us</h3>
                    </a>      
                    
                  </nav>

                  <a class="pro" href="https://youtu.be/dQw4w9WgXcQ">
                    <h2>More Apps!</h2>
                    <img src="../assets/Homepage/dance.png" alt="">
                  </a>

                </div>
                
                <div class="main">
                  
                  <div class="topper">
                    <h1 style="display:inline-block;">Welcome</h1>

                    <router-link v-if="res()" class="leader" to="/results">
                      <h3 id="lead">Results</h3>
                    </router-link>

                  </div>
              
            
              <div class="cards">

                <div class="pairOfCards">

                  <router-link class="card" :to=this.$store.state.questPage>

                    <img src="../assets/Homepage/questionnaire.png">

                    <div class="info">
                      <h2>Questionaire</h2>
                      <p>{{ this.$store.state.QuestCompleted }}</p>
                    </div>

                  </router-link>

                  <router-link class="card" :to=this.$store.state.videoPage>

                    <img src="../assets/Homepage/video-camera.png">
                    
                    <div class="info">
                      <h2>Funny videos</h2>
                      <p>{{ this.$store.state.VideosCompleted }}</p>
                    </div>

                  </router-link>

                </div>
                
                <div class="pairOfCards">

                  <router-link class="card" :to=this.$store.state.dadPage>
                    
                    <img src="../assets/Homepage/joke.png">
                    
                    <div class="info">
                      <h2>Dad jokes</h2>
                      <p>{{ this.$store.state.DadCompleted }}</p>
                    </div>
                  
                  </router-link>
                  
                  <router-link class="card" :to=this.$store.state.meterPage>
                    <!-- <img :src="imageSrc" alt=""> -->
                    
                    <img src="../assets/Homepage/rating.png">
                    
                    <div class="info">
                      <h2>Happiness meter</h2>
                      <p>{{ this.$store.state.MeterCompleted }}</p>
                    </div>
                  
                  </router-link>
                  
                </div>

              </div>

            </div>

        </section>
    </main>

    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
    
    
</body>
</template>

<style scoped>


.topper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.glass{
  flex-direction: row;
}

a {
  text-decoration: none;
}

*{
  /* color: white; */
}

.dash{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.3));
  border-radius: 2rem;
  
}

/* change */
#logo {
  width: 3rem;
  height: 3rem;
  /* padding: 8px; */
  /* border-radius: 50%; */
  /* transform: rotate(-40deg); */
}

.imgbrd{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  padding: 8px;
  /* padding-right: 0px; */
  border-radius: 50%;
  /* background: linear-gradient(rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.3)); */
}

.user{
  display: flex;
  text-align: left;  
  align-items: center;
  margin-right: 5rem;
  line-height: 22px;

}

.pages img {
  height: 3rem;
  width: 3rem;
  margin: 1px;
  margin-right: 2rem;
  border-color: #ffffff00;
  background-color: rgba(255, 255, 255, 0.407);
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
}

#homeNavOpts{
    margin-right: 2rem;
}

/* ??? */
#home{
  padding: 0.5rem;
}


/* change */
.pages{
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: #000;
  margin: 1rem;
  /* background-color: red; */
  padding: 0.4rem;
  border-radius: 20px;
  width: 90%;
}


.pro {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  
  border: 2rem, solid, white;
  width: 15rem;
  color: yellow;
  background-image: linear-gradient(-90deg,#f5cb42,#d24103);
  border-radius: 2rem;
  line-height: 27px;

}

.pro img{
  margin: 1rem;
  width: 6rem;
  height: 6rem;
}

/* double check?? */
.main img {
  height: 6.3rem;
  /* width: 9.5rem; */
  /* border-radius: 20%; */
}

h1{
  font-weight: 600;
  color: #ffffffa2;
  opacity: 0.8;
  font-size: 3rem;
  padding-top: 2rem;
  padding-left: 2rem;
  /* padding: 2rem; */
  /* margin: 0; */
}

p {
  color: rgb(71, 70, 70);
}


.pairOfCards{
  display: flex;
}

.cards{
  /* margin-top: 2rem; */
  /* if results active margintop==0 */
  padding-top: 0px;
  padding: 1.7rem;
  display: flex;
  flex-direction: column;
}


.card{
  text-decoration: none;
  line-height: 25px;

  color: #000;
  display: flex;
  flex-direction: column;
  /* width: 20rem; */
  flex: 1;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-color: #ffffff00;
  background-color: rgba(255, 255, 255, 0.407);
  border-style: solid;
  border-width: 2px;
  border-radius: 2rem;
  margin: 1rem;
  /* filter: drop-shadow(0 0 0.6rem grey); */
  /* box-shadow: 2px 2px grey; */
  
  /* padding: 0.5rem; */
  /* padding-right: 3rem; */
  /* background-image: linear-gradient(red,green); */
  
  

}

@keyframes glow {
  from {
    background-position: 0%;
  }
  to {
    background-position: 100%;
  }
}

.card:active{
  background-image: linear-gradient(rgba(255, 255, 255, 0.583),rgba(255, 255, 255, 0.387));

}

.card:hover , #lead:hover , .pages:hover{
  /* background-image: linear-gradient(to top,rgba(255, 255, 255, 0.357),rgba(255, 255, 255, 0.198)); */
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
  background-size: 100%;
  transform: translateY(-2px);
  /* animation: glow 2s linear forwards; */
  
}

.pages:hover{
  background-image: linear-gradient(rgba(255, 255, 255, 0.357),rgba(255, 255, 255, 0.198));
}


/* #home{
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
  border-radius: 2rem;
} */


.main{
  flex: 2;
}

.leader{
  display: flex;
  margin-bottom: 2rem;
  justify-content: end;
  /* align-items: center; */
}


#lead{
  /* display: none; */
  color: rgba(226, 221, 221, 0.747);
  color: #ffffffa2;

  /* color: linear-gradient(white,orange); */
  text-decoration: none;
  text-align: center;
  width: 17rem;
  height: 2.5rem;
  margin: 3rem;
  margin-bottom: 0px;
  padding: 0.4rem;
  border-radius: 20px;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 0.407);
  border-style: solid;
  border-width: 2px;
  /* filter: drop-shadow(0 0 0.3rem grey); */
}
</style>
