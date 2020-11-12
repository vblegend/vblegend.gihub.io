<template>
  <div class="description">Designer 2d page In the preparation...</div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    // ListBoxItem,
  },
})
export default class Designer2D extends Vue {
  /**
   *
   */
  constructor() {
    super();
  }

  private activated() {
    console.log("designer 2d page activated");
  }

  private deactivated() {
    console.log("designer 2d page deactivated");
  }
}
</script>
<style scoped>
.description {
  position: relative;
  /* background-color: red; */
  width: 100%;
  height: 100%;
}
</style>
