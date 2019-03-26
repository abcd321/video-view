<template>
	<div class="category-content">
		<mt-header title="分类" fixed></mt-header>
		<div class="swiper-content">
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="(item,index) in imgList" :key="index">
				  <img :src="item.src" alt="">
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="category-list">
			<p>作品分类</p>
			<ul id="category-list-ul">
				<li v-for="(item,index) in imgList" :key="item.label+'_'+index">
					<img :src="item.src" alt="">
					<span>{{ item.label }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'category',
		data(){
			return {
				imgList:[{
					label:'开篇',
					src:require('@/assets/images/c1.jpg')
				},{
					label:'启动',
					src:require('@/assets/images/c2.jpg')
				},{
					label:'授牌',
					src:require('@/assets/images/c3.jpg')
				},{
					label:'主kv',
					src:require('@/assets/images/c4.jpg')
				}]
			}
		}
	}
</script>

<style>
	.category-content{
		margin-top: 3.75rem;
		padding: 0 1.25rem;
	}
	.mint-swipe-items-wrap{
		border-radius: 0.625rem;
	}
	.swiper-content{
		height: 12.5rem;
	}
	.swiper-content img{
		width: 100%;
		height: 12.5rem;
	}
	.category-list p{
		text-align: left;
	}
	.mint-swipe-indicators {
		position: absolute;
		bottom: 1.5rem;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	} 
	.mint-swipe-indicator{
		border: 1px solid #FFFFFF;
		opacity: 1;
	}
	.mint-swipe-indicator.is-active{
		opacity: 1;
	}
	#category-list-ul{
		padding:0;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
	}
	#category-list-ul li{
		list-style: none;
		width: 48%;
		position: relative;
		margin-bottom: 0.625rem;
	}
	#category-list-ul img{
		width: 98%;
		border-radius: 0.3125rem;
	}
	#category-list-ul span{
		position: absolute;
		right: 1.25rem;
		bottom: 0.625rem;
		font-size: 0.75rem;
		color: #FFFFFF;
		display: inline-block;
		width: 3.125rem;
		height: 1.625rem;
		background-color: #000;
		line-height: 1.625rem;
		opacity:0.6;
		border-radius:0.625rem;
	}
</style>
