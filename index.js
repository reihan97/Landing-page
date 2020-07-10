// show the headers when mouseover on the icon

const   linkedin = document.getElementById("linkedin");
const   codepen = document.getElementById("codepen");
const   github = document.getElementById("github");
const   githubH = document.getElementById("github-h");
const   codepenH = document.getElementById("codepen-h");
const   linkedinH = document.getElementById("linkedin-h");

function openNav() {
    document.getElementById("contact-nav").style.width  = "100%";
    document.getElementById("contact-nav").style.display = "block";
}

function closeNav() {
    document.getElementById("contact-nav").style.width = "0%";
    document.getElementById("contact-nav").style.display = "none";
}



linkedin.addEventListener("mouseover", function changeColorHeader() {
    linkedinH.style.color = "yellow";
});

linkedin.addEventListener("mouseout", function changeColorHeader(){
    linkedinH.style.color = "";
});

codepen.addEventListener("mouseover", function changeColorHeader(){
    codepenH.style.color = "yellow";
});

codepen.addEventListener("mouseout", function changeColorHeader(){
    codepenH.style.color = "";
});

github.addEventListener("mouseover", function changeColorHeader(){
    codepenH.style.color = "yellow";
});

github.addEventListener("mouseout", function changeColorHeader(){
    githubH.style.color = "";
});



//headline animation

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

// the end of headline animation 
// projects section- its content

  