<script>
  export default {
	data() {
    return {
        Queststats: 'Incomplete',
        Funstats: 'Incomplete',
        Dadstats: 'Incomplete',
        Happystats: 'Incomplete',
    }}}

</script>

<template>
<body>
    <main>

        <section class="glass">
            <div class="dash">
                <div class="user">
                    <img src="../assets/Homepage/hexagon.png" alt="logo" id="logo">
                    <div class="o">
                      <h3>Happify</h3>
                    <p>by synthesis</p>
                  </div>
                </div>

                <nav id="homeNavOpts">
                    <a class="pages" href="#">
                        <img src="../assets/Homepage/home.png" id="home">
                        <h2>Home</h2>
                    </a>
                    <hr>
                    <a class="pages" href="#">
                      <img src="../assets/Homepage/box.png">
                        <h2>Products</h2>
                    </a>
                    <hr>
                    <a class="pages" href="#">
                      <img src="../assets/Homepage/about us icon.png">
                        <h2>About Us</h2>
                    </a>                     
                  </nav>
                  <a class="pro" href="https://www.flaticon.com/search/2?word=hexagon">
                    <h2>More Apps!</h2>
                    <img src="../assets/Homepage/dance.png" alt="">
                  </a>
                </div>
                
                <div class="main">
                  
                  <div class="topper">
                    <h1 style="display:inline-block;">Welcome</h1>
                    <div class="leader">
                      <button href="#" id="lead"><p>Results</p></button>
                    </div>
                    

              </div>
              
            
              <div class="cards">

                <div class="pairOfCards">

                  <a class="card" href="#">

                    <img src="../assets/Homepage/questionnaire.png" alt="">
                    <div class="info">
                      <h2>Questionaire</h2>
                      <p>{{ Queststats }}</p>
                    </div>
                  </a>
                  <a class="card" href="#">
                  <img src="../assets/Homepage/video-camera.png" alt="">
                  <div class="info">
                    <h2>Funny videos</h2>
                    <p>{{ Funstats }}</p>
                  </div>
                </a>
                </div>
                <div class="pairOfCards">
                  <a class="card" href="#">
                    <img src="../assets/Homepage/joke.png" alt="">
                    <div class="info">
                      <h2>Dad jokes</h2>
                      <p>{{ Dadstats }}</p>
                    </div>
                  </a>
                  <a class="card" href="#">
                  <img src="../assets/Homepage/rating.png" alt="">
                  <div class="info">
                    <h2>Happiness meter</h2>
                    <p>{{ Happystats }}</p>
                  </div>
                </a>
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

.topper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  padding: 2px;
  /* border-radius: 50%; */
  margin-right: 2rem;
  /* transform: rotate(-40deg); */
}

.user{
  display: flex;
  text-align: left;  
  align-items: center;
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

hr {
  padding: 0.2px;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0.6));
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
  opacity: 0.8;
  font-size: 3rem;
  padding-top: 2rem;
  padding-left: 2rem;
  /* padding: 2rem; */
  /* margin: 0; */
}

p{
  color: rgb(71, 70, 70);
}


.pairOfCards{
  display: flex;
}

.cards{
  padding-top: 0px;
  padding: 1.7rem;
  display: flex;
  flex-direction: column;
}


.card{
  text-decoration: none;
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

.card:hover , #lead:hover , .pages:hover{
  background-image: linear-gradient(rgba(255, 255, 255, 0.583),rgba(255, 255, 255, 0.387));
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
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
  display: none;
  text-decoration: none;
  text-align: center;
  width: 17rem;
  height: 2.5rem;
  margin: 3rem;
  margin-bottom: 0px;
  padding: 0.4rem;
  border-radius: 20px;
  border-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.407);
  border-style: solid;
  border-width: 2px;
  /* filter: drop-shadow(0 0 0.3rem grey); */
}
</style>
