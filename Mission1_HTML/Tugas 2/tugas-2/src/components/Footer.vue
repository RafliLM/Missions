<template>
  <div class="footer">
        <div style="display:inline; float: left;">
            <p style="margin:auto; font-size:14px;">© 2022</p>
        </div>
        <div class="navbar">
            <a href="#" class="nav">About</a>
            <a href="#" class="nav">Contact</a>
            <a href="#" class="nav">Curators</a>
            <a href="#" class="nav">Legal</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    padding: 25px 10px;
    margin: 25px auto;
    color: #778298;
}
.navbar{
    display:inline; float: right;
}

.nav{
    padding: 15px;
    color: #949EB2;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
}

.nav:hover{
    text-decoration: underline;
}
</style>
