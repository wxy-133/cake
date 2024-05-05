<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			// ios端音频不能在静音下播放处理
			wx.setInnerAudioOption({
				obeyMuteSwitch: false,

				success: function(res) {
					console.log("开启静音模式下播放音乐的功能");
				},

				fail: function(err) {
					console.log("静音设置失败");
				},
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		width: 100%;
		height: 100vh;
	}
</style>