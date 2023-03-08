<template>
    <div class="main" data-aos="fade-right">
        <div class="mainCard">
            <div class="painelModal">

                <div class="containerTitle">
                    <p>Informação do termo de uso</p>
                    <img src="@/assets/Icons/iconSecurity.png" alt="">
                </div>
                <div class="containerInfos">
                        <p>Termo de Uso do Formulário Online da Transben Transportes</p>

                        <p>Bem-vindo(a) ao formulário online da Transben Transportes. Ao utilizar este formulário, você
                        concorda com os seguintes termos de uso:</p>

                        <p>Informações Pessoais: Ao preencher este formulário, você concorda em fornecer informações precisas e
                        verdadeiras. A Transben Transportes se reserva o direito de recusar ou cancelar qualquer pedido que
                        contenha informações imprecisas ou incompletas.</p>

                        <p>Propriedade Intelectual: Todo o conteúdo deste formulário, incluindo texto, imagens, logotipos e
                        marcas registradas, é de propriedade exclusiva da Transben Transportes e é protegido pelas leis de
                        propriedade intelectual aplicáveis. Você concorda em não utilizar o conteúdo deste formulário para
                        fins comerciais sem o consentimento prévio por escrito da Transben Transportes.</p>

                        <p>Uso de Dados: Ao enviar o formulário, você concorda que a Transben Transportes possa coletar,
                        armazenar e processar as informações fornecidas de acordo com a política de privacidade da empresa.
                        A Transben Transportes utilizará esses dados apenas para fornecer os serviços solicitados pelo
                        usuário e para fins de análise de negócios internos.</p>

                        <p>Segurança: A Transben Transportes emprega medidas razoáveis de segurança para proteger as
                        informações fornecidas pelos usuários deste formulário. No entanto, a empresa não garante que as
                        informações serão completamente seguras contra acesso não autorizado ou uso indevido.</p>

                        <p>Modificações: A Transben Transportes se reserva o direito de modificar estes termos de uso a
                        qualquer momento, sem aviso prévio. O uso continuado deste formulário após a publicação de qualquer
                        modificação constitui aceitação dessas alterações.</p>

                        <p>Lei Aplicável: Estes termos de uso serão regidos e interpretados de acordo com as leis do Brasil,
                        sem considerar conflitos de disposições legais. Qualquer disputa decorrente do uso deste formulário
                        será resolvida exclusivamente pelos tribunais brasileiros.</p>

                        <p>Ao utilizar este formulário, você reconhece ter lido e concordado com estes termos de uso. Se você
                        não concorda com estes termos, por favor, não utilize este formulário.</p>
                    
                </div>
                <div class="buttonAccept">
                    <button @click="$emit('fecharModalTermo')">Fechar</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalTermo'
}
</script>

<style scoped>
.main {
    width: 100vw;
    height: 100vh !important;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    position: fixed;
    margin-top: 70px;
    background: rgba(122, 122, 122, 0.274);
}

.painelModal {
    width: 600px;
    height: 495px;
    background: #fff;
    z-index: 9999;
    position: relative;
    border-radius: 10px;
}

.mainCard {
    width: 600px;
    height: 500px;
    border-radius: 10px;
    background: #fff;
    border: 1px solid #ccc;
    margin-top: calc(10vh);

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
    overflow: scroll;
    flex-direction: column;
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
    }
}</style>