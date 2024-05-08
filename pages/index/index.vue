<template>
	<view class=" content">
		<view class="cake">
			<view class="cake-img">
				<image src="../../static/img/cake.png" mode=""></image>
			</view>
			<view class="play-text">
				<view class="play-tips">点击右侧{{text}}</view>
				<view class="play-bg" @click="musicClick">
					<image v-if="isPlay" src="../../static/img/play.png" mode=""></image>
					<image v-else src="../../static/img/pause.png" mode=""></image>
				</view>
			</view>
			<view class="zf">
				生日快乐
			</view>
		</view>
		<!-- 	<view class="music-btn" @click="musicClick">
			{{text}}
		</view> -->
		<view class="shareBtn" @click="giftClick">
			查看寄语
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isPlay: false,
				text: "播放音乐"
			}
		},
		onShareAppMessage(res) {
			let that = this;
			let imageUrl = that.shareUrl || '';
			if (res.from === 'button') {

				return {
					title: '生日快乐，吃个蛋糕吧',
					path: 'index/index',
					imageUrl: imageUrl
				};
			}
		},
		methods: {

			musicClick() { // url即为音频路径
				if (!this.innerAudioContext) {
					this.innerAudioContext = uni.createInnerAudioContext();
					this.innerAudioContext.obeyMuteSwitch = false;
					this.innerAudioContext.src = '/static/img/cake.mp3';
					this.innerAudioContext.onError((res) => {
						console.log(res.errMsg);
						console.log(res.errCode);
					});
				}
				this.isPlay = !this.isPlay;
				if (!this.isPlay) {
					this.text = '播放音乐'
					this.innerAudioContext.pause(); // 暂停音频
				} else {
					this.text = '暂停音乐'
					// this.innerAudioContext.play(); // 播放音频
					setTimeout(() => {
						this.innerAudioContext.play();
						console.log('---------')
					}, 10);
				}

			},
			giftClick() {
				uni.navigateTo({
					url: '/pages/gift/index'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	page {

		// display: flex;
		height: 100vh;
		// align-items: center;
		// justify-content: center;
		// background-color: #b0d5df;
		// overflow: hidden;
		margin: 0;

	}

	.content {
		height: 100%;
		position: relative;
		background: black;
		background-image: url('../../static/img/bg.png');
		background-position: 0 0;
		background-repeat: 0 0;
		background-size: 100%;
		padding: 32rpx;


		.cake {
			width: 90.6%;
			height: 1110rpx;
			background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.73) 100%);
			padding: 32rpx;
			border-radius: 32rpx;

			.cake-img {
				height: 880rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.play-text {

				display: flex;
				margin-top: 20rpx;
				justify-content: space-between;
				position: relative;

				.play-tips {
					width: 320rpx;
					height: 60rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 400;
					font-size: 30rpx;
					line-height: 60rpx;
					color: #FFFFFF;
					border-radius: 32rpx;
					padding-left: 20rpx;
					background: #000000;
				}

				.play-bg {
					width: 158rpx;
					height: 158rpx;
					background-image: url('../../static/img/play-bg.png');
					background-position: 0 0;
					background-repeat: 0 0;
					background-size: 100%;
					position: absolute;
					display: flex;
					justify-content: center;
					align-items: center;
					top: -75rpx;
					right: -2px;

					image {
						width: 40rpx;
						height: 40rpx;
					}
				}
			}

			.zf {
				font-size: 140rpx;
				text-align: center;
				color: #F7B6B0;
			}
		}

		.music {
			position: absolute;
			top: 0;

			image {
				width: 100rpx;
				height: 100rpx;
			}
		}

		.shareBtn {
			width: 40%;
			height: 5%;
			color: white;
			background: #c1d8b7;

			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			margin-top: 50rpx;
			font-size: 28rpx;
			border-radius: 32rpx;
			background: linear-gradient(134deg, #4EF5C3 0%, #794DFF 42%, #56DAF5 100%);
			box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.38);
			border: 1px solid #FFFFFF;
		}
	}
</style>