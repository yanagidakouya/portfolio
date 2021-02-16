<template>
  <div id="app">
    <div class="contents_container">
    <Header id="header"></Header>
    <Leftside id="leftside"></Leftside>
      <div id="contents inner">
        <div class="p-absolute">
          <Top id="top"></Top>
          <div class="p-absolute-inner">
            <About id="about"></About>
            <Skills id="skills"></Skills>
            <Works id="works"></Works>
            <Blog id="blog"></Blog>
            <Contact id="contact"></Contact>
          </div>
        </div>
        <Visual id="particles-js"></Visual>
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
  },
}
// <visual>の高さをwindowHeightに合わせる
window.addEventListener('load', () => {
  let wh = window.innerHeight;
  let elem = document.getElementById('particles-js');
  elem.style.height = wh + 'px';


  // *************************
  let nodes = document.getElementsByClassName('work-box')
  let height = 0
  console.log('4');

  for(var i = 0; i < nodes.length; i++) {
    console.log('5');
    if(height < nodes[i].getBoundingClientRect().height){
      console.log('6');
      height = nodes[i].getBoundingClientRect().height
      console.log('7');
    }
  }
  for(var x = 0; x < nodes.length; x++) {
    console.log('8');
    nodes[x].style.height = height
  }
  console.log('9');


});


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

p{
  font-size: clamp(10px, 2vw, 26px);
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
  word-break: normal;
}
.h-four{
  border-bottom: 1px solid #c0f5fe;
  display: inline;
  font-size: clamp(18px, 2.5vw, 28px);
}

.neon-sb{
  font-size: 0.85em;
  color: #c0f5fe;
  text-shadow: 0 0 1rem #138093, 0 0 6ch #a5eaf6, 0 0 1ch #77dff1, 0 0 1rem #5bdaf0;
}

.section-title{
  color: #fff;
  font-size: clamp(26px, 5vw, 40px);
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .contents_container{
    position: relative;
    #particles-js{
      z-index: 10;
      width: 100%;
      position: fixed;
      top: 0;
    }
    #header, #leftside{
      z-index: 100;
      position: fixed;
    }
    .p-absolute{
      z-index: 90;
      position: absolute;
      // 15% + 85% = 100%
      width: 85%;
      margin: 0 calc(15% / 2);
      text-align: center;
      &-inner{
        background: rgb(213, 234, 247, 0.13);
        margin: 0 calc(50% - 50vw);
        #top{
          width: 100%;
          padding-bottom: 50px;
        }
        #about, #skills, #works, #blog, #contact{
          padding: 10% 0;
          border-bottom: solid 1px rgb(55, 55, 55);
          width: 100%;
        }
      }
    } 
  }
}
</style>
