<template>
  <div :class="{'message-ctn': true, 'received': !sent}">
    <div class="main-message">
      지갑 봤어요 봤어요
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    sent: {
      type: Boolean,
      default: () => true
    }
  }
}
</script>

<style scoped>
  .message-ctn{margin-bottom:8px;display:block;width:100%;}
  .main-message{display:block;float:right;padding:16px;max-width:250px;font-size:13px;color:#333;border:#EFEFEF;border-radius:22px;background:#efefef;box-sizing:border-box;}
  .received .main-message{float:left;font-size:13px;color:#333;border:1px solid #efefef;background:#fff;}
</style>