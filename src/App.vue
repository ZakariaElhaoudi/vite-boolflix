<script >
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <AppHeader />
</template>

<style lang="scss" scoped></style>
