console.log("1")
var i = 0
var images = []
var time = 2000;

images[0] = 'images/mag1.jpeg';
images[1] = 'images/mag2.jpeg';
images[2] = 'images/mag3.jpeg';
images[3] = 'images/mag4.jpeg';
images[4] = 'images/mag5.jpeg';
images[5] = 'images/mag6.jpeg';
images[6] = 'images/mag7.jpeg';
images[7] = 'images/mag8.jpeg';
images[8] = 'images/mag9.jpeg';
images[9] = 'images/mag10.jpeg';

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;

