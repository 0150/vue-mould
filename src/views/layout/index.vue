<template>
  <div class="home-container">
    <div class="top-container">
      222
    </div>
    <div class="main-container">
      <div class="menuDiv">
        <div class="menu-list" v-for="(item, index) in menuList" :key="index"
          :class="currenIndex==index?'menu-active':''" @click="goToRoute(item, index)">{{item.meta.name}}</div>
      </div>
      <div class="mainBreadContent">
        <div class="breadNav">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="mainContent">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicRoutes from "@/router/dynamic-router";
import { mapState } from "vuex";
export default {
  data () {
    return {
      menuList: DynamicRoutes,
      currenIndex: 0,
      breadcrumbData: []
    }
  },
  computed: {
    ...mapState("breadRoute", ["breadData"])
  },
  watch: {
    breadData (val) {
      this.breadcrumbData = JSON.parse(val);
    }
  },
  methods: {
    goToRoute (item, index) {
      this.currenIndex = index;

      this.$router.push({ path: item.path });

      this.breadcrumbData = [item.meta.name];
      this.$store.commit("breadRoute/SET_BREAD_DATA", JSON.stringify(this.breadcrumbData));
    }
  },
  created () {
    this.breadcrumbData = [this.menuList[0].meta.name];
    this.$store.commit("breadRoute/SET_BREAD_DATA", JSON.stringify(this.breadcrumbData));
  }
}
</script>

<style lang="scss">
.home-container {
  height: 100vh;
  .top-container {
    height: 70px;
    background: #2468a9;
  }
  .main-container {
    height: calc(100% - 70px);
    display: flex;
    background: #fff;
    .menuDiv {
      width: 220px;
      border-right: 2px solid #f5f5f5;
      text-align: center;
      .menu-list {
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        position: relative;
        &:hover {
          background: #c3d9e3;
          color: #0808ee;
        }
        &::after {
          content: "";
          width: 2px;
          height: 0;
          background: #44a4ff;
          position: absolute;
          right: -2px;
          top: 0;
          transition: all linear 0.1s;
        }
        &.menu-active {
          background: #f9f7f7;
          &::after {
            height: 100%;
          }
        }
      }
    }
    .mainBreadContent {
      flex: 1;
      .breadNav {
        height: 45px;
        display: flex;
        align-items: center;
        background: #f0f0f2;
        padding-left: 10px;
      }
      .mainContent {
        padding-left: 10px;
      }
    }
  }
}
</style>