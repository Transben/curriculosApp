<template>
    <div class="mainFooter">
        <div class="primeiroContainer cont">
            <div class="containerImg">
                <img src="@/assets/Icons/handphone.png" alt="">
            </div>
            <p>(47) 3350-0937</p>
        </div>
        <div class="segundoContainer cont">
            <div class="containerImg">
                <img src="@/assets/Icons/email.png" alt="">
            </div>
            <p>transben@transben.com.br</p>
            <p class="direitosReservados">© {{dataAno}} - Direitos Reservados - Transben Transportes</p>
        </div>
        <div class="terceiroContainer cont">
            <div class="containerImg">
                <img src="@/assets/Icons/site.png" alt="">
            </div>
            <p>www.transben.com.br</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterPage',
    props: {
        dataAno: {
            type: String,
            required: true
        },
    },
}
</script>

<style scoped>
.mainFooter {
    width: 100vw;
    height: 200px;
    background: #1542bd;
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
}
.cont {
    width: 20%;
    height: 200px;
}
.cont p{
    font-family: Inter;
    color: #fff;
    font-weight: 600;
    margin-top: 20px;
}

.direitosReservados{
    font-size: 13px;
    font-weight: 400 !important;
}

.primeiroContainer,
.segundoContainer,
.terceiroContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.containerImg{
    width: 60px;
    height: 60px;
    background: #1173c4;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 600px) {

    .mainFooter {
        flex-direction: column;
        height: auto;
    }

    .cont {
        width: 100%;
    }
}</style>