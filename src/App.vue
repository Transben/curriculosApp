<template>
  
    <HeaderPage v-on:abrirModal="openModal" data-aos="fade-right" />
    <ModalSegurança v-on:fecharModal="openModal" v-show="modal" />

    <router-view />

    <FooterPage v-show="mostrarfooter" :dataAno="dataAnoAtual"/>

</template>

<script>
import HeaderPage from '@/components/Header/HeaderPage.vue'
import ModalSegurança from '@/components/ModalDefault/ModalSegurança.vue'
import FooterPage from '@/components/Footer/FooterPage.vue'

export default {
  components: {
    HeaderPage,
    ModalSegurança,
    FooterPage
  },
  data() {
    return {
      modal: false,
      mostrarfooter: true,
      dataAnoAtual: ''
    }
  },
  created(){
    this.getUrl()
    this.anoAtual()
  },
  methods: {
    openModal() {
      this.modal = !this.modal
    },
    getUrl(){
      /* GET URL */
      let url = window.location.pathname
      url == '/envioComSucesso' || url == '/ErroAoEnvio' ? this.mostrarfooter = false : this.mostrarfooter = true
    },
    anoAtual(){
      let currentYear = new Date().getFullYear()
      this.dataAnoAtual = currentYear
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');

* {
  margin: 0;
  padding: 0;
}
</style>
