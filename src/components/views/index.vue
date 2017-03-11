<template>
	<div class="toilet">
	  	<mu-card class="card">
			<mu-card-media title="Image Title">
				<img :src="img" />
			</mu-card-media>
			<mu-card-title title="Content Title"/>
			<mu-card-text>
				散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
				调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
			</mu-card-text>
			<mu-card-actions>
				<mu-flat-button label="确定" primary/>
				<mu-flat-button label="删除" secondary/>
			</mu-card-actions>
		</mu-card>
	</div>
</template>

<script>
//图片引入
import img from '../../assets/images/img.jpg'
import myron from '../../assets/images/myron.jpeg'

export default {
	data: function(){
		return {
			img,
			myron
		}
	},
	methods: {

	}
}
</script>

<style scoped>
.toilet{
	margin:12px 15px 80px 15px;
}
.card:first-child{
	margin-top: 65px;
}
</style>
