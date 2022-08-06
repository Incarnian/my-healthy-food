<template>
  <div>
    <h1 class="title">Receitas</h1>
    <div class="container">

    <div class="card">
      <img class="card-img" :src="this.linkImgReceita" alt="">
      <div class="card-content">
        <div class="card-text">
          <h1 class="card-title">{{ this.nomeReceita }}</h1>
          <p class="card-description">{{ this.descReceita }}</p>
        </div>
      <div class="card-info">
        <div class="card-timer">
          <img class="green" src="../assets/timer.svg" alt="">
          <p class="timer-text">{{ this.tempoReceita }} minutos</p>
        </div>
        <div class="card-diet">
          <img :class="baratoReceita == 'true' ? greenClass : grayClass" src="../assets/cheap.svg" alt="Barata" title="Barata">
          <img :class="veganReceita == 'true' ? greenClass : grayClass" src="../assets/vegan.svg" alt="Vegana" title="Vegana">
          <img :class="vegetReceita == 'true' ? greenClass : grayClass" src="../assets/vegetarian.svg" alt="Vegetariana" title="Vegetariana">
        </div>
      </div>
      </div>
      
    </div>

    </div>
  </div>
</template>

<script>
import api from '@/services/api.js'

export default {
  name: 'RecipesContent',
  data() {
    return {
      nomeReceita: '',
      tempoReceita: '',
      descReceita: '',
      linkImgReceita: '',
      baratoReceita: '',
      veganReceita: '',
      vegetReceita: '',
      greenClass: 'green',
      grayClass: 'gray'
    }
  },
  mounted() {
            api.get('/recipes/random/?apiKey=f0c1e40c57f443b198ed55e93ee4aa91').then(response =>{
                this.nomeReceita = response.data.recipes[0].title;
                this.tempoReceita = response.data.recipes[0].readyInMinutes;
                this.descReceita = response.data.recipes[0].sourceUrl;
                this.linkImgReceita = response.data.recipes[0].image;
                this.baratoReceita = response.data.recipes[0].cheap;
                this.veganReceita = response.data.recipes[0].vegan;
                this.vegetReceita = response.data.recipes[0].vegetarian;
                console.log(response.data);
            })
        }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  width: 80%;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  overflow-x: hidden;
  min-height: 100vh;
}

.title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: #009B17;
  width:80%;
  margin: 0 auto;
}

.card {
  background-color: #fff;
  grid-column-start: 1;
  grid-column-end: 12;
  height: 200px;
  border-radius: 10px;
  display:flex;
  box-shadow: 6px 5px 8px 0px rgba(0,0,0,0.66);
  
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #009B17;
}

.card-description {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
}

.card-content {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:100%;
}

.card-timer {
  display:flex;
  width:50%;
  align-items: center;
}

.gray {
  filter: invert(89%) sepia(0%) saturate(7479%) hue-rotate(62deg) brightness(91%) contrast(84%);
}

.green {
  filter: invert(34%) sepia(96%) saturate(1190%) hue-rotate(104deg) brightness(92%) contrast(101%);
}

.timer-text {
  margin-left: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
}

.card-img {
  height: 200px;
  width:275px;
  margin-right: 1rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.card-info {
  width:100%;
  display:flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card-diet {
  margin-right: 1rem;
}

.card-diet img {
  margin-right: 0.5rem;
}
</style>


