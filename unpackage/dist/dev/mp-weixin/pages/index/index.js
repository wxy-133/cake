"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isPlay: false,
      text: "播放音乐"
    };
  },
  onShareAppMessage(res) {
    let that = this;
    let imageUrl = that.shareUrl || "";
    if (res.from === "button") {
      return {
        title: "生日快乐，吃个蛋糕吧",
        path: "index/index",
        imageUrl
      };
    }
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
        this.text = "播放音乐";
        this.innerAudioContext.pause();
      } else {
        this.text = "暂停音乐";
        setTimeout(() => {
          this.innerAudioContext.play();
          console.log("---------");
        }, 10);
      }
    },
    giftClick() {
      common_vendor.index.navigateTo({
        url: "/pages/gift/index"
      });
    },
    cardClick() {
      common_vendor.index.navigateTo({
        url: "/pages/card/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.text),
    b: $data.isPlay
  }, $data.isPlay ? {} : {}, {
    c: common_vendor.o((...args) => $options.musicClick && $options.musicClick(...args)),
    d: common_vendor.o((...args) => $options.cardClick && $options.cardClick(...args)),
    e: common_vendor.o((...args) => $options.giftClick && $options.giftClick(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/吴/Documents/HBuilderProjects/cake/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
