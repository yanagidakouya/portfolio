<template>
  <div class="header">
    <div class="header-inner">
      <div class="logo">
        <h1>Koya's Portfolio</h1>
      </div>
      <div class="header-menu">
        <Nav></Nav>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav'
export default {
  components: {
    Nav,
  }
}
</script>

<style scoped>
.header{
  /* 親要素の横幅を無視して画面いっぱいに広げる */
  margin: 0 calc(50% - 50vw);
  background: #000;
}
.header-inner{
  width: 90%;
  margin: 0 auto;
}
.logo{
  float: left;
  color: #fff;
}

.header-menu{
  float: right;
}
</style>