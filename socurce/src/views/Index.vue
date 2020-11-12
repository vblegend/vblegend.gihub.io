<template>
  <div class="about">In the preparation...</div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    // ListBoxItem,
  },
})
export default class Index extends Vue {
  /**
   *
   */
  constructor() {
    super();
  }

  private activated() {
    console.log("首页激活");
  }

  private deactivated() {
    console.log("首页隐藏");
  }
}
</script>
<style scoped>
.about {
  position: relative;
  /* background-color: red; */
  width: 100%;
  height: 100%;
}
</style>
