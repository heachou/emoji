<template>
  <p class="title">{{slogan}}</p>
</template>
<script type="text/javascript">
export default {
  name: 'Nodata',
  props: {
    slogan: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
<style type="text/css" scoped>
.title{
  text-align: center;
  font-size: 14px;
  line-height: 40px;
  height: 40px;
  margin-top: 60px;
  color: #666;
}
</style>
