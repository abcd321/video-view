<template>
  <div class="home">
		<div class="main-content">
			<router-view></router-view>
		</div>
		<mt-tabbar v-model="selected">
			<mt-tab-item id="tab1">
				<!-- <img slot="icon" src="../assets/images/home.png"> -->
				<router-link to='/video/videoList'>首页</router-link>
			</mt-tab-item>
			<mt-tab-item id="tab2">
				<!-- <img slot="icon" src="../assets/100x100.png"> -->
				<router-link to='/video/category'>分类</router-link>
			</mt-tab-item>
			<mt-tab-item id="tab3">
				<!-- <img slot="icon" src="../assets/100x100.png"> -->
				<router-link to='/video/aboutUs'>关于我们</router-link>
			</mt-tab-item>
		</mt-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoList from '@/components/VideoList.vue'

export default {
  name: 'home',
	data(){
		return {
			selected:'tab1'
		}
	},
	created() {
		
	},
	methods:{
		getDataList(){
			
		}
	}
}
</script>
<style scoped="scoped">
	.mint-tabbar{
		position: fixed !important;
		bottom: 0;
		height: 1.875rem;
	}
	.main-content{
		margin-bottom: 3.75rem;
	}
	.mint-tab-item-label a{
		color: #333333;
		text-decoration: none;
		display: inline-block;
		width: 100%;
		height: 1.875rem;
		line-height: 1.875rem;
	}
	.mint-tab-item {
		padding: 0;
	}
	.mint-tabbar > .mint-tab-item.is-selected  a{
		color: #26a2ff;
	}
</style>
