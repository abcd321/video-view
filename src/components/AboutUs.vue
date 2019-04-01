<template>
	<div class="about-content">
		<div class="bg-content">
			<img src="../assets/images/contastus.jpg" style="width: 100%;height: ;">
		</div>
		<div class="about-contact">
			<div class="customer-service">
				<p class="contast-category">客户服务</p>
				<p class="contast-item">咨询电话：63538483</p>
				<span class="contast-btn">在线联系</span>
			</div>
			<div class="business-cooperation">
				<p class="contast-category">商务合作</p>
				<p class="contast-item">联系电话：63538483</p>
				<span class="contast-btn">在线联系</span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.about-contact{
		margin: 1.25rem 0.625rem;
		background-color: #d7dee8;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 12.5rem;
	}
	.about-contact div{
		display: inline-block;
		width:10.375rem;
		height: 10.375rem;
		background-color: #FFFFFF;
		text-align: center;
		/* line-height: 9.375rem; */
	}
	.contast-item{
		font-size: 0.75rem;
		color: #000000;
	}
	.contast-category{
		font-size: 18px;
		font-weight: 800;
	}
	.contast-btn{
		display: inline-block;
		font-size: 0.75rem;
		color: #FFFFFF;
		background-color: #333333;
		padding: 0.3125rem 0.625rem;
		margin-top: 0.625rem;
	}
</style>
