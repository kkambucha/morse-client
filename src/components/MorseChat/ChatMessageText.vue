<template>
  <div class='message-text'>
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
