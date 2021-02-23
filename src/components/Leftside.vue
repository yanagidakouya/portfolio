<template>
<div class="side-menubar">
  <ul>
    <li><a href="https://twitter.com/kouya_en" target="blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'twitter']"/></a></li>
    <li><a href="https://www.linkedin.com/in/%E6%98%82%E4%B9%9F-%E6%9F%B3%E7%94%B0-b345b8206/" target="blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'linkedin-in']"/></a></li>
    <li><a href="https://github.com/yanagidakouya?tab=repositories" target="blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'github']"/></a></li>
    <!-- <li><a href="" target="blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'twitter']"/></a></li>
    <li><a href="" target="blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'twitter']"/></a></li> -->
  </ul>
</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.side-menubar{
  position: fixed;
  padding-top: 100px;
  padding-left: 2%;
  ul{
    li{
      padding: 10px 5px 0 0;
      a{
        display: block;
        padding: 10px 5px 10px 0;
        .fa-icon{
          color: #fff;
        }
      }
    }
  }
}
</style>