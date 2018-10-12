// function ChangePhoto(){
// var photo1 = document.getElementById("image1").src=("Assets/img/image1_2.jpg");
// var photo2 = document.getElementById("image2").src=("Assets/img/image2_2.jpg");
// var photo3 = document.getElementById("image3").src=("Assets/img/image3_2.jpg");
// var photo4 = document.getElementById("image4").src=("Assets/img/image4_2.jpg");
// var photo5 = document.getElementById("image5").src=("Assets/img/image5_2.jpg");
// }

// Pour changer image par image
function ChangePhoto(image){
  image.src = 'Assets/img/' + image.id + '_2.jpg';
}
