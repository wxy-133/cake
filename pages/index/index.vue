<template>
	<view class=" content">
		<view class="cake">
			<view class="cake_base"></view>
			<view class="tier1"></view>
			<view class="white1"></view>
			<view class="detail1"></view>
			<view class="detail2"></view>
			<view class="detail3"></view>
			<view class="detail3a"></view>
			<view class="detail3b"></view>
			<view class="tier1d"></view>
			<view class="tier2"></view>
			<view class="tier2d"></view>
			<view class="white2"></view>
			<view class="detail4"></view>
			<view class="detail5"></view>
			<view class="detail6"></view>
			<view class="tier3"></view>
			<view class="tier3d"></view>
			<view class="white3"></view>
			<view class="detail7"></view>
			<view class="detail8"></view>
			<view class="detail9"></view>
			<view class="flame"></view>
			<view class="holder"></view>
		</view>
		<view class="music" @click="musicClick">
			<image src="/static/img/music.png" mode="" v-if="isPlay!==true"></image>
			<image src="/static/img/music_active.png" mode="" v-else></image>
		</view>
		<!-- 
		<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name"
			:author="current.author" :action="audioAction" controls></audio> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isPlay: false,
			}
		},
		onLoad() {

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
					this.innerAudioContext.pause(); // 暂停音频
				} else {
					// this.innerAudioContext.play(); // 播放音频
					setTimeout(() => {
						this.innerAudioContext.play();
						console.log('---------')
					}, 10);
				}

			}



		}
	}
</script>

<style lang="less" scoped>
	page {

		display: flex;
		height: 100vh;
		align-items: center;
		justify-content: center;
		background-color: #b0d5df;
		overflow: hidden;
		margin: 0;
	}


	.cake {

		body {
			background: white;
			font-family: "Pacifico", cursive;
		}

		.cake_base {
			top: 60.5%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			width: 80%;
			height: 1.5%;
			background-color: lightgray;
			border-radius: 12rpx;
		}

		h2 {
			color: hotpink;
			font-size: 1.5em;
			text-align: center;
			top: 65%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
		}

		.tier1 {
			top: 57%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 10px;
			width: 60%;
			height: 6%;
			background-color: #e7b1db;
			z-index: 1;
		}

		.white1 {
			top: 54.5%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			width: 60%;
			height: 1%;
			background-color: white;
			z-index: 1;
		}

		.detail1 {
			top: 54.5%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.detail2 {
			top: 54.5%;
			left: 55%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.detail3 {
			top: 54.5%;
			left: 45%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.detail3a {
			top: 54.5%;
			left: 40%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.detail3b {
			top: 54.5%;
			left: 60%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.tier1d {
			top: 57%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			width: 60%;
			height: 1.5%;
			background-color: #db57bd;
			z-index: 1;
		}

		.tier2 {
			top: 51%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 10px;
			width: 57%;
			height: 6%;
			background-color: #a5dae4;
			z-index: 1;
		}

		.tier2d {
			top: 51%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			width: 57%;
			height: 1.5%;
			background-color: #59bdd0;
			z-index: 1;
		}

		.white2 {
			top: 48.5%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			width: 57%;
			height: 1.5%;
			background-color: white;
			z-index: 1;
		}

		.detail4 {
			top: 48.5%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.detail5 {
			top: 48.5%;
			left: 45%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.detail6 {
			top: 48.5%;
			left: 55%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.tier3 {
			top: 45%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 10px;
			width: 50%;
			height: 6%;
			background-color: #cba3e6;
			z-index: 1;
		}

		.tier3d {
			top: 45%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			width: 50%;
			height: 1.5%;
			background-color: #9b36df;
			z-index: 1;
		}

		.white3 {
			top: 42%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			width: 57%;
			height: 1.5%;
			background-color: white;
			z-index: 1;
		}

		.detail7 {
			top: 42.3%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.detail8 {
			top: 42.3%;
			left: 45%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.detail9 {
			top: 42.3%;
			left: 55%;
			transform: translate(-50%, -50%);
			position: absolute;
			border-radius: 50%;
			width: 4%;
			height: 2%;
			background-color: white;
			z-index: 1;
		}

		.holder {
			top: 38%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			width: 1.5%;
			border-radius: 30px;
			height: 7%;
			background-color: beige;
			z-index: 1;
		}

		.flame {
			position: absolute;
			background-color: orange;
			width: 1.5%;
			height: 4.5%;
			border-radius: 10px 10px 10px 10px / 25px 25px 10px 10px;
			top: 30%;
			left: 50%;
			transform: translate(-50%, -50%);
			box-shadow: 0 0 10px 1px orange;
			animation: shadow 1s ease-in-out alternate infinite, move 3s linear infinite;
		}

		@keyframes shadow {
			0% {
				box-shadow: 0 0 10px 1px orange;
			}

			25% {
				box-shadow: 0 0 15px 1px orange;
			}

			50% {
				box-shadow: 0 0 20px 1px orange;
			}

			75% {
				box-shadow: 0 0 15px 1px orange;
			}

			100% {
				box-shadow: 0 0 10px 1px orange;
			}
		}

		@keyframes move {

			0%,
			100% {
				transform: translateX(-50%) rotate(-5deg)
			}

			50% {
				transform: translateX(-50%) rotate(5deg)
			}
		}
	}



	.content {
		width: 100%;
		height: 100%;
		position: relative;

		.music {
			position: absolute;
			top: 0;

			image {
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
</style>