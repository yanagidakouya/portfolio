<template>
  <section id="top" class="top">
    <div class="">
      <div>
        <h2>
          <vue-typer 
            text="Thank you for coming to my page"
            :repeat="0"
            :preTypeDelay="1000"  
            :typeDelay="60"
            :eraseOnComplete="false"
          >
          </vue-typer>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.top{
  text-align: left;
  h2{
    font-size: clamp(12px, 7.25vw, 80px);
    opacity: 0.9;
    padding-top: 20px;
  }
  p{
    color: rgb(213, 234, 247);
  }
}

</style>