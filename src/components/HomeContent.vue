<template>
    <div class="content">
        <div class="content-home">
            <h1 class="home-title">Encontre Aqui os Melhores Pratos para se Alimentar <span class="accent">Bem</span></h1>
            <h2 class="home-subtitle">Nos preocupamos com a sua alimentação e com o seu bem estar criando as melhores receitas para te saciar</h2>
            <div class="buttons">
                <button class="btn-green">Receitas</button>
                <button class="btn-gray">Sobre</button>
            </div> 
        </div>
        <div class="modelo-img">
            <img src="../assets/modelo_food.png" alt="Modelo">
        </div>
        <div class="cards">
            <div class="card">
                <img src="../assets/info_nutri.png" alt="Informações Nutricionais">
                <h1 class="card-title">Informações Nutricionais</h1>
                <p class="card-desc">Informações Nutricionais estão presentes em cada receita</p>
            </div>
            <div class="card">
                <img src="../assets/info_diversas.png" alt="Informações Nutricionais">
                <h1 class="card-title">Receitas Diversas</h1>
                <p class="card-desc">Receitas para todos os gostos e paladares</p>
            </div>
            <div class="card">
                <img src="../assets/info_veganas.png" alt="Informações Nutricionais">
                <h1 class="card-title">Receitas Veganas</h1>
                <p class="card-desc">Receitas Veganas extremamente deliciosas</p>
            </div>
            <div class="card">
                <img src="../assets/info_vegetariana.png" alt="Informações Nutricionais">
                <h1 class="card-title">Receitas Vegetarianas</h1>
                <p class="card-desc">Receitas Vegetarianas e para pessoas com intolerância a lactose</p>
            </div>
            
        </div>

        <div class="copyright">
            <p>Desenvolvido por Fillipe Bonanome</p>
        </div>
        
    </div>
</template>

<script>

    //import api from '@/services/api.js'

    export default {
        name: 'HomeContent',
        // mounted() {
        //     api.get('/recipes/random/?apiKey=f0c1e40c57f443b198ed55e93ee4aa91').then(response =>{
        //         console.log(response.data);
        //         console.log(response.data.recipes[0].title);
        //     })
        // }
    }
</script>

<style scoped>
.content {
    margin: 0 auto;
    margin-top: 2rem;
    display: grid;
    width:80%;
    grid-template-columns: repeat(12, 1fr);
    grid-gap:20px;
    overflow-x: hidden;
}

.content-home {
    grid-column-start: 1;
    grid-column-end: 7;
    margin-top: 3rem;
}

.home-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.4rem;
    line-height: 1.5;
    font-weight: 700;
}

.home-subtitle {
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #686868;
    margin-top: 1rem;
}

.accent {
    color: #009B17;
}

.modelo-img {
    grid-column-start: 7;
    grid-column-end: 12;
    grid-row-start: 1;
}

.buttons {
    margin-top: 1.75rem;
}

.btn-green {
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background-color: #009B17;
    border: none;
    border-radius: 35px;
    padding: 1rem 2.35rem;
    
    transition: all 300ms ease-in-out;
    cursor: pointer;
}

.btn-green:hover {
    opacity: 0.7;
}

.btn-gray {
    margin-left: 3rem;
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #686868;
    background-color: #EEEEEE;
    border: none;
    border-radius: 35px;
    padding: 1rem 2.85rem;
    
    transition: all 300ms ease-in-out;
    cursor: pointer;
}

.btn-gray:hover {
    background-color: #E2E2E2;
}

.cards {
    margin-top: 3rem;
    grid-column-start: 1;
    grid-column-end: 13;
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
}

.card {
    text-align: center;
    max-width: 210px;
}

.card img {
    height: 45px;
}

.card-title {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    color: #009B17;
    font-weight: 600;
}

.card-desc {
    font-family: "Montserrat", sans-serif;
    font-size: 0.75rem;
    color: #686868;
    font-weight: 600;
}

.copyright {
    margin-top: 2rem;
    grid-column-start: 1;
    grid-column-end: 13;
    text-align: center;
    color: #686868;
    font-family: "Montserrat", sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

@media (max-width:1180px) {

    .content-home {
        grid-column-end: 13;
        text-align: center;

    }

    .modelo-img {
        width:100%;
        grid-column-start: 1;
        grid-column-end: 13;
        grid-row-start: 2;
        text-align: center;
    }

    .modelo-img img {
        max-height: 100%;
        max-width: 100%;
    }

}

@media (max-width: 768px) {

    .content {
        max-width: 70%;
        overflow-x: hidden;
    }

    .content-home {
        margin-top: 1rem;
    }

    .home-title {
        font-size: 2rem;
    }

    .home-subtitle {
        font-size: 0.875rem;
    }

    .buttons {
        margin: 20px auto;
        display:flex;
        flex-direction: column;
        max-width: 200px;
    }

    .btn-gray {
        margin-left: 0;
        margin-top: 1rem;
    }

    .cards {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .card {
        max-width: 100%;
        margin-bottom: 2rem;
    }

}

</style>

