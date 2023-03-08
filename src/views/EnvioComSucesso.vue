<template>
    <EnvioTemplate 
        :src="imageSrc" 
        paragrafoUm="Muito bem, recebemos seu curriculo com sucesso!"
        paragrafoFinal="Pode ficar tranquilo, o trabalho agora é com a gente. Se quiser registrar outro curriculo para uma outra vaga que lhe agrade, fique a vontade!"
        estilo="botao-sucess"/>
</template>

<script>
import EnvioTemplate from '@/components/EnvioDadosTemplate/EnvioTemplate.vue'
export default {
    components: {
        EnvioTemplate
    },
    data() {
        return {
            imageSrc: require('../assets/imgHomePage/sucess.png'),
        };
    }
}
</script>

<style scoped>

</style>