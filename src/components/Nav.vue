<template>
  <nav>
    <ul>
      <li><a href="#"><span>1.</span>About</a></li>
      <li><a href="#"><span>2.</span>Skills</a></li>
      <li><a href="#"><span>3.</span>Works</a></li>
      <li><a href="#"><span>4.</span>Blog</a></li>
      <li><a href="#"><span>5.</span>Contact</a></li>
      <li><a href="#"><span>6.</span>Other</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
li{
  float: left;
}
li a{
  display: inline-block;
  padding: 5px 10px;
  color: rgb(242, 242, 242)
}
li a span{
  font-size: 0.85em;
  color: #c0f5fe;
   text-shadow: 0 0 1rem #138093, 0 0 6ch #a5eaf6, 0 0 1ch #77dff1, 0 0 1rem #5bdaf0;
}
</style>