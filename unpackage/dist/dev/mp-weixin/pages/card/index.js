"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isPlay: false
    };
  },
  methods: {
    backClick() {
      common_vendor.index.navigateBack(-1);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backClick && $options.backClick(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-da938b18"], ["__file", "C:/Users/吴/Documents/HBuilderProjects/cake/pages/card/index.vue"]]);
wx.createPage(MiniProgramPage);
