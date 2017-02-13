<template>
	<div class="app">
		<!-- 头部 -->
		<TopHeader :header-title="headerTitle"></TopHeader>
		<!-- 路由视图页面 -->
		<router-view></router-view>
		<!-- nav tabs -->
		<mu-paper class="mu-paper-bottom">
			<mu-bottom-nav :value="bottomNav" @change="bottomNavChange">
				<mu-bottom-nav-item value="toilet" title="厕所" icon="ondemand_video">
					<router-link to="/toilet" class="display-block"></router-link>
				</mu-bottom-nav-item>
				<mu-bottom-nav-item value="read" title="阅读" icon="music_note">
					<router-link to="/read" class="display-block"></router-link>
				</mu-bottom-nav-item>
				<mu-bottom-nav-item value="weather" title="天气" icon="books">
					<router-link to="/weather" class="display-block"></router-link>
				</mu-bottom-nav-item>
				<mu-bottom-nav-item value="setting" title="设置" icon="photo">
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
      		bottomNav: 'toilet',
      		headerTitle: "厕所"
		}
	},
	methods: {
		bottomNavChange (val) {
			var $this = this;
			switch(val){
				case "toilet": 
					$this.headerTitle = "厕所";
					break;
				case "read": 
					$this.headerTitle = "阅读";
					break;
				case "weather": 
					$this.headerTitle = "天气";
					break;
				case "setting": 
					$this.headerTitle = "设置";
					break;
			}
      		$this.bottomNav = val
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
