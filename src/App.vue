<template>
	<div class="app">
		<!-- 头部 -->
		<mu-appbar title="系统管理">
			<mu-icon-button icon='menu' slot="left" @click="drawerToggle(true)"/>
			<mu-icon-menu icon="more_vert" slot="right">
				<mu-menu-item title="个人信息"/>
				<mu-menu-item title="系统信息"/>
				<mu-menu-item title="设置" @click="openBottomSheet"/>
				<mu-menu-item title="退出"/>
		    </mu-icon-menu>
		</mu-appbar>
		<!-- 底部 -->
		<mu-paper class="mu-paper-bottom">
			<mu-bottom-nav :value="bottomNav" shift @change="bottomTabsChange">
				<mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
				<mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
				<mu-bottom-nav-item value="books" title="Books" icon="books"/>
				<mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
			</mu-bottom-nav>
		</mu-paper>
		<!-- bottom-sheet -->
		<mu-bottom-sheet :open="bottomSheet" :overlay="sheetOverlay" @close="closeBottomSheet">
			<mu-list @itemClick="closeBottomSheet">
				<mu-sub-header>请选择一个</mu-sub-header>
				<mu-list-item title="阴阳师"/>
				<mu-list-item title="贪吃蛇大作战"/>
				<mu-list-item title="一划到底"/>
				<mu-list-item title="全民斗地主"/>
			</mu-list>
		</mu-bottom-sheet>
		<!-- drawer -->
		<mu-drawer :open="drawerOpen" :docked="drawerDocked" @close="drawerToggle()">
			<mu-list @itemClick="drawerDocked ? '' : drawerToggle()">
				<mu-list-item title="Menu Item 1"/>
				<mu-list-item title="Menu Item 2"/>
				<mu-list-item title="Menu Item 3"/>
			</mu-list>
		</mu-drawer>
	</div>
</template>

<script>
export default {
	data: function(){
		return {
			bottomNav: 'movies',
      		bottomNavColor: 'movies',
      		bottomSheet: false,
      		sheetOverlay: true,
      		drawerOpen: false,
      		drawerDocked: true
		}
	},
	methods: {
		bottomTabsChange (val) {
		  	this.bottomNav = val
		},
		closeBottomSheet () {
			this.bottomSheet = false
		},
		openBottomSheet () {
			this.bottomSheet = true
		},
		drawerToggle (flag) {
			this.drawerOpen = !this.drawerOpen
			this.drawerDocked = !flag
		}
	}
}
</script>

<style lang='less' scoped>
.mu-paper-bottom{
	position: fixed;
    width: 100%;
    bottom: 0;
}
</style>
