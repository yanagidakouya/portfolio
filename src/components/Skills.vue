<template>
  <div class="skills">
    <h3 class="section-title"><span class="neon-sb">2. </span>Skills</h3>
    <div class="items">
      <h4 class="test">Languages</h4>
      <ul>
        <li class="item">
            <div class="item_img_box">
              <!-- <span><img class="item_img" src="../assets/img/html-5.svg" alt=""></span> -->
              <span><img class="item_img" src="../assets/img/html.svg" alt=""></span>
            </div>
            <p>HTML</p>
        </li>
        <li class="item">
            <div class="item_img_box">
              <!-- <span><img class="item_img" src="../assets/img/css-3.svg" alt=""></span> -->
              <span><img class="item_img" src="../assets/img/css.svg" alt=""></span>
            </div>
            <p>CSS</p>
        </li>
        <li class="item">
            <div class="item_img_box">
              <span><img class="item_img" src="../assets/img/javascript.svg" alt=""></span>
            </div>
            <p>JavaScript</p>
        </li>
        <li class="item">
            <div class="item_img_box">
              <span><img class="item_img" src="../assets/img/php.svg" alt=""></span>
            </div>
            <p>PHP</p>
        </li>
      </ul>
    </div>
    <div class="items">
      <h4>Frameworks / Others</h4>
      <ul class="items">
        <li class="item">
            <div class="item_img_box">
              <span><img class="item_img" src="../assets/img/sass.svg" alt=""></span>
            </div>
            <p>SASS</p>
        </li>
        <li class="item">
            <div class="item_img_box">
              <span><img class="item_img" src="../assets/img/jquery.svg" alt=""></span>
            </div>
            <p>jQuery</p>
        </li>
        <li class="item">
            <div class="item_img_box">
              <span><img class="item_img" src="../assets/img/vue.svg" alt=""></span>
            </div>
            <p>Vue.js</p>
        </li>
        <li class="item">
            <div class="item_img_box">
              <span><img class="item_img" src="../assets/img/laravel.svg" alt=""></span>
            </div>
            <p>Laravel</p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  
  }

// itemの高さを取得しstyle直書き
// window.addEventListener('load', () => {
// const heightAry = [];
// const ary = document.querySelectorAll('ul > li > div > span > img');
// // 各imgの高さを取得
// for (let i = 0; i < ary.length; i++ ) {
//   heightAry.push(ary[i].clientHeight);
// }
// let maxHeight = Math.max.apply(null, heightAry);

//   let elem = document.getElementsByClassName('item');
//   elem.style.height = maxHeight + 'px';

// console.log(typeof(maxHeight));
// document.getElementById('test').style.height = maxHeight + 'px';
// document.getElementsByClassName('test').style.height = maxHeight + 'px';
// });
</script>

<style lang="scss" scoped>
.skills{
  color: #fff;
  .items{
    padding: 2% 0;
    h4{
      font-size: clamp(18px, 2.5vw, 28px);
      border-bottom: 1px solid #c0f5fe;
      display: inline;
    }
    ul{
      display: flex;
      align-content: stretch;
      justify-content: space-between;
      padding: 2% 15% 1%;
      li{
        width: 15%;
        height: auto;
        position: relative;
        &:before{
          content: "";
          display: block;
          padding-top: 100%; 
        }
          span{
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
                /* 中央寄せ */
              text-align: center;
              padding: 2px;
              box-sizing: border-box;
              -moz-box-sizing: border-box;
              -webkit-box-sizing: border-box;
              -o-box-sizing: border-box;
              -ms-box-sizing: border-box;
              &:before{
                  content: "";
                  height: 100%;
                  vertical-align: middle;
                  width: 0px;
                  display: inline-block;
              }
            img{
              width: 100%;
            }
        }
      }
    }

  }
}
</style>