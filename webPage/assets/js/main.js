var block = document.querySelectorAll(".blockOverlay");
var icons = document.querySelectorAll(".icons");
var iconBox = document.querySelectorAll(".icon-con");



for(var i=0; i < iconBox.length;i++){
  iconBox[i].children[0].style.visibility="hidden";
  iconBox[i].addEventListener("mouseover",function(){
  this.parentElement.style.background="black"
  this.children[0].style.visibility="inherit";
  this.children[1].style.visibility="hidden";
  this.children[2].style.color="white";
  })
}
for(var i=0; i < iconBox.length;i++){
  iconBox[i].addEventListener("mouseleave",function(){
  this.style.background="#fff0"
  this.parentElement.style.background="#fff0"
   this.children[0].style.visibility="hidden";
   this.children[1].style.visibility="inherit";
   this.children[2].style.color="black";
  })
}

