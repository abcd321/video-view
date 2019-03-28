<template>
	<div class="video-detail">
		<mt-header :title="title" fixed>
		  <router-link to="/video/videoList" slot="left">
			<mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="video-window">
			<video width="100%"  ref="video"
			controls="controls" autoplay="autoplay">
				该浏览器不支持播放视频
			</video>
			<div class="introduce">
				<section>
					<strong>简介：</strong>
					{{ this.introduce }}
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'videoDetail',
		data(){
			return {
				href:this.$route.params.href,
				title:this.$route.params.title,
				introduce:this.$route.params.introduce
			}
		},
		mounted() {
			this.$refs.video.src = this.href
		}
	}
</script>

<style scoped="scoped">
	.introduce{
		padding: 0.625rem;
	}
	.introduce section{
		text-align: left;
	}
	.video-window{
		margin:2.5rem 0 1.875rem;
	}
	.mint-header{
		background-color: #FFFFFF;
		color: #333333;
	}
</style>
