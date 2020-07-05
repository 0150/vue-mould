<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in tabData" :key="index" :label="item" :name="'tab-'+index">{{item}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabData: ["全部客户", "新增客户"],
      activeName: "tab-0",
    }
  },
  methods: {
    handleClick (e) {
      let index = e.index;
      this.initNewBreadRoute(1, this.tabData[index]);
    },
  },
  created () {
    this.initNewBreadRoute(1, this.tabData[0]);
  }
}
</script>