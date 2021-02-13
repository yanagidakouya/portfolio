<template>
  <div class="about">
    <h3 class="section-title"><span class="neon-sb">1. </span>About</h3>
    <p><img src="" alt=""></p>
    <table>
      <thead>
        <tr><th colspan="2">Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="weight">Name</td>
          <td>柳田 昂也 (Koya Yanagida)</td>
        </tr>
        <tr>
          <td class="weight">University</td>
          <td>日本大学</td>
        </tr>
        <tr>
          <td class="weight">GitHub</td>
          <td><a href="https://github.com/yanagidakouya?tab=repositories" target="blank">yanagidakouya</a></td>
        </tr>
        <tr>
          <td class="weight">Twitter</td>
          <td><a href="https://twitter.com/TeRPayaujh6NNrn" target="blank">&#064;yanagida</a></td>
        </tr>
        <tr>
          <td class="weight">Mail</td>
          <td><a href="mailto:yanagidakouya@gmail.com" target="blank">yangidakouya&#064;gmail.com</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.about{
  table{
    color: rgb(213, 234, 247);
    margin: 0 auto;
    line-height: 300%;
    tr{
      font-size: 20px;
      td{
        text-align: left;
      }
      .weight{
        font-weight: bold;
        padding-right: 40px;
      }
    }
  }
}
</style>