<template>
    <div class="main">

        <ModalTermo v-show="modalTermo" v-on:fecharModalTermo="abrirModalTermo" />

        <div class="containerFrm">

            <HeaderFormInfo tituloHeader="Formulario de cadastro para motoristas"
                subtituloHeader="No final de preencher suas informações clique em enviar e aguarde nosso retorno." 
                :imgIcon="imageSrc"    
            />

            <form action="" @submit.prevent="onSubmit">

                <!-- Dados Pessoais -->
                <ModalInfos titulo='Dados Pessoais'
                    infoModal='Suas informações pessoais pra nos é de extrema importância, é através delas que vamos entrar em contato com você futuramente.' />
                <div class="cardInputs">
                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Seu nome completo
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-model="nomeCompleto" @click="validationInputs()" id="nomeCompleto" required>
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">CPF
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="###.###.###-##" v-model="dadosForm.CPF" required />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Telefone para contato
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="(##) #####-####" v-model="dadosForm.telefoneContato"
                                required />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Seu E-mail
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-model="dadosForm.email" required />
                        </div>
                    </div>
                </div>

                <!-- Informações de localização -->
                <ModalInfos titulo='Informações de localização'
                    infoModal='Informações de onde você mora é uma parte fundamental na análise de suas informações.' />
                <div class="cardInputs">
                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">CEP
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="#####-###" v-model="dadosForm.CEP" required />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Estado
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <select id="estado" name="estado" v-model="dadosForm.estado" required>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                                <option value="EX">Estrangeiro</option>
                            </select>
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Bairro
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-model="dadosForm.bairro" required />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Rua
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-model="dadosForm.rua" />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Numero
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-model="dadosForm.numeroCasa" />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Complemento</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-model="dadosForm.complemento" />
                        </div>
                    </div>
                </div>

                <!-- Experiencia profissional -->
                <ModalInfos titulo='Ultima experiencia profissional'
                    infoModal='Sua última experiencia profissional vai nos dar uma ideia de onde você se encaixa melhor, mas fique tranquilo, se caso for sua primeiraexperiência profissional nos queremos muito ter seu currículo com nos. Se esse for seu caso, use o botão "Ainda não possuo experiencia profissional"' />
                <div class="cardInputs">
                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Nome da empresa
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" :disabled="disabledPro == 1" v-model="dadosForm.nomeEmpresa1" required />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Seu cargo
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" :disabled="disabledPro == 1" v-model="dadosForm.cargoEmpresa1" required />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Data de inicio
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="##/##/####" :disabled="disabledPro == 1"
                                v-model="dadosForm.dataInicioEmpresa1" required />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Data final
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="##/##/####" :disabled="disabled == 1"
                                v-model="dadosForm.dataFinalEmpresa1" required />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Emprego atual</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="checkbox" @click="disabled = (disabled + 1) % 2" class="checkbox"
                                v-model="dadosForm.EmpregoAtualEmpresa1" />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Ainda não possuo experiencia profissional</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="checkbox"
                                @click="disabledPro = (disabledPro + 1) % 2, disabled = (disabled + 1) % 2" class="checkbox"
                                v-model="dadosForm.semExperienciaEmpresa1">
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Nos explique o que você fazia em seu cargo</label>
                        </div>
                        <div class="containerTitulo">
                            <textarea name="" id="" cols="100" rows="10" :disabled="disabledPro == 1"
                                v-model="dadosForm.exercicioCargoAntigoEmpresa1"></textarea>
                        </div>
                    </div>
                </div>

                <ModalInfos titulo='Adicionar mais duas experiência'
                    infoModal='Precisamos de mais algumas informações sobre sua vida profissional até o momento.' />
                <div class="cardInputs">
                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">
                                <img src="@/assets/Icons/moreVagas.png" alt="" class="imgVagas">
                            </label>
                        </div>
                    </div>

                    <div class="containerInput">
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Nome da empresa</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-model="dadosForm.nomeEmpresa2" />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Seu cargo</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-model="dadosForm.cargoEmpresa2" />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Data de inicio</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="##/##/####" v-model="dadosForm.dataInicioEmpresa2" />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Data final</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="##/##/####" v-model="dadosForm.dataFinalEmpresa2" />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Nos explique o que você fazia em seu cargo</label>
                        </div>
                        <div class="containerTitulo">
                            <textarea name="" id="" cols="100" rows="10"
                                v-model="dadosForm.exercicioCargoAntigoEmpresa2"></textarea>
                        </div>
                    </div>
                </div>
                <br>
                <div class="cardInputs">
                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">
                                <img src="@/assets/Icons/moreVagas.png" alt="" class="imgVagas">
                            </label>
                        </div>
                    </div>

                    <div class="containerInput">
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Nome da empresa</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-model="dadosForm.nomeEmpresa3">
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Seu cargo</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-model="dadosForm.cargoEmpresa3">
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Data de inicio</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="##/##/####" v-model="dadosForm.dataInicioEmpresa3" />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Data final</label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="##/##/####" v-model="dadosForm.dataFinalEmpresa3" />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Nos explique o que você fazia em seu cargo</label>
                        </div>
                        <div class="containerTitulo">
                            <textarea name="" id="" cols="100" rows="10"
                                v-model="dadosForm.exercicioCargoAntigoEmpresa3"></textarea>
                        </div>
                    </div>
                </div>
                <!-- Fim das experiencias profissionais -->

                <!-- Vaga pretendida -->
                <ModalInfos titulo='Vaga pretendida'
                    infoModal="Temos diversas vagas em nossa empresa, por isso escolher a que melhor se encaixa em suas habilidades é fundamental para que você cresça cadavez mais com nos." />
                <div class="cardInputs">
                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Escolha a vaga que você pretende
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <select id="vagapretendida" name="vagapretendida" v-model="dadosForm.vagaPretendida" required>
                                <option value="Motorista Carreteiro">Motorista Carreteiro</option>
                                <option value="Motorista Rodocaçamba">Motorista Rodocaçamba</option>
                                <option value="Motorista Bitrem">Motorista Bitrem</option>
                                <option value="Motorista Rodotrem">Motorista Rodotrem</option>
                                <option value="Motorista Truck">Motorista Truck</option>
                                <option value="Motorista Toco">Motorista Toco</option>
                            </select>
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Numero da CNH
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="############" v-model="dadosForm.numeroCNH" required />
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Categoria da CNH
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <select name="categoriaCnh" v-model="dadosForm.categoriaCNH" required>
                                <option value="">escolha</option>
                                <option value="Categoria A">A</option>
                                <option value="Categoria B">B</option>
                                <option value="Categoria C">C</option>
                                <option value="Categoria D">D</option>
                                <option value="Categoria E">E</option>
                            </select>
                        </div>
                    </div>

                    <div class="containerInput">
                        <div class="containerTitulo">
                            <label for="">Validade
                                <span>*</span>
                            </label>
                        </div>
                        <div class="containerTitulo">
                            <input type="text" v-maska data-maska="##/##/####" v-model="dadosForm.validadeCNH" required />
                        </div>
                    </div>
                </div>

                <div class="cardInputs divTermo">
                    <p @click="abrirModalTermo">Eu aceito os termos de uso estabelecidos pela empresa Transben Transportes -
                        <span>Ler termo</span>
                    </p>
                    <input type="checkbox" name="" id="" v-model="dadosForm.aceitoTermo" required>
                </div>

                <div class="containerButtonEnv">
                    <button>Enviar</button>
                    <button>Limpar</button>
                </div>

            </form>
        </div>

    </div>
</template>

<script>
import { vMaska } from "maska"
import ModalInfos from "@/components/ModalDefault/ModalInfos.vue"
import HeaderFormInfo from "@/components/Header/HeaderFormInfo.vue"
import ModalTermo from '@/components/ModalDefault/ModalTermo.vue'

export default {
    data() {
        return {
            imageSrc: require('@/assets/Icons/truckIcon.png'),
            disabled: 0,
            disabledPro: 0,
            modalTermo: false,
            dadosForm: {
                nomeCompleto: '',
                CPF: '',
                telefoneContato: '',
                email: '',
                CEP: '',
                estado: '',
                bairro: '',
                rua: '',
                numeroCasa: '',
                complemento: '',
                nomeEmpresa1: '',
                cargoEmpresa1: '',
                dataInicioEmpresa1: '',
                dataFinalEmpresa1: '',
                EmpregoAtualEmpresa1: '',
                semExperienciaEmpresa1: '',
                exercicioCargoAntigoEmpresa1: '',
                nomeEmpresa2: '',
                cargoEmpresa2: '',
                dataInicioEmpresa2: '',
                dataFinalEmpresa2: '',
                exercicioCargoAntigoEmpresa2: '',
                nomeEmpresa3: '',
                cargoEmpresa3: '',
                dataInicioEmpresa3: '',
                dataFinalEmpresa3: '',
                exercicioCargoAntigoEmpresa3: '',
                vagaPretendida: '',
                aceitoTermo: '',
                numeroCNH: '',
                categoriaCNH: '',
                validadeCNH: '',
                status: 'analise',
                dataEnvioCurriculo: ''
            },
        }
    },
    directives: { maska: vMaska },
    components: {
        ModalInfos,
        HeaderFormInfo,
        ModalTermo
    },
    methods: {
        abrirExperiencia() {
            this.trabalhosAnteriores = !this.trabalhosAnteriores
        },
        abrirModalTermo() {
            this.modalTermo = !this.modalTermo
        },
        dataAtual() {
            var data = new Date(),
                dia = data.getDate().toString().padStart(2, '0'),
                mes = (data.getMonth() + 1).toString().padStart(2, '0'),
                ano = data.getFullYear();
            let dataDeHoje = ano + "-" + mes + "-" + dia;

            this.dadosForm.dataEnvioCurriculo = dataDeHoje;
        },
        submitForm() {
            if (this.$v.$invalid) {
                console.log('Formulario no válido');
                return;
            }
            console.log('Formulario válido. Enviando datos...');
        },
        onSubmit(e) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nomeCompleto: this.dadosForm.nomeCompleto,
                    CPF: this.dadosForm.CPF,
                    telefoneContato: this.dadosForm.telefoneContato,
                    email: this.dadosForm.email,
                    CEP: this.dadosForm.CEP,
                    estado: this.dadosForm.estado,
                    bairro: this.dadosForm.bairro,
                    rua: this.dadosForm.rua,
                    numeroCasa: this.dadosForm.numeroCasa,
                    complemento: this.dadosForm.complemento,
                    nomeEmpresa1: this.dadosForm.nomeEmpresa1,
                    cargoEmpresa1: this.dadosForm.cargoEmpresa1,
                    dataInicioEmpresa1: this.dadosForm.dataInicioEmpresa1,
                    dataFinalEmpresa1: this.dadosForm.dataFinalEmpresa1,
                    EmpregoAtualEmpresa1: this.dadosForm.EmpregoAtualEmpresa1,
                    semExperienciaEmpresa1: this.dadosForm.semExperienciaEmpresa1,
                    exercicioCargoAntigoEmpresa1: this.dadosForm.exercicioCargoAntigoEmpresa1,
                    nomeEmpresa2: this.dadosForm.nomeEmpresa2,
                    cargoEmpresa2: this.dadosForm.cargoEmpresa2,
                    dataInicioEmpresa2: this.dadosForm.dataInicioEmpresa2,
                    dataFinalEmpresa2: this.dadosForm.dataFinalEmpresa2,
                    exercicioCargoAntigoEmpresa2: this.dadosForm.exercicioCargoAntigoEmpresa2,
                    nomeEmpresa3: this.dadosForm.nomeEmpresa3,
                    cargoEmpresa3: this.dadosForm.cargoEmpresa3,
                    dataInicioEmpresa3: this.dadosForm.dataInicioEmpresa3,
                    dataFinalEmpresa3: this.dadosForm.dataFinalEmpresa3,
                    exercicioCargoAntigoEmpresa3: this.dadosForm.exercicioCargoAntigoEmpresa3,
                    vagaPretendida: this.dadosForm.vagaPretendida,
                    aceitoTermo: this.dadosForm.aceitoTermo,
                    status: this.dadosForm.status,
                    dataEnvioCurriculo: this.dadosForm.dataEnvioCurriculo
                })
            };

            fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
                .then(async response => {
                    const data = await response.json();
                    console.log(e)
                    console.log(data)

                    if(response.ok) {
                        this.$router.push('/envioComSucesso')
                    }

                    if (!response.ok) {
                        const error = (data && data.message) || response.status;
                        this.$router.push('/ErroAoEnvio')
                        return Promise.reject(error);
                    }
                })
                .catch(error => {
                    this.errorMessage = error;
                    console.error('error!', error);
                });
        },
    },
    created() {
        this.dataAtual()
    },
}
</script>

<style scoped>
.main {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.containerFrm {
    width: 900px;
    height: auto;
    margin-top: 70px;
}

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
    font-size: 26px;
}

.tituloHeaderForm img {
    width: 35px;
}

.cardInputs {
    width: 100%;
    height: auto;
    padding: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px #cecece dashed;
    background: rgb(252, 252, 252);
    overflow: hidden;
}

.containerInput {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

.containerTitulo {
    width: 300px;
    height: auto;
}

.containerInput input {
    width: 300px;
    height: 40px;
    border-top-left-radius: 0px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border: 1px solid #cecece;
    outline: 0px;
    text-align: center;
    font-family: Abel;
    font-size: 20px;
}

.checkbox {
    width: 20px !important;
}

.containerInput select {
    width: 300px;
    height: 40px;
    border-top-left-radius: 0px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 50px;
    border: 1px solid #cecece;
    outline: 0px;
    text-align: left;
    font-family: Abel;
    font-size: 18px;
}

.imgVagas {
    width: 60px;
    margin-top: -30px;
    margin-bottom: -25px;
}

.containerInput label {
    font-family: Abel;
    font-size: 19px;
}

.containerButtonEnv {
    width: 100%;
    height: auto;
    padding: 30px;
    display: flex;
    justify-content: space-evenly;
}

.containerButtonEnv button:nth-child(1) {
    width: 150px;
    height: 40px;
    background: #12b886;
    border: none;
    color: #fff;
    border-radius: 5px;
}

.containerButtonEnv button:nth-child(2) {
    width: 150px;
    height: 40px;
    background: #dbdf0d;
    border: none;
    color: #fff;
    border-radius: 5px;
}

.divTermo {
    display: flex;
    justify-content: space-around;
}

.divTermo p {
    font-family: Abel;
    cursor: pointer;
}

.divTermo span {
    color: rgb(20, 20, 219);
    font-weight: 600;
}

input[type="checkbox"] {
    width: 40px;
}

span {
    color: red;
}

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