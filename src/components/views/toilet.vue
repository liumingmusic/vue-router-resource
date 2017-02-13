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
				<mu-raised-button label="确定" primary/>
				<mu-raised-button label="删除" secondary/>
			</mu-card-actions>
		</mu-card>
		<mu-card>
			<mu-card-media title="Image Title">
				<img :src="img" />
			</mu-card-media>
			<mu-card-title title="Content Title"/>
			<mu-card-text>
				散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
				调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
			</mu-card-text>
			<mu-card-actions>
				<mu-raised-button label="确定" primary/>
				<mu-raised-button label="删除" secondary/>
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
.card{
	margin-bottom: 10px;
}
.mu-card-title-container {
    padding: 10px;
    position: relative;
}
.mu-card-text {
    padding: 0px 8px;
    font-size: 14px;
    color: rgba(0,0,0,.87);
}
.mu-card-title-container .mu-card-title {
    font-size: 18px;
    color: rgba(0,0,0,.87);
    line-height: 36px;
}
.mu-card-media-title .mu-card-title {
    font-size: 16px;
    color: hsla(0,0%,100%,.87);
    line-height: 36px;
}
.mu-card-media-title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4px;
    background-color: red;
}
</style>
