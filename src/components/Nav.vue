<template>
  <nav>
    <ul>
      <li><a href="#"><span class="neon-sb">1.</span>About</a></li>
      <li><a href="#"><span class="neon-sb">2.</span>Skills</a></li>
      <li><a href="#"><span class="neon-sb">3.</span>Works</a></li>
      <li><a href="#"><span class="neon-sb">4.</span>Blog</a></li>
      <li><a href="#"><span class="neon-sb">5.</span>Contact</a></li>
      <li><a href="#"><span class="neon-sb">6.</span>Other</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../../src/assets/sass/foundation/_mixin';
nav{
  padding: 10px 0;
  ul{
    display: flex;
    justify-content: space-around;
    li{
      @include mq-down(){
        width: calc(100% / 3);
      }
      a{
        display: inline-block;
        padding: 5px 10px;
        color: rgb(242, 242, 242);
        &:hover{
          background: rgba(33, 33, 33, 0.8);
        }
      }
    }
  }
}
</style>