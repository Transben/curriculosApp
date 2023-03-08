<template>
    <EnvioTemplate 
        :src="imageSrc" 
        paragrafoUm="Oops, algo de errado aconteceu!"
        paragrafoFinal="Algum problema inesperado aconteceu, mas calma, o que você acha de tentar novamente? Se o problema persistir entre em contato pelo nosso telefone ou e-mail."
        estilo="botao-error"/>
</template>

<script>
import EnvioTemplate from '@/components/EnvioDadosTemplate/EnvioTemplate.vue'
export default {
    components: {
        EnvioTemplate
    },
    data() {
        return {
            imageSrc: require('../assets/imgHomePage/error.png'),
        };
    }
}
</script>

<style scoped>
@media (max-width: 600px) {
    .cardInputs {
        flex-direction: column;
        padding: 30px 0 30px 0;
    }

    .containerButtonEnv {
        width: 85%;
        flex-direction: column;
    }

    .containerButtonEnv button{
        width: 100% !important;
        margin-top: 5px;
    }


    .containerInput {
        width: 100%;
    }

    .containerInput input {
        width: 100%;
    }

    .containerTitulo textarea {
        width: 100%;
    }

    .divTermo p {
        padding: 10px;
    }
}
</style>