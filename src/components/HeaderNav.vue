<template>
  <header>
    <nav>
      <div class="logo-container">
        <a href="/"><img id="logo" src="../assets/logo_food.png" alt="Logo"></a>
        <p class="logo-text">My Healthy Food</p>
      </div>
      
      <img id="menu-button" src="../assets/menu_mobile.png" alt="Abrir Menu" @click="openMenu()">

      <div id="menu-overlay" v-if="menuActive" @click="closeMenu()"></div>

      <div id="menu-items" :class="{active:menuActive}">

        <ul>
          <li><router-link to="/receitas">Receitas</router-link></li>
          <li><router-link to="/ingredientes">Ingredientes</router-link></li>
          <li><router-link to="/sobre">Sobre</router-link></li>
        </ul>

      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'HeaderNav',
    data() {
      return {
        menuActive: false
      }
    },
    methods: {
      openMenu: function() {
        this.menuActive = true;
      },
      closeMenu: function() {
        this.menuActive = false;
      }
    }
  }
</script>

<style scoped>

header {
  width:80%;
  height: 120px;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}

.logo-container {
  display:flex;
  align-items: center;
  margin-top: 1rem;
}

.logo-container .logo-text {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  letter-spacing: 3px;
  font-weight: 700;
  margin-left: 1rem;
}

#menu-button {
  height: 35px;
}

#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width:40%;
  height: 100vh;
  background-color: rgba(20, 30, 20, 0.7);
}

#menu-items {
  position: fixed;
  top:0;
  right: 0;
  width:60%;
  height: 100vh;
  background-color: #222A2B;
  display: none;
  flex-direction: column;
  align-items: center;
}

.active {
  display:flex !important; 
}

ul {
  list-style: none;
  text-align: center;
  margin-top: 1rem;
}

ul li {
  margin: 20px 0;
}

ul li a {
  text-decoration: none;
  color:white;
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;

  transition: all 300ms ease;
}

ul li a:hover {
  color: #009B17;
}

@media (min-width:1178px) {
  #menu-button {
    display:none;
  }

  #menu-items {
    display: flex;
    position: static;
    height: 120px;
    width: auto;
    background-color: transparent;
  }

  ul {
    display:flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
  }

  ul li {
    margin-left: 2rem;
  }

  ul li a {
    color:black;
    font-weight: 500;
  }
}
</style>

