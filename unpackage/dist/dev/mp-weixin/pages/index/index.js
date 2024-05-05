"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isPlay: false
    };
  },
  onLoad() {
  },
  methods: {
    musicClick() {
      if (!this.innerAudioContext) {
        this.innerAudioContext = common_vendor.index.createInnerAudioContext();
        this.innerAudioContext.obeyMuteSwitch = false;
        this.innerAudioContext.src = "/static/img/cake.mp3";
        this.innerAudioContext.onError((res) => {
          console.log(res.errMsg);
          console.log(res.errCode);
        });
      }
      this.isPlay = !this.isPlay;
      if (!this.isPlay) {
        this.innerAudioContext.pause();
      } else {
        setTimeout(() => {
          this.innerAudioContext.play();
          console.log("---------");
        }, 10);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isPlay !== true
  }, $data.isPlay !== true ? {} : {}, {
    b: common_vendor.o((...args) => $options.musicClick && $options.musicClick(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/吴/Documents/HBuilderProjects/cake/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
