<template>
  <div class="wrapper">
    <v-head></v-head>
    <r-sidebar></r-sidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import vHead from "./Header.vue";
import rSidebar from "./Sidebar.vue";
import vTags from "./Tags.vue";
import { Events } from "../utility/Events";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    vHead,
    rSidebar,
  },
})
export default class Home extends Vue {
  private collapse: boolean;
  /**
   *
   */
  constructor() {
    super();
    this.collapse = false;
  }

  private data() {
    return {
      tagsList: [],
      collapse: false,
    };
  }


  private created() {
    Events.sideBarState.add((value: boolean) => {
      this.collapse = value;
      console.log("this.collapse = " + this.collapse);
    });
  }


  private mounted(): void {
    console.log("mounted");
  }
}
</script>
