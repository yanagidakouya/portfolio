<template>
  <div class="blog">
    <h3 class="section-title"><span class="neon-sb">4. </span>Blog</h3>
    <div class="preparation">
      <!-- <p style="padding: 70px 0;">Preparation...</p> -->
      <p>WP REST APIを用いて投稿した記事を取得しています。</p>
    </div>

    <div id="wp-post">
      <div v-for="(post , key) in posts" :key="key">
        <div class="post">
          <a :href="post.link">
            <p v-text="getDate(post.date)"></p>
            <h3>{{ post.title.rendered }}</h3>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  el: "#wp-post",
  data() {
    return {
      posts:[]
    }
  },
  methods: {
    getPosts(){
      const _this = this;
      this.$axios.get('https://yanagidakouya.com/blog/wp-json/wp/v2/posts/?_embed').then(response => {
        _this.posts = response.data;
      });
    },
    getDate(date){
      const dt = new Date(date);
      return dt.getFullYear() + '.' + (dt.getMonth() + 1) + '.' + dt.getDate();
    }
  },
  // ページが読み込まれたらgetPosts()する
  mounted(){
    this.getPosts();
  }

}

</script>

<style lang="scss" scoped>
.blog{
  color:#fff;
  .preparation{
    font-size: clamp(8px, 2vw, 20px);
  }
  .post{
    width: 70%;
    margin: 5% auto;
    background: rbga(255, 255, 255, 1);
    border: 1px solid #6f6f6f;
    box-shadow: 3px 3px 3px rgba(192, 245, 254, 0.5);
    border-radius: 10px;
    padding: 3%;
    a{
      color: #fff;
      display: inline-block;
      &:hover{
        opacity: 0.8;
      }
      h3{
        padding: 2% 0;
        font-size: clamp(12px, 2.5vw, 20px);
      }
      p{
        border-bottom: 1px solid #c0f5fe;
        display: inline;
      }
    }
  }
}
</style>