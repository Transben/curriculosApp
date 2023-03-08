<template>
    <div class="main" data-aos="fade-right">
        <div class="mainCard">
            <div class="painelModal">

                <div class="containerTitle">
                    <p>Segurança de sua informação</p>
                    <img src="@/assets/Icons/iconSecurity.png" alt="">
                </div>
                <div class="containerInfos">
                    <p>Todas as suas informações serão armazenadas e ficaram seguras e protegidas por protocolos e gerenciados e por profissionais qualificados. 
                    </p>
                </div>
                <div class="buttonAccept">
                    <button @click="$emit('fecharModal')">Fechar</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalSegurança'
}
</script>

<style scoped>
.main {
    width: 100vw;
    height: calc(100vh + 70px);
    position: absolute;
    background: #63636369;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    position: fixed;
    margin-top: -70px;
}

.painelModal {
    width: 345px;
    height: 495px;
    background: #fff;
    z-index: 9999;
    position: relative;
    border-radius: 10px;
}

.mainCard {
    width: 350px;
    height: 500px;
    border-radius: 10px;
    background: #fff;
    border: 1px solid #ccc;

    overflow: hidden;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9;

    -webkit-box-shadow: 6px 11px 21px -4px rgba(138, 138, 138, 0.97);
    -moz-box-shadow: 6px 11px 21px -4px rgba(138, 138, 138, 0.97);
    box-shadow: 6px 11px 21px -4px rgba(138, 138, 138, 0.97);
}

.mainCard::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    transform-origin: bottom right;
    background: linear-gradient(0deg, transparent, #4e4e4e86, #4e4e4e86);
    animation: animate 6s linear infinite;
}

.mainCard::after {
    content: '';
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    transform-origin: bottom right;
    background: linear-gradient(0deg, transparent, #4e4e4e86, #4e4e4e86);
    animation: animate 6s linear infinite;
    animation-delay: -3s;
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}


.containerTitle {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px dashed #ccc;
}

.containerTitle p {
    font-family: Abel;
    font-size: 25px;
}

.containerTitle img {
    width: 23px;
}

.containerInfos {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.containerInfos p {
    font-family: Abel;
    font-size: 20px;
    padding: 20px;
}

.buttonAccept {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.buttonAccept button {
    width: 90%;
    height: auto;
    border: none;
    padding: 10px;
    background: rgba(0, 128, 0, 0.795);
    color: #fff;
    font-family: Abel;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 10px;
}

.buttonAccept button:hover {
    background: rgba(0, 128, 0, 0.589);
    transition: 0.3s;
    border-radius: 50px;
}

@media (max-width: 600px) {
    .main {
        height: 100vh;
        position: fixed;
        margin-top: 70px;
    }
}
</style>