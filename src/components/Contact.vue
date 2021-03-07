<template>
  <div class="contact">
    <h3 class="section-title"><span class="neon-sb">5. </span>Contact</h3>
    <div class="contact_detail">
      <h4 class="h-four">Get In Touch</h4>
      <p>質問がある方、気になった方はこちらからどうぞ。</p>
      <p> ご連絡いつでもお待ちしております。</p>
      <a href="mailto:yanagidakouya@gmail.com" target="blank">Say Hello</a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.contact{
  color: #fff;
  &_detail{
    padding: 5% 0;
    p{
      padding-top: 3%;
      line-height: 150%;
      font-size: clamp(12px, 1.8vw, 20px);
    }
    a{
      display: inline-block;
      padding: 8px 15px;
      color: #c0f5fe;
      border: solid 1px #c0f5fe;
      box-shadow: 3px 3px 3px rgba(192, 245, 254, 0.5);
      border-radius: 4px;
      margin-top: 40px;
      font-size: clamp(14px, 3vw, 20px);
      &:hover{
        background: rgb(213, 249, 255);
        color:#000;
      }
    }
  }
}
</style>