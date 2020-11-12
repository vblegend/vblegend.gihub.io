<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>

    <!-- 用户头像 -->
    <div class="user-avator">
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        width="48"
        height="48"
      >
        <path
          d="M520.704 64L170.496 241.152v360.448l349.696 177.152 349.696-177.152V241.152l-349.184-177.152z m283.648 497.152l-285.696 144.896-91.648-47.104 157.696-89.6c8.704 4.096 16.896 6.656 25.6 6.656 31.744 0 57.344-25.6 57.344-57.344s-25.6-57.344-57.344-57.344c-29.696 0-53.248 21.504-55.296 49.152l-198.144 111.104-123.904-61.952V279.552l285.696-144.896 102.4 51.2-164.352 91.648c-8.704-4.096-16.896-6.144-25.6-6.144C399.36 271.36 373.76 296.96 373.76 328.704s25.6 57.344 57.344 57.344c29.696 0 53.248-21.504 55.296-49.152l202.752-113.152L802.304 281.6v279.552h2.048z"
          fill="#ffffff"
          p-id="19773"
        ></path>
        <path
          d="M522.752 883.2l-352.256-173.056v70.656l352.256 175.104 347.648-175.104v-70.656l-347.648 173.056z"
          fill="#ffffff"
          p-id="19774"
        ></path>
      </svg>
    </div>

    <div class="logo">Hanks' GitHub Projects</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 @click="handleFullScreen" -->

        <el-link
          class="btn-fullscreen"
          type="success"
          href="https://element.eleme.io"
        >
          <el-tooltip effect="dark" content="github" placement="bottom">
            <i class="el-icon-share"></i>
          </el-tooltip>
        </el-link>

        <el-link
          class="btn-fullscreen"
          type="primary"
          href="https://github.com/vblegend"
          target="_blank"
        >
          <el-tooltip effect="dark" content="go GitHub" placement="bottom">
            <i class="el-icon-s-promotion"></i>
          </el-tooltip>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script lang='ts' >
import { Events } from "@/utility/Events";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Header extends Vue {
  private collapse: boolean;
  private username: string;
  /**
   *
   */
  constructor() {
    super();
    this.collapse = false;
    this.username = "haha";
  }

  // 用户名下拉菜单选择事件
  private handleCommand(command: string) {
    if (command === "loginout") {
      localStorage.removeItem("ms_username");
      this.$router.push("/login");
    }
  }
  // 侧边栏折叠
  private collapseChage() {
    this.collapse = !this.collapse;
    Events.sideBarState.dispatch(this.collapse);
    // this.$emit("collapse", this.collapse);
  }

  private mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
  }
}
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: auto;
  margin-left: 10px;
  line-height: 70px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  /* No support for these yet */
  -o-user-select: none;
  user-select: none;
}
.header-right {
  float: right;
  padding-right: 10px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  color: #fff;
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator svg {
  height: 50px;
  width: 50px;
  padding: 10px;
  align-items: center;
  float: left;
  fill: #fff;
  line-height: 70px;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
