
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

setTimeout(() => {
  document.querySelector('.blur-overlay').style.opacity = '0';
}, 1000);

const blurOverlay = document.querySelector('.blur-overlay');
blurOverlay.addEventListener("transitionend", function(){
  blurOverlay.style.display = "none";
});


const toggle = document.getElementById('theme-toggle');
const elements = document.querySelectorAll('header .nav-bar, .fa-brands');
const image = document.getElementById('d-img');

toggle.addEventListener('click', function() {
  document.body.classList.toggle('light');
  toggle.classList.toggle('spread');
  toggle.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    image.src='images/coloured-img.jpg'
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = 'black';
    elements.forEach(element => {
      // element.style.backgroundColor = '#333';
      element.addEventListener('mouseenter', function() {
        this.style.color = '#EB455F';
      });
      element.addEventListener('mouseleave', function() {
        this.style.color = 'black';
      });
      element.style.color = 'black';
    });
  } else {
    image.src='images/dark-img.jpg';
    document.body.style.backgroundColor = 'black';
    document.body.style.color = '#fff';
    elements.forEach(element => {
      // element.style.backgroundColor = '#fff';
      element.addEventListener('mouseenter', function() {
        this.style.color = '#EB455F';
      });
      element.addEventListener('mouseleave', function() {
        this.style.color = '#fff';
      });
      element.style.color = '#fff';
    });
  }
});

