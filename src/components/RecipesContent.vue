<template>
  <div>
    <h1 class="title">Receitas</h1>
    <div class="container">

    <div v-for="(receita, index) in receitas.recipes" :key="index" class="card">
      <img class="card-img" :src="receita.image" alt="">
      <div class="card-content">
        <div class="card-text">
          <a :href="receita.sourceUrl" class="card-title">{{ receita.title }}</a>
          <p class="card-description">Serve {{receita.servings}} pessoas.</p>
          <p class="card-description">Essa receita possui glúten? <span class="green"> {{receita.glutenFree ? "Sim" : "Não"}}. </span></p>

        </div>
      <div class="card-info">
        <div class="card-timer">
          <img class="green" src="../assets/timer.svg" alt="">
          <p class="timer-text">{{ receita.readyInMinutes }} minutos</p>
        </div>
        <div class="card-diet">
          <img :class="receita.cheap ? greenClass : grayClass" src="../assets/cheap.svg" alt="Barata" title="Barata">
          <img :class="receita.vegan ? greenClass : grayClass" src="../assets/vegan.svg" alt="Vegana" title="Vegana">
          <img :class="receita.vegetarian ? greenClass : grayClass" src="../assets/vegetarian.svg" alt="Vegetariana" title="Vegetariana">
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
      receitas:[],
      greenClass: 'green',
      grayClass: 'gray',
    }
  },
  mounted() {
            api.get('/recipes/random/?apiKey=f0c1e40c57f443b198ed55e93ee4aa91&number=10').then(response =>{
                this.receitas = response.data;
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
  min-height: 200px;
  border-radius: 10px;
  display:flex;
  box-shadow: 6px 5px 8px 0px rgba(0,0,0,0.66);
  margin-bottom: 1rem;
  
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #009B17;
  text-decoration: none;
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
  width:70%;
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

@media (max-width:996px) {
  .card {
    flex-direction: column;
    grid-column-end: 12;
    min-height: 320px;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-text {
    margin-bottom: 3rem;
  } 

  .card-content {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 1rem;
    justify-content: space-between;
    height: 100%;
    width:95%;
  }

  .card-img {
    border-radius: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width:100%;
  }

  .timer-text {
    margin-left: 0.5rem;
  }

  .card-diet {
    margin-right: 0;
  }
}
</style>


