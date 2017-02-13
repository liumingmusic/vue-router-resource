<template>
	<div class="mu-appbar">
	  	<mu-appbar :title="headerTitle">
		</mu-appbar>
	</div>
</template>

<script>

export default {
	props: ['headerTitle'],
	data: function(){
		return {

		}
	},
	methods: {

	}
}
</script>

<style scoped>
.mu-appbar{
	text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
}
</style>
