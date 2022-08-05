<template>
  <div class="nav">
      <div class="nav-bar">
        <div class="nav-logo">
          <img src="../assets/logo_food.png" alt="Logomarca">
          <p class="logo_text">My Healthy Food</p>
        </div>
        <div class="nav-links">
          <ul>
            <li>Receitas</li>
            <li>Ingredientes</li>
            <li>Sobre</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderNav'
  }
</script>

<style scoped>

.nav {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-bar {
  width:1160px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display:flex;
  justify-content: center;
  align-items: center;
}
.logo_text {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 1.125rem;
  margin-left: 1rem;
}

.nav-links ul{
  display:flex;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
}

.nav-links ul li{
  margin: 0 10px;
  transition: all 300ms ease-in-out;
}

.nav-links ul li:hover{
  color: #009B17;
  cursor: pointer;
}
</style>

