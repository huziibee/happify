<script>

  

export default {

  name: "Results",
}

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
                        <h3>Results</h3>
                      
                    </div>

                    </div>

                <div class="topleft">

                  <a id="rightemoji" @click="addsw()">

                    <img v-if="this.$store.state.points<=15" src="../assets/results/sad.png" id="happySideBtn">
                    <img v-else-if="this.$store.state.points<=45" src="../assets/results/happy.png" id="happySideBtn">
                    <img v-else-if="this.$store.state.points<=85" src="../assets/results/happier.png" id="happySideBtn">
                    <img v-else src="../assets/results/happiest.png" id="happySideBtn">
                  </a>
                  

                </div>

              </div>

              <section class="happySelection">

                <div class="happycontainer">

                  <div class="happy">
                    
                    <h2 style="text-align:center;">You have achieved a {{ this.$store.state.points }} % score <br> on the Happiness scale !!</h2>

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
  
  