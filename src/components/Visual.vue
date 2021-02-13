<template>
  <div id="visual" class="visual">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="2"
      linesColor="#c0f5fe"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.6"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>
<script src="../particles/particle.js"></script>
<script>
export default {
  methods:{

  }
}
</script>

<style lang="scss" scoped>
.visual{
  margin: 0 calc(50% - 50vw);
  background: #000;
}
</style>