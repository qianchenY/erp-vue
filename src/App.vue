<template>
  <router-view></router-view>
</template>

<script>
import { ref } from 'vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState([
      'count'
    ])
  },
  setup() {
    let num = ref(0);

    return {
      num
    }
  }
}
</script>

<style lang="scss">
  //公共样式文件
  ::selection {
      color: #fff;
      background: $color;
  }

  * {
      margin: 0px;
      padding: 0px;
  }

  html{
      font-size: 62.5%;
      height: 100%; 
      scroll-behavior: smooth;
  }

  body {
      margin:0 auto;
      width: 100%;
      max-width:1920px; 
      overflow-x: hidden;
      font-family: arial, helvetica, sans-serif;
      @include font-size;
      color: #333;
    line-height: 1.2;
    background-color: #fff;
  }

  @media screen and (max-device-width: 320px){body{-webkit-text-size-adjust:100%}}
  @media screen and (max-device-width: 480px){body{-webkit-text-size-adjust:100%}}
  @media only screen and (-webkit-min-device-pixel-ratio: 2){body{-webkit-text-size-adjust:100%}}
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){body{-webkit-text-size-adjust:100%}}

  a {
      color: #333;
      text-decoration: none;
      outline: none;
      tap-highlight-color: transparent;
      focus-ring-color: transparent;
      -webkit-tap-highlight-color: transparent;
      -webkit-focus-ring-color: transparent;
      -moz-tap-highlight-color: transparent;
      -moz-focus-ring-color: transparent;
      @include transition;

      &:hover{
          color: $color;
      }
  }

  ol, ul, li {
      list-style: none;
  }

  img {
      max-width: 100%;
      border: 0px solid #ccc;
    height: auto;
  }

  table, embed, video {
      max-width: 100%;
  }

  input, textarea{
      border: none;
      background: none;
    font-family: inherit;
      
      &[type="submit"]{
          cursor: pointer;
      }
      
      &[type="checkbox"]{
          cursor: pointer;
      }
      
      &[type="radio"]{
          cursor: pointer;
      }
      
      &:focus{
          outline: none;
      }
  }
  input[type="submit"], input[type="reset"], input[type="button"], button { -webkit-appearance: none; /*去掉苹果的默认UI来渲染按钮*/}

  textarea{
      resize: none;
  }

  button{
      border: none;
      background: none;
      cursor: pointer;
  }

  em,i{
      font-style: normal;
  }

      
  /* .c-xx start */
  .c-fl{
      @include float;
  }

  .c-fr{
      @include float(right);
  }

  .c-cb{
      clear: both;
  }

  .c-clearfix{
      &:after{
          content: "";
          display: block;
          clear: both;
      }
  }

  .c-mg{
      @include margin;
  }

  .c-oh{
      overflow: hidden;
  }

  .c-wd{
      width: $width;
  }


  .c-tsn{
      @include transition;
  }

  .c-bbx{
      box-sizing: border-box;
  }

  .c-pr{
      position: relative;
  } 

  @for $i from 5 through 50 { 
      @if($i % 5 == 0){
          .c-mt-#{$i} { 
              margin-top: $i + 0px; 
          }             
      }
  }

  .c-nomt{
      margin: {
          top: 0 !important;
      };
  }

  .c-nomr{
      margin: {
          right: 0 !important;
      };
  }

  .c-nomb{
      margin: {
          bottom: 0 !important;
      };
  }

  .c-noml{
      margin: {
          left: 0 !important;
      };
  }  

  .c-nomg{
      margin: 0 !important;
  }  

  .c-nopt{
      padding: {
          top: 0 !important;
      };
  }

  .c-nopr{
      padding: {
          right: 0 !important;
      };
  }

  .c-nopb{
      padding: {
          bottom: 0 !important;
      };
  }

  .c-nopl{
      padding: {
          left: 0 !important;
      };
  } 

  .c-nopd{
      padding: 0 !important;
  }   

  .c-nofont{
      line-height: 0;
      font-size: 0;
  } 

  .c-nobg{
      background: none !important;
  }	

  /* .c-xx end */

  /* .f-xx start */
  .f-czjz {
      position: relative;
      top: 50%;
      transform: translate(0px, -50%);
  }  

  .f-box{
      margin: 0 auto;
      width: $width;
    max-width: 100%;
      overflow: visible;
    box-sizing: border-box;
  }


  @media screen and (max-width:1219px){
      .f-box{
          width: 960px;
      }
  }

  @media screen and (max-width:991px){
      .f-box{
          width: 720px;
      }
  }

  @media screen and (max-width: 767px){
      .f-box{
          padding: {
              left: 15px;
              right: 15px;
          };
      }
  }	
  /* .f-xx end */

  /* @keyframes start */

  @keyframes boxshadown{
    0%{
      box-shadow: 0 0 0 1px rgba(51, 51, 51, 0.2);
    }

    100%{
      box-shadow: 0 0 0 15px rgba(51, 51, 51, 0);
    }
  }

  /* @keyframes end */
</style>
