<template>
<div class="loadingWrap">
  <div class="mop-load-div">
    <div class="mop-css-5 chasing-dots">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
    <div class="mop-load-text" v-show="loadingText.length">{{loadingText}}</div>
  </div>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'Loading',
  props: {
    loadingText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style type="text/css" scoped>
.loadingWrap{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
.mop-load-div {   
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.chasing-dots {
    min-width: 60px;
    min-height: 60px;
    position: relative;
    text-align: center;
    -webkit-animation: rotate 1.8s infinite linear;
    animation: rotate 1.8s infinite linear;
}
.dot1, .dot2 {
    width: 50%;
    height: 50%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: #fff;
    border-radius: 100%;
    -webkit-animation: bounce 1.8s infinite ease-in-out;
    animation: bounce 1.8s infinite ease-in-out;
}
.dot2 {
    top: auto;
    bottom: 0px;
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}
.mop-load-text {
    margin-top: 10px;
    color: #fff;
    line-height: 36px;
    font-size: 16px;
    letter-spacing: 2px;
    font-family: Trebuchet MS, Verdana, Helvetica, Arial, sans-serif;
}
@-webkit-keyframes bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
}
@-moz-keyframes bounce {
    0%, 100% { -moz-transform: scale(0.0) }
    50% { -moz-transform: scale(1.0) }
}
@-o-keyframes bounce {
    0%, 100% { -o-transform: scale(0.0) }
    50% { -o-transform: scale(1.0) }
}
@keyframes bounce {
    0%, 100% {
        transform: scale(0.0);
    } 50% {
          transform: scale(1.0);
      }
}
@-webkit-keyframes rotate { 100% { -webkit-transform: rotate(360deg) }}
@-moz-keyframes rotate { 100% { -moz-transform: rotate(360deg) }}
@-o-keyframes rotate { 100% { -o-transform: rotate(360deg) }}
@keyframes rotate { 100% { transform: rotate(360deg); }}
</style>
