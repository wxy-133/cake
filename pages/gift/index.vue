<template>
	<view class="gift">
		<view class="content">
			<img src="/static/img/back.png" alt="" class="back" @click="backClick" />
			<img src="/static/img/flushed.png" alt="" class="flushed" @click="flushedClick" />

			<img :src="imgUrl" alt="" class="hk" @click="flushedClick" />

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
				imgUrl: '',
				index: 0
			}
		},
		onLoad() {
			this.getGift()
			this.goImg()
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
			goImg() {
				uni.request({
					url: `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=${this.index}&n=1`,
					success: (res) => {
						const url = res.data.images[0].url

						this.imgUrl = `https://www.bing.com//${url}`
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
				this.goImg()
			}
		}
	}
</script>

<style lang="less">
	.gift {
		height: 100%;
		position: relative;
		background: black;
		background-image: url('../../static/img/bg.png');
		background-position: 0 0;
		background-repeat: 0 0;
		background-size: 100%;
		padding: 32rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.content {
			width: 90%;
			height: 70%;
			margin: 0 auto;
			position: relative;

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
				border-radius: 32rpx;
				height: 580rpx;
			}

			.title {
				text-align: center;
				font-size: 30rpx;
				color: white;
				width: 85%;
				line-height: 46rpx;
				color: #d6d2fb;
				position: absolute;
				top: 600rpx;
				left: 50%;
				transform: translateX(-50%);
			}


			.desc {
				font-size: 25rpx;
				color: #d6d2fb;
				margin-top: 20rpx;
				position: absolute;
				top: 679rpx;
				left: 80%;
				opacity: .8;
				display: none;
			}

		}
	}
</style>