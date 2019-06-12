<template>
  <div class='message-text' :class='{ "m-is-own": message.isOwn }'>
    <div class='message-text-author'>
      {{ message.author }}
    </div>
    <div>
      {{ message.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: Object
  }
}
</script>

<style lang='scss' scoped>
  .message-text {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 40%;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: var(--v-info-base);
    color: #fff;
    border-radius: 7px !important;
    float: left;
    clear: both;

    &.m-is-own {
      float: right;

      &:before {
        left: -9px;
        top: -9px;
        transform: rotate(35deg);
        border-left: 15px transparent;
        border-right: 25px solid var(--v-info-base);
        right: auto;
      }
    }

    &:before {
      content: '';
      display: block;
      border: 15px solid transparent;
      border-left: 25px solid var(--v-info-base);
      position: absolute;
      top: -13px;
      right: -22px;
      transform: rotate(-35deg);
    }
  }

  .message-text-author {
    display: flex;
    text-decoration: underline;
    font-weight: 600;
  }
</style>
