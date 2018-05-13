var block = document.querySelectorAll(".blockOverlay");
var icons = document.querySelectorAll(".icons");

for(var i = 0;i < block.length; i++){
  block[i].style.background="rgba(0, 0, 0, 0)"
}

for(var i = 0; i < block.length; i++){
  block[i].children[0].style.display="none"
	block[i].addEventListener("mouseover", function(e){
    if(this.style.background==="rgba(0, 0, 0, 0)"){
      this.style.background="black"
      this.children[0].style.display="block";
      this.children[1].style.display="none";
      this.children[2].style.color="white";
      this.children[2].style.marginTop="30px";

    }
  })
  block[i].addEventListener("mouseleave", function(e){
    if(this.style.background==="black"){
      this.style.background="rgba(0, 0, 0, 0)";
      this.children[0].style.display="none";
      this.children[1].style.display="block";
      this.children[2].style.color="black";
      this.children[2].style.marginTop="0px";
    }
  })
}