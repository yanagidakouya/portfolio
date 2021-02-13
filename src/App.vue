<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="contents_container">
      <Leftside id="leftside"></Leftside>
      <div id="contents inner">
        <div class="position-first">
          <Top id="top"></Top>
        </div>
        <div class="position-second">
          <About id="about"></About>
          <Skills id="skills"></Skills>
          <Works id="works"></Works>
          <Blog id="blog"></Blog>
          <Contact id="contact"></Contact>
        </div>
        <Visual id="visual"></Visual>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import 'normalize.css'
import Header from './components/Header.vue'
import Leftside from './components/Leftside.vue'
import Top from './components/Top.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Works from './components/Works.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'
import Visual from './components/Visual.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    Leftside,
    Top,
    About,
    Skills,
    Works,
    Blog,
    Contact,
    Visual,
  }
}
</script>

<style lang="scss">
@import './assets/sass/app.scss';
*{
  margin: 0;
  padding: 0;
}

body{
  background: #000;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
}
a:hover{
  opacity: 0.8;
}
a:visited{
  color: #1d9ecd;
}

.clear{
  clear: both;
}

.inner{
  width: calc(100% - 10%);
  margin: 0 auto;
  position: relative
}

.vue-typer .custom.char{
  color: #cef5fc;
  text-shadow: 0 0 0.85rem #6cb8c6, 0 0 6ch #b7f0fa, 0 0 1ch #85e0f0, 0 0 0.85rem #71dcee;
}

.neon-sb{
  font-size: 0.85em;
  color: #c0f5fe;
  text-shadow: 0 0 1rem #138093, 0 0 6ch #a5eaf6, 0 0 1ch #77dff1, 0 0 1rem #5bdaf0;
}

.section-title{
  color: #fff;
  font-size: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0 auto;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  */
  .contents_container{
    display: flex;
    align-self: auto;
    padding-top: 50px;

    #visual{
      z-index: 10;
    }
    .position-first{
      z-index: 100;
      position: absolute;
      padding: 10%;
      width: 100%;
    }
 
    .position-second{
      z-index: 100;
      position: absolute;
      padding-top: 40%;
      width: 70%;
      // 15% + 15% + 70% = 100%
      margin: 0 15%;
      text-align: center;
      #about, #skills, #works, #blog, #contact{
        padding: 40px 0;
        border-bottom: solid 1px rgb(45, 45, 45)
      }
    }
    
  }

}
</style>
