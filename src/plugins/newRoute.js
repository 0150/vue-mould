import { mapState } from "vuex";
let minins = {
  data () {
    return {

    }
  },
  computed: {
    ...mapState("breadRoute", ["breadData"])
  },
  methods: {
    initNewBreadRoute (index, name) {
      // index：判断原来的面包屑导航留几个
      let data = JSON.parse(this.breadData);
      let arr = [data[index], name];
      this.$store.commit("breadRoute/SET_BREAD_DATA", JSON.stringify(arr));
    }
  }
}
export default minins