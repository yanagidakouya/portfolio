<template>
  <section id="top" class="top">
    <div class="vue-typer-outer">
      <div class="vue-typer-inner">
        <h2>
          <vue-typer 
            text="Thank you for coming to my page"
            :repeat="0"
            :preTypeDelay="1000"  
            :typeDelay="60"
            :eraseOnComplete="false"
          ></vue-typer>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '../assets/sass/app.scss';
.top{
  text-align: left;
  .vue-typer-outer{  
    .vue-typer-inner{
      padding: 20% 8% 20% 0;
      @include mq-down(){
        padding: 30% 5% 20% 0;
      }
      h2{
        font-size: clamp(12px, 7.25vw, 80px);
        opacity: 0.9;
        padding-top: 20px;
      }
      p{
        color: rgb(213, 234, 247);
      }
    }
  }
}

</style>