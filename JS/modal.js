document.addEventListener("DOMContentLoaded", function() {

    let modal = document.getElementById("myModal");
   
    let modalImg = document.getElementById("img01");
   
     let images = document.querySelectorAll(".photo-gallery .pic img");
     images.forEach(function(img) {
         img.onclick = function() {
             modal.style.display = "block";
             modalImg.src = this.src;
         }
     });
   
     let span = document.getElementsByClassName("close")[0];
   
     span.onclick = function() {
         modal.style.display = "none";
     }
   });