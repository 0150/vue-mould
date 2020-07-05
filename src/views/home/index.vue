<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in tabData" :key="index" :label="item" :name="'tab-'+index">{{item}}
      </el-tab-pane>
    </el-tabs>

    <button @click="aaa">33</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabData: ["未完成事项", "已完成事项"],
      activeName: "tab-0",
    }
  },
  methods: {
    handleClick (e) {
      let index = e.index;
      this.initNewBreadRoute(1, this.tabData[index]);
    },
    aaa() {
      this.initNewBreadRoute(2, "55555");
    }
  },
  created () {
    this.initNewBreadRoute(1, this.tabData[0]);
  }
}
</script>