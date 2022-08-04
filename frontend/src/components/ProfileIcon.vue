<template>
  <div>
    <img src="@/assets/images/bitmaps/profile-image.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'ProfileIcon',
  props: {
    active: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
