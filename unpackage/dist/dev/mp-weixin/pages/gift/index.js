"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      hitokoto: "",
      creator: "",
      from: "",
      imgUrl: "",
      index: 0
    };
  },
  onLoad() {
    this.getGift();
    this.goImg();
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
    goImg() {
      common_vendor.index.request({
        url: `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=${this.index}&n=1`,
        success: (res) => {
          const url = res.data.images[0].url;
          this.imgUrl = `https://www.bing.com//${url}`;
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
      this.goImg();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backClick && $options.backClick(...args)),
    b: common_vendor.o((...args) => $options.flushedClick && $options.flushedClick(...args)),
    c: $data.imgUrl,
    d: common_vendor.o((...args) => $options.flushedClick && $options.flushedClick(...args)),
    e: common_vendor.t($data.hitokoto),
    f: common_vendor.t($data.from)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/吴/Documents/HBuilderProjects/cake/pages/gift/index.vue"]]);
wx.createPage(MiniProgramPage);
