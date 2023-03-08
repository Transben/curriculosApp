<template>
    <div class="tituloHeaderForm" @click="closeModalTime()">
        <p>{{ titulo }}</p>
        <img src="@/assets/Icons/info.png" alt="" @click="openModal">

        <div class="containerModal" v-show="modal">
            <div class="titulo tituloModal">
                <p>Por que nos precisamos dessas informações?</p>
            </div>
            <div class="titulo paragrafoTitulo">
                <p>{{ infoModal }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalInfos',
    data(){
        return{
            modal: false,
        }
    },
    props: ['titulo', 'infoModal'],
    methods:{
        openModal(){
            this.modal =! this.modal
        },
        closeModalTime(){
            setTimeout(() => {
                this.modal = false
            }, 3000)
        }
    }
}
</script>

<style scoped>
.tituloHeaderForm {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tituloHeaderForm p {
    margin-left: 30px;
    font-family: Abel;
    font-size: 23px;
}

.tituloHeaderForm img {
    width: 27px;
}

.titulo{
    width: auto;
    min-height: 50px;
}
.tituloModal{
    border-bottom: 1px solid rgb(190, 190, 190);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: rgba(12, 61, 199, 0.733);
    color: #fff;
}

.paragrafoTitulo{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.paragrafoTitulo p{
    font-size: 18px;
    padding: 15px 0;
}

.containerModal{
    position: absolute;
    width: 40%;
    min-height: 100px;
    background: rgb(250, 250, 250);
    border-radius: 10px;
    margin-left: 20px;
    border: 1px solid #cecece;
}

@media (max-width: 600px) {
    .containerModal {
        width: 80%;
        height: auto;
        padding-bottom: 10px;
    }
    .tituloHeaderForm img{
        margin-right: 10px;
    }
}
</style>