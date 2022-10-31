import Vue from "vue";
import TikTakToe from "./TikTakToe.vue";
new Vue({
  render: (createElement) => createElement(TikTakToe),
}).$mount("#root");
