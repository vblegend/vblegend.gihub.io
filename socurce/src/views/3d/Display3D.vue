<template>
  <div class="description">Display 3D page In the preparation...</div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    // ListBoxItem,
  },
})
export default class Display3D extends Vue {
  /**
   *
   */
  constructor() {
    super();
  }

  private activated() {
    console.log("display 3d page activated");
  }

  private deactivated() {
    console.log("display 3d page deactivated");
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
