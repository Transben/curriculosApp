<template>
  <div class="main" data-aos="fade-right">
    <div class="containerContents">

      <div class="containerImg">
      </div>

      <div class="containerInfos">
        <p>Faça parte do <span>#timeTB!</span></p>
        <p>Cadastra seu curriculo em nosso banco de talentos</p>

        <div class="containerButton">
          <a href="/formulariomotorista">
            <button>
              Cadastre para vagas de motorista
              <img src="@/assets/Icons/truck.png" alt="" class="imgButton">
            </button>
          </a>
          <a href="/formulariescritorio">
            <button>
              Cadastre para vagas administrativas
              <img src="@/assets/Icons/admin.png" alt="" class="imgButton">
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    
  }
</script>

<style scoped>
.main {
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
}

/* CONTAINER INFERIOR */
.containerContents {
  width: 100vw;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: row;
}
.containerImg{
  width: 50%;
  height: 100%;
  background-image: url('@/assets/imgHomePage/homepage.png');
  background-repeat: no-repeat;
  background-position: center;
}
.containerInfos{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.containerInfos span{
  font-weight: 600;
  font-style: oblique;
  color: #4d4d4d;
}
.containerInfos p{
  margin-left: 10px;
  font-family: Abel;
}
.containerInfos p:nth-child(1){
  font-size: 50px;
  font-family: Inter;
}
.containerInfos p:nth-child(2){
  font-size: 23px;
  font-family: Inter;
}
.containerButton{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.containerButton button{
  margin: 10px 0 0 10px;
  min-width: 360px;
  padding: 10px;
  border: none;
  border-radius: 30px;
  background:#1542bd;
  color: #fff;
  bottom: 0;
  padding:15px 30px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.containerButton a{
  text-decoration: none;
  list-style: none;
}
.containerButton button:hover{
  background:#1542bdc4;
}
.imgButton{
  width:25px;
  margin-left: 10px;
}

@media (max-width: 600px)
{
  .containerContents{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .containerImg, .containerInfos{
    width: 100%;
  }
  .containerInfos{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
  }
  .containerButton{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .containerButton > a > button{
    padding: 13px;
    margin: 0;
    margin-top: 5px;
    min-width: 80%;
  }
}
</style>
