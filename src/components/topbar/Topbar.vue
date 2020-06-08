<template>
  <component :is="tag" class="topbar">
  </component>
</template>

<script>
  export default {
    name: 'HkTopbar',
    props: {
        tag: {
            type: String,
            default: 'nav',
            required: false
        }
    }
  }
</script>

<style lang="scss" scoped>
</style>