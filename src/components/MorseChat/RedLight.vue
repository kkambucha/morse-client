<template>
  <div class='red-light' :class='{ "m-light-on": isRedLightOn }'></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'isRedLightOn'
    ])
  }
}
</script>

<style lang='scss' scoped>
  .red-light {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #C17E7E;
    border-radius: 50%;
    border: 3px solid #C6C6C6;
    margin-left: auto;

    &.m-light-on {
      background: #F44336;
    }
  }
</style>
