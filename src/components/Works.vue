<template>
  <div class="works">
    <h3 class="section-title"><span class="neon-sb">3. </span>Works</h3>
    <div class="work">
      <!-- ************* -->
      <div class="work-box">
        <a nohref>
        <!-- <a href="https://yoshiakikiki.com"> -->
          <div class="work-img">
            <img src="../assets/img/yoshiaki.png" alt="コーポレートサイト">
          </div>
          <div class="work-detail">
            <h4>Corporate Site</h4>
            <p>企業のコーポレートサイトを設計から実装までLaravelを用いて作成しました。一般的なトップページ、会社・事業概要ページがあります。</p>
            <p>さらに機能として、お問い合わせの自動返信メール,記事管理、製品管理機能を実装しました。</p>
            <p>HTML, SCSS, PHP, Laravel</p>
            <!-- <ul>
              <li class="language">HTML</li>
              <li class="language">SCSS</li>
              <li class="language">PHP</li>
              <li class="language">Laravel</li>
            </ul> -->
          </div>
        </a>
      </div>
      <!-- ************* -->
      <div class="work-box">
        <a href="/">
          <div class="work-img">
            <img src="../assets/img/portfolio.png" alt="Portfolio Site">
          </div>
          <div class="work-detail">
            <h4>Portfolio Site</h4>
            <p>私のポートフォリオ（本ページ）です。</p>
            <p>HTML,SCSSに加え、vue.jsを用いて制作しました。幾何学模様を意識したデザインに仕上げました。</p><br>
            <p>HTML, SCSS, Jacascript, vue.js</p>
            <!-- <ul>
              <li class="language">HTML</li>
              <li class="language">SCSS</li>
              <li class="language">Jacascript</li>
              <li class="language">vue.js</li>
            </ul> -->
          </div>
        </a>
      </div>
      <div class="clear"></div>
      <!-- ************* -->

    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/app';
.works{
  color: #fff;
  .work{
    padding-top: 5%;
    margin: 0 auto;
    width: 90%;
    &-box{
      border-bottom: solid 1px rgb(100, 100, 100);
      box-sizing: border-box;
      border-radius: 10px;
      width: 45%;
      float: left;
      margin: 0 calc(10% / 4);
      overflow: hidden;
      background: rgb(255, 255, 255, 0.8);
      @include mq-down(sm){
        float: none;
        width: 90%;
        margin: 15px auto;
      }
      a{
        color: #000;
        .work-img{
          img{
            width: 100%;
          }
        }
        .work-detail{
          padding: 5px 3%;
          h4{
            color: rgb(0, 0, 0);
            text-shadow:calc(1px / 2) calc(1px / 2) calc(1px / 2) #000;
            font-size: clamp(14px, 3vw, 30px);
            padding-bottom: 5px;
          }
          p{
            text-align: left;
            line-height: 175%;
            font-size: clamp(8px, 2vw, 20px);
          }
          // ul{
          //   padding-top: 10px;
          //   li{
          //     display: inline-block;
          //     background: #000;
          //     color:#fff;
          //     margin: 1%;
          //     padding: 2px 5px;
          //     border-radius: 5px;
          //     border: solid 1px #000;
          //     font-size: clamp(8px, 3vw, 16px);
          //   }
          // }
        }
      }
    }
  }
}
img{
  // width: 10px;
}
</style>