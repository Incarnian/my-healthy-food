<template>
    <div class="content">
        <p class="inicio">Inicio do grid</p>
        <p class="continuacao">Continuação do grid</p>
    </div>
</template>

<script>
    export default {
        name: 'HomeContent'
    }
</script>

<style scoped>
.content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap:20px;
}

.inicio {
    grid-column-start: 1;
    grid-column-end: 4;
    background-color: blue;
}

.continuacao {
    grid-column-start: 5;
    grid-column-end: 8;
}
</style>

