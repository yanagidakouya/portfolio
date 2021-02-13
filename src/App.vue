<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="contents_container">
      <Leftside></Leftside>
      <div id="contents"></div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import 'normalize.css'
import Header from './components/Header.vue'
import Leftside from './components/Leftside.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    Leftside,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{

}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
.clear{
  clear: both;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: calc(100% - 10%);
  margin: 0 auto;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  */
}
#app .contents_container{
  display: flex;
}
</style>
