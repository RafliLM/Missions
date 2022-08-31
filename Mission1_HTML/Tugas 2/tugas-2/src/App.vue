<template>
    <Header></Header>
    <div class="headline" style="background-color: rgb(233,236,239);">
      <p style="font-size: 24px;">Looking to get started in design?</p>
      <p style="font-size: 20px; margin-top: -10px; margin-bottom: 25px; color: #778298;">Our first 50 lessons have been bundled together and are available for free.</p>
      <a href="#" class="white-button" style="color: black;">Read 101 Lessons</a>
    </div>
    <div v-for="data in contentData" v-bind:key="data.title">
      <Content :content="data"></Content>
    </div>
    <div class="email">
      <h3>Join 405,721 others in learning design</h3>
      <p>Receive a design lesson each week, crafted by a design pro.</p>
      <form action="#">
        <input type="email" placeholder="Email address">
        <button type="submit">Get started</button>
      </form>
    </div>
    <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'
import contentData from './assets/data.json'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  },
  data(){
    return{
      contentData
    }
  }
}
</script>

<style>
#app {
  font-family: 'Source Sans Pro', sans-serif;
  width: 76%;
  margin: auto;
}

.headline{
    width: 90%;
    margin: 79px auto auto 2.5%;
    padding: 10px 10px 40px 33px;
}

.white-button{
    font-weight: bold;
    font-size: 14px;
    background-color: white;
    color: #38404F;
    text-decoration: none;
    padding: 9px 15px;
    border-radius: 4px;
    box-shadow: 0 0 1px 0 rgb(56 64 79 / 30%), 0 1px 1px 0 rgb(9 24 54 / 24%), 0 2px 5px 0 rgb(9 24 54 / 6%);
    border-width: thin;
}

.email{
  width:45%;
  background-color: #F3F4F6;
  margin: 75px auto;
  color: #38404F;
  padding: 20px 30px;
}

.email > h3 {
  font-size: 20px;
}

.email > p {
  color: #778298;
  font-weight: 400;
}

.email > form {
  margin: auto;
  display: inline;
}

form > input{
  width: 60%;
  padding: 15px;
  border-radius: 3px 0 0 3px;
  box-shadow: 0 0 1px 0 rgb(56 64 79 / 30%), 0 1px 1px 0 rgb(9 24 54 / 24%), 0 2px 5px 0 rgb(9 24 54 / 6%);
  border: none;
  font-size: 16px;
  font-weight: 400;
}

form > button{
  width: 30%;
  right: 0;
  padding: 15px;
  background-color: #65D777;
  border-radius: 0 3px 3px 0;
  box-shadow: 0 0 1px 0 rgb(56 64 79 / 30%), 0 1px 1px 0 rgb(9 24 54 / 24%), 0 2px 5px 0 rgb(9 24 54 / 6%);
  border: none;
  font-size: 15px;
  color: white;
  font-weight: 600;
}
</style>
