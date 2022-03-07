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
  a{
    color: $color;
  }
</style>
