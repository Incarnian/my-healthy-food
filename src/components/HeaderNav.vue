<template>
  <div class="nav">
      <div class="nav-bar">
        <div class="nav-logo">
          <a href="/">
            <img src="../assets/logo_food.png" alt="Logomarca">
          </a>
          <p class="logo_text">My Healthy Food</p> 
        </div>
        <div class="menu-mobile">
          <img id="menu-image" src="../assets/menu_mobile.png" alt="Abrir Menu">
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

.menu-mobile{
  display: none;
}

#menu-image {
  height: 36px;
}

.nav {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-bar {
  width:80%;
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

@media (max-width:768px) {
  .nav-links {
    display: none;
  }

  .menu-mobile {
    display: block;
  }
}
</style>

