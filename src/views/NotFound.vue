<template>
    <EnvioTemplate 
        :src="imageSrc" 
        paragrafoUm="Nada por aqui"
        paragrafoFinal="Parece que você chegou em um local desconhecido. Que tal voltar?"
        estilo="botao-notfound"/>
</template>

<script>
import EnvioTemplate from '@/components/EnvioDadosTemplate/EnvioTemplate.vue'
export default {
    components: {
        EnvioTemplate
    },
    data() {
        return {
            imageSrc: require('../assets/imgHomePage/notFound.png'),
        };
    }
}
</script>

<style scoped>

</style>