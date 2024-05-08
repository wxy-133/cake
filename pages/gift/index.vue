<template>
	<view class="gift">
		<view class="content">
			<img src="/static/img/back.png" alt="" class="back" @click="backClick" />
			<img src="/static/img/flushed.png" alt="" class="flushed" @click="flushedClick" />

			<img src="/static/img/hk.jpg" alt="" class="hk" @click="flushedClick" />

			<view class="title">
				「 {{hitokoto}} 」
			</view>
			<view class="desc">
				{{from}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hitokoto: "",
				creator: "",
				from: "",
				index: 0
			}
		},
		onLoad() {
			this.getGift()
		},
		methods: {
			backClick() {
				uni.navigateBack(-1)
			},
			getGift() {
				uni.request({
					url: 'https://api.codelife.cc/yiyan/random',
					success: (res) => {
						const data = res.data.data
						this.hitokoto = data.hitokoto;
						this.from = data.from
					}
				})
			},
			flushedClick() {
				this.index++

				if (this.index >= 10) {
					uni.showToast({
						title: '施主，少即是多'
					})
					return
				}
				this.getGift()
			}
		}
	}
</script>

<style lang="less">
	.gift {
		position: relative;
		width: 100%;
		height: 100vh;

		.content {
			width: 90%;
			height: 60%;
			margin: 0 auto;
			margin-top: 50rpx;
			position: relative;
			// display: flex;
			// flex-direction: column;
			// justify-content: center;
			// align-items: center;

			.flushed {
				position: absolute;
				width: 50rpx;
				height: 50rpx;
				top: 15rpx;
				right: 30rpx;
				z-index: 999;
			}

			.back {
				position: absolute;
				top: 15rpx;
				width: 50rpx;
				height: 60rpx;
				left: 30rpx;
				z-index: 999;
			}

			.hk {
				position: absolute;
				top: 0px;
				left: 50%;
				transform: translateX(-50%);
			}

			.title {
				text-align: center;
				font-size: 30rpx;
				color: white;
				width: 85%;
				line-height: 46rpx;
				color: #354e5a;
				/* margin-top: 51px; */
				position: absolute;
				top: 500rpx;
				left: 50%;
				transform: translateX(-50%);
			}

			.desc {
				font-size: 26rpx;
				color: #354e5a;
				margin-top: 20rpx;
				position: absolute;
				top: 587rpx;
				left: 50%;
				transform: translateX(-50%);
				display: none;
			}
		}
	}
</style>