<template>
	<view class="card">
		<view class="card-cont">
			<image class="hk" src="../../static/img/wz_bg.png" mode=""></image>
			<img src="/static/img/back.png" alt="" class="back" @click="backClick" />
			<view class="card-text">
				我想当我们遇见，将会找到一个地方，看花，喝茶，并肩坐着，说些絮絮叨叨温柔而轻声的话。<br />
				不知不觉，就让岁月又翻了一页。<br />
				愿你慢慢长大，<br />
				愿你有好运气，<br />
				如果没有，<br />
				愿你在不幸中学会慈悲；<br />
				愿你被很多人爱，如果没有，<br />
				愿你在寂寞中学会宽容。<br />
				愿你一生一世，每天都可以睡到自然醒。
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isPlay: false,
			}
		},
		methods: {
			backClick() {
				uni.navigateBack(-1)
			}
		}
	}
</script>
<style lang="less" scoped>
	.card {
		height: 100%;
		position: relative;
		background-image: url('../../static/img/bg.png');
		background-position: 0 0;
		background-repeat: 0 0;
		background-size: 100%;
		padding: 32rpx;
		padding-top: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		.card-cont {
			width: 100%;
			height: 950rpx;
			position: relative;

			.hk {
				width: 100%;
				height: 100%;
				border-radius: 60rpx;
			}

			.back {
				position: absolute;
				top: 15rpx;
				width: 50rpx;
				height: 60rpx;
				left: 30rpx;
				z-index: 999;
			}

			.card-text {
				position: absolute;
				top: 220rpx;
				padding: 40rpx;
				color: #726c73;
			}
		}

	}
</style>