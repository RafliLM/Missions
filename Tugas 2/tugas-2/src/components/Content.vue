<template>
  <div class="content">
        <img :src="content.img_url"/>
        <div class="text-container">
          <a href="#" class="title">{{content.title}}</a>
          <p>{{content.text}}</p>
          <a href="#" class="white-button" style="color: black;">Read lesson</a>
          <div class="profile">
            <h5>{{content.profile.name}}</h5> <img :src="content.profile.img_url" >
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppContent',
  props: {
    content: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    width: 94%;
    margin: 75px 3% auto 2%;
    display: flex;
    flex-wrap: nowrap;
}

.content > img {
  margin: auto;
  width: 128px;
  height: 100%;
}

.text-container{
  position: relative;
  flex: 1 auto;
  padding-left: 3.5%;
  line-height: 1.5;
}

.title {
  color: #DE3F1C;
  text-decoration: none;
  font-size: 32px;
  font-weight: 600;
}

.title:hover {
  text-decoration: underline;
}

.text-container > p {
  font-size: 16px;
  margin: 30px auto;
}

.white-button {
    font-weight: bold;
    font-size: 15px;
    background-color: white;
    color: #38404F;
    text-decoration: none;
    padding: 9px 15px;
    border-radius: 4px;
    box-shadow: 0 0 1px 0 rgb(56 64 79 / 30%), 0 1px 1px 0 rgb(9 24 54 / 24%), 0 2px 5px 0 rgb(9 24 54 / 6%);
    border-width: thin;
}

.profile {
  top: 80%;
  right: 0;
  position: absolute;
  display: flex;
}

.profile > img {
  width: 40px;
  height: 100%;
  margin: auto;
}

.profile > h5 {
  margin:auto 10px;
  color: #778298;
  font-size: 16px;
  font-weight: 400;
}

</style>
