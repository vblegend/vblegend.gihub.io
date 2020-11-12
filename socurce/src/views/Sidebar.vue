<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :collapse="collapse"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                  >{{ threeItem.title }}</el-menu-item
                >
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.index"
                :key="subItem.index"
                >{{ subItem.title }}</el-menu-item
              >
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang='ts'>
import { Events } from "@/utility/Events";
import { Component, Vue } from "vue-property-decorator";

import { MenuIndex } from "../router/MenuIndex";

@Component({
  components: {},
})
export default class Sidebar extends Vue {
  private collapse: boolean;
  /**
   *
   */
  constructor() {
    super();
    this.collapse = false;
  }

  private data(): any {
    return MenuIndex.value;
  }

  private onRoutes() {
    console.log(`onRoutes`);
    return this.$route.path.replace("/", "");
  }

  private created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    // this.$on("collapse", (msg: any) => {
    //   this.collapse = msg;
    //   this.$emit("collapse-content", msg);
    // });

    Events.sideBarState.add((value: boolean) => {
      this.collapse = value;
      console.log("this.collapse = " + this.collapse);
    });
  }
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  /* No support for these yet */
  -o-user-select: none;
  user-select: none;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
