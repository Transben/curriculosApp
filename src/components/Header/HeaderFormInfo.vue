<template>
    <div class="mainHeader">
        <div class="contianerTituloPrincipal">
            <p>{{ tituloHeader }}</p>
            <img :src="imgIcon" alt="">
        </div>
        <p>{{ subtituloHeader }}</p>
    </div>
</template>

<script>
export default {
    name: 'HeaderFormInfo',
    props: {
        tituloHeader: {
            type: String,
            required: true
        },
        subtituloHeader: {
            type: String,
            required: true
        },
        imgIcon: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>
.mainHeader {
    width: 100%;
    height: auto;
    padding: 40px 0 40px 0;
}

.contianerTituloPrincipal{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.mainHeader p:nth-child(1) {
    font-family: Abel;
    font-size: 35px;
    font-weight: 600;
    color: #636363;
}

.mainHeader p:nth-child(2) {
    font-family: Abel;
    font-size: 20px;
    color: #636363;
}

@media (max-width: 600px) {
    .mainHeader p{
        padding: 10px;
    }
}
</style>