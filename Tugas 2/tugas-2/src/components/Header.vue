<template>
  <div class="header">
        <div style="display:inline; float: left;">
            <img src="../assets/logo.png" width="200px" />
        </div>
        <div class="navbar">
            <a href="#" class="nav">Lessons</a>
            <a href="#" class="nav">Toolkit</a>
           <a href="#" class="nav">Sign In</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    padding: 8px 15px 15px 10px;
}
.navbar{
    display:inline; float: right;
    padding: 12px 30px 10px 12px;
}

.nav{
    padding: 16px;
    color: #949EB2;
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
}

.nav:hover{
    text-decoration: underline;
}
</style>
