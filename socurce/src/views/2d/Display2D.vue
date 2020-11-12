<template>
  <div class="description">Display 2D page In the preparation...</div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    // ListBoxItem,
  },
})
export default class Display2D extends Vue {
  /**
   *
   */
  constructor() {
    super();
  }

  private activated() {
    console.log("display 2d page activated");
  }

  private deactivated() {
    console.log("display 2d page deactivated");
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
