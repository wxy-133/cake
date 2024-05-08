"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      hitokoto: "",
      creator: "",
      from: "",
      index: 0
    };
  },
  onLoad() {
    this.getGift();
  },
  methods: {
    backClick() {
      common_vendor.index.navigateBack(-1);
    },
    getGift() {
      common_vendor.index.request({
        url: "https://api.codelife.cc/yiyan/random",
        success: (res) => {
          const data = res.data.data;
          this.hitokoto = data.hitokoto;
          this.from = data.from;
        }
      });
    },
    flushedClick() {
      this.index++;
      if (this.index >= 10) {
        common_vendor.index.showToast({
          title: "施主，少即是多"
        });
        return;
      }
      this.getGift();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backClick && $options.backClick(...args)),
    b: common_vendor.o((...args) => $options.flushedClick && $options.flushedClick(...args)),
    c: common_vendor.o((...args) => $options.flushedClick && $options.flushedClick(...args)),
    d: common_vendor.t($data.hitokoto),
    e: common_vendor.t($data.from)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/吴/Documents/HBuilderProjects/cake/pages/gift/index.vue"]]);
wx.createPage(MiniProgramPage);
