<template>
<div class="side-menubar">
  <ul>
    <li><a href="https://twitter.com/TeRPayaujh6NNrn" target="blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'twitter']"/></a></li>
    <li><a href="" target="blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'linkedin-in']"/></a></li>
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
      padding: 10px 0;
      a{
        .fa-icon{
          color: #fff;
        }
      }
    }
  }
}
</style>