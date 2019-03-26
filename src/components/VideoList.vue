<template>
	<div class="video-list">
		<mt-header fixed title='案例精选'></mt-header>
		<div class="list-item" v-for="(item,index) in dataList" 
		:key="index">
			<div>
				<a @click='gotoDetailPage(item.href,item.title,item.introduce)'>
					<img :src="item.src">
				</a>
				<p>
					<span v-for="(subItem,subIndex) in item.label" :key="subItem+'_'+subIndex">
						{{ subItem }}
					</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'videoList',
		data(){
			return {
				dataList:[{
					href:require('@/assets/videos/开篇视频.mp4'),
					label:['广告','宣传','开场'],
					title:'开篇视频',
					src:require('@/assets/images/开篇.jpg'),
					introduce:'金融生态圈以科技光圈的形式出现，又似摄影机镜头，聚焦科技·金融生态圈。金融生态圈以科技光圈的形式出现，又似摄影机镜头，聚焦科技·金融生态圈。'
				},{
					href:require('@/assets/videos/签约仪式-倒计时-启动仪式.mp4'),
					label:['活动','宣传','企业'],
					title:'签约仪式-倒计时-启动仪式',
					src:require('@/assets/images/启动.jpg'),
					introduce:'手掌启动仪式，浩瀚宇宙星空穿梭，营造未来感、科技感、神秘感。顺应“一带一路”建设，构建人类命运共同体的伟大实践。'
				},{
					href:require('@/assets/videos/授牌颁奖视频.mp4'),
					label:['颁奖','宣传','企业'],
					title:'授牌颁奖视频',
					src:require('@/assets/images/授牌.jpg'),
					introduce:'浩瀚宇宙星空时光隧道穿梭，汇聚巨大能量球，授牌企业发光LOGO进入屏幕'
				},{
					href:require('@/assets/videos/招商银行-重庆_主画面-2.mp4'),
					label:['活动','宣传','企业'],
					title:'招商银行-重庆_主画面-2',
					src:require('@/assets/images/主kv.jpg'),
					introduce:'内容承载结合主KTV使主题与风景融合，水墨晕染出山水景致，情景交融。'
				}]
			}
		},
		methods:{
			gotoDetailPage(href,title,introduce){
				this.$router.push({
					// path: `${this.$route.matched[0].path}/videoDetail`,
					name:'videoDetail',
					params:{
						href:href,
						title:title,
						introduce:introduce
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.video-list{
		margin-top: 3.75rem;
	}
	img{
		width: 100%;
		/* height: 12.5rem; */
		border-radius: .5rem;
	}
	p{
		margin: .5rem 0 0.625rem;
		text-align: left;
	}
	p span{
		padding: 0 0.625rem;
		font-size: 0.75rem;
	}
	span+span{
		border-left: 1px solid #333333;
	}
	.list-item{
		padding: 0 1.25rem;
	}
</style>
