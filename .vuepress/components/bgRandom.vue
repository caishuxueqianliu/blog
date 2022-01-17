<template>

</template>

<script>
	export default {
		data() {
			return {
				imgArr: [
				    "/img/1.jpg",
				      "/img/2.jpg",
				        "/img/3.jpg",
				          "/img/4.jpg"
				  
				]
			}
		},
		mounted() {
			// this.hanlerRandomBg();
			// this.setElement();
		},
		computed:{
			imgUrl(){
					const index = parseInt(Math.random() * (this.imgArr.length));
					const currentImage = this.imgArr[index];
				return currentImage
			}
		},
		methods: {
			hanlerRandomBg() {
		//	setInterval(()=>{
			if(this.$page.path == "/"){
					const index = parseInt(Math.random() * (this.imgArr.length));
					const currentImage = this.imgArr[index];
					document.getElementsByClassName("hero")[0].style.background = "url("+currentImage+") no-repeat";
				}
			//	},10000)
				
			},
			setElement() {
				let paramA = document.createElement("a");
				paramA.href = "#homeBlog";
				paramA.className = "home-more";
				let paramDiv = document.createElement("div");
				paramDiv.id = "homeBlog";
				document.getElementsByClassName("hero")[0].appendChild(paramDiv);
				document.getElementsByClassName("hero")[0].getElementsByTagName("div")[0].appendChild(paramA);
				
			}
		},
	}
</script>
<style scoped>

</style>