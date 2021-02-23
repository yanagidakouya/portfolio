<template>
  <div class="header">
    <div class="header-inner">
      <div class="logo">
        <h1><span class="neon-sb"><span class="neon-sb">P</span>rofile</h1>
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

<style lang="scss" scoped>
.header{
  /* 親要素の横幅を無視して画面いっぱいに広げる */
  margin: 0 calc(50% - 50vw);
  background: #000;
  width: 100%;
  position: fixed;
  border-bottom: solid 1px rgb(100, 100, 100);
  .header-inner{
    width: 90%;
    margin: 0 auto;
    text-align: center;
    .logo{
      color: #fff;
    }
  }
}
</style>