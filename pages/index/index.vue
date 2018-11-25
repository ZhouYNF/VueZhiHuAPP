<template>
	<view class="content">
		
		<view class="uni-list">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"  >
				<swiper-item v-for="(item,index) in news" :key="index" @tap="openinfo" :data-newsid="item.id">
					<view class="swiper-item">
						<image :src="item.images"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" 
			:key="index" @tap="openinfo" :data-newsid="item.id">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.images"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>	
</template>

<script>
	export default {
		data() {
			return {
				news : []
			};
		},
		onLoad:function(){
			uni.showLoading({
				title: '加载中。。',
				mask: false
			});
			uni.request({
				url: 'https://news-at.zhihu.com/api/4/news/latest',
				method: 'GET',
				data: {},
				success: res => {
					this.news = res.data.stories; 
					uni.showLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods:{
			openinfo(e){
				var newsid = e.currentTarget.dataset.newsid;
				uni.navigateTo({
					url: '../info/info?newsid='+newsid
				});
			}
		},	
	}
</script>



<style>
	.uni-media-list-body{height: auto;}
	.uni-media-list-text-top{line-height: 1.6em;}
</style>