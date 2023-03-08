<template>
    <div class="containerHeader">

        <div class="containerImgHeader tamanho">
            <a href="/">
                <img src="@/assets/imgHomePage/transbrancoem.png" alt="">
            </a>
        </div>
        <div class="containerInfoSecurity tamanho">
            <div class="containerimgLock" @click="$emit('abrirModal')">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'HeaderPage',
    }
</script>

<style scoped>
.containerHeader {
    width: 100vw;
    height: 70px;
    background: #1542bd;
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 99999;
}
.tamanho{
    width: 50%;
    height: 70px;
}
.containerImgHeader{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.containerInfoSecurity{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.containerimgLock{
    width: 55px;
    height: 55px;
    margin-right: 20px;
    background-image: url('@/assets/Icons/iconSecurity.png');
    background-position: center;
    background-repeat: no-repeat;
    -webkit-animation: rotate-center 0.6s ease-in-out both;
	animation: rotate-center 0.6s ease-in-out both;
}
.containerimgLock:hover{
    background-image: url('@/assets/Icons/unlock.png');
}
.containerImgHeader img {
    width: 200px;
}

@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
</style>