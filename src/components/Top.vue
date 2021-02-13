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
  h2{
    font-size: 50px;
    opacity: 0.9;
    padding-top: 20px;
  }
}

</style>