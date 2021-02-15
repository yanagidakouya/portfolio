<template>
  <nav>
    <ul>
      <li><a href="#" @click="clickSmoothScroll('#about')"><span class="neon-sb">1.</span>About</a></li>
      <li><a href="#" @click="clickSmoothScroll('#skills')"><span class="neon-sb">2.</span>Skills</a></li>
      <li><a href="#" @click="clickSmoothScroll('#works')"><span class="neon-sb">3.</span>Works</a></li>
      <li><a href="#" @click="clickSmoothScroll('#blog')"><span class="neon-sb">4.</span>Blog</a></li>
      <li><a href="#" @click="clickSmoothScroll('#contact')"><span class="neon-sb">5.</span>Contact</a></li>
      <li><a href="#" @click="clickSmoothScroll('#')"><span class="neon-sb">6.</span>Other</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll (x){
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        500,
        null,
        null,
        'y',
      )
    }
  }
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