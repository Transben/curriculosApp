<template>
    <div class="mainEnvio">
        <div class="containerMainContent">
            <img :src="src" alt="">
            <p>{{ paragrafoUm }}</p>
            <p>{{ paragrafoFinal }}</p>
            <button :class="estiloDoBotao">Voltar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EnvioTemplate',
    props: {
        src: {
            type: String,
            required: true
        },
        paragrafoUm: {
            type: String,
            required: true
        },
        paragrafoFinal: {
            type: String,
            required: true
        },
        estilo: {
            type: String,
            required: true
        }
    },
    computed: {
        estiloDoBotao(){
            if(this.estilo == 'erro') return 'botao-erro'
            if(this.estilo == 'sucess') return 'botao-sucess'
            else return this.estilo
        }
    }
}
</script>

<style scoped>

.botao-sucess{
    margin-top: 30px;
    width: 120px;
    height: 40px;
    border: none;
    background: #26c1a0;
    color: #fff;
    font-family: Abel;
    font-size: 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.3s;
}
.botao-sucess:hover{
    background: #15997c;
}
.botao-error{
    margin-top: 30px;
    width: 120px;
    height: 40px;
    border: none;
    background: #d41a0c;
    color: #fff;
    font-family: Abel;
    font-size: 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.3s;
}
.botao-error:hover{
    background: #a51c12;
}
.botao-notfound{
    margin-top: 30px;
    width: 120px;
    height: 40px;
    border: none;
    background: #0a51d6;
    color: #fff;
    font-family: Abel;
    font-size: 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.3s;
}
.botao-notfound:hover{
    background: #1046aa;
}
.mainEnvio {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.containerMainContent {
    width: 50vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.containerMainContent img {
    width: 150px;
    margin-bottom: 30px;
}

.containerMainContent p:nth-child(2) {
    font-family: Inter;
    font-size: 36px;
}

.containerMainContent p:nth-child(3) {
    font-family: Abel;
    font-size: 25px;
    text-align: center;
    margin-top: 30px;
}
@media (max-width: 600px) {
    .containerMainContent{
        width: 100vw;
    }
}
</style>