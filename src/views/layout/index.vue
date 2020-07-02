<template>
  <div class="home-container">
    <div class="top-container">
      222
    </div>
    <div class="main-container">
      <div class="menuDiv">2</div>
      <div class="mainContnt">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.home-container {
  height: 100vh;
  .top-container {
    height: 70px;
    background: #aaa;
  }
  .main-container {
    height: calc(100% - 70px);
    display: flex;
    .menuDiv {
      width: 220px;
      background: #bbb;
    }
    .mainContnt {
      flex: 1;
      background: #ccc;
    }
  }
}
</style>