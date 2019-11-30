// // console.log("here")
// // var imgs = document.querySelectorAll("img");
// // var msg = "Hover over an image below."
// // for (let i = 0; i < imgs.length;i++){
// // 	imgs[i].onmouseover = function() {
// // 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// // 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// // 	 }

// // 	 imgs[i].onfocus = function() {
// // 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// // 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// // 	 }

// // 	 imgs[i].onmouseleave = function() {
// // 	 	document.querySelector('#image').style.backgroundImage="url('')";
// // 	 	document.querySelector('#image').innerHTML= msg;
// // 	 }

// // 	 imgs[i].onblur = function() {
// // 	 	document.querySelector('#image').style.backgroundImage="url('')";
// // 	 	document.querySelector('#image').innerHTML= msg;
// // 	 }
// // }

$(document).ready(function(){
	var images = $("img")
	var msg = "Hover over an image below."
	
	for (let i = 0; i < images.length;i++){
		$(images[i]).mouseover(function() {
	
			$("#image").css("background-image", "url('"+images[i].src+"')");
			$("#image").html(images[i].alt);
		})
		$(images[i]).focus(function() {
	
			$("#image").css("background-image", "url('"+images[i].src+"')");
			$("#image").html(images[i].alt);
		})
		$(images[i]).mouseleave(function() {
	
			$("#image").css("background-image", "url('')");
			$("#image").html(msg);
		})
		$(images[i]).blur(function() {
	
			$("#image").css("background-image", "url('')");
			$("#image").html(msg);
		})
	}
	})


