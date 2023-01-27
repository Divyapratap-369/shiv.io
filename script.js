//Hide All section except the first one
document.querySelectorAll("section").forEach(function(section){
  if(section!==document.querySelector("section")){
    section.style.display="none";
  }
});

//Add Event Listener to the navigation links
document.querySelectorAll("header nav a").forEach(function(link){
  link.addEventListener("click",function(event){
    event.preventDefault();
    var sectionId = this.getAttribute("href").substr(1);
    document.querySelectorAll("section").forEach(function(section){
      if(section.getAttribute("id")===sectionId) {
        section.style.display="block";
      }
      else{
        section.style.display="none";
      }
    });
  });
});
// //Add Event Listeners To the Project links
// document.querySelectorAll("section#projects a").forEach(function(link){
//   link.addEventListener("click",function(event){
//     event.preventDefault();
//     alert("This feature has not been implemented yet");
//   });
// });
setTimeout(() => {
  document.querySelector('.blur-overlay').style.opacity = '0';
}, 2000);

const blurOverlay = document.querySelector('.blur-overlay');
blurOverlay.addEventListener("transitionend", function(){
  blurOverlay.style.display = "none";
});
