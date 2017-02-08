<template>
	<div class="app">
		<!-- 头部 -->
		<TopHeader></TopHeader>
		<!-- 路由视图页面 -->
		<router-view></router-view>
		<!-- nav tabs -->
		<mu-paper class="mu-paper-bottom">
			<mu-bottom-nav :value="bottomNav" shift @change="bottomNavChange">
				<mu-bottom-nav-item value="movies" title="厕所" icon="ondemand_video">
					<router-link to="/toilet" class="display-block"></router-link>
				</mu-bottom-nav-item>
				<mu-bottom-nav-item value="music" title="阅读" icon="music_note">
					<router-link to="/read" class="display-block"></router-link>
				</mu-bottom-nav-item>
				<mu-bottom-nav-item value="books" title="天气" icon="books">
					<router-link to="/weather" class="display-block"></router-link>
				</mu-bottom-nav-item>
				<mu-bottom-nav-item value="pictures" title="设置" icon="photo">
					<router-link to="/setting" class="display-block"></router-link>
				</mu-bottom-nav-item>
			</mu-bottom-nav>
		</mu-paper>
	</div>
</template>

<script>

import TopHeader from './components/topHeader'

export default {
	data: function(){
		return {
      		bottomNav: 'movies'
		}
	},
	methods: {
		bottomNavChange (val) {
      		this.bottomNav = val
    	}
	},
	components: { 
		TopHeader
	}
}
</script>

<style lang='less' scoped>
.mu-paper-bottom{
	position: fixed;
    width: 100%;
    bottom: 0;
}
.display-block{
	display: block;
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>
