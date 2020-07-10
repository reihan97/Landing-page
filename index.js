// show the headers when mouseover on the icon

const linkedin = document.getElementById("linkedin"),
        codepen = document.getElementById("codepen"),
        github = document.getElementById("github"),
        githubH = document.getElementById("github-h"),
        codepenH = document.getElementById("codepen-h"),
        linkedinH = document.getElementById("linkedin-h");

function openNav() {
    document.getElementById("contact-nav").style.width  = "100%";
    document.getElementById("contact-nav").style.display = "block";
}

function closeNav() {
    document.getElementById("contact-nav").style.width = "0%";
    document.getElementById("contact-nav").style.display = "none";
}



/*linkedin.addEventListener("mouseover", ()=>{
    linkedinH.style.display = "block";
} );

linkedin.addEventListener("mouseout", ()=>{
    linkedinH.style.display = "none";
});

codepen.addEventListener("mouseover", ()=>{
    codepenH.style.display = "block";
});

codepen.addEventListener("mouseout", ()=>{
    codepenH.style.display = "none";
});

github.addEventListener("mouseover", ()=>{
    codepenH.style.display = "block";
});

github.addEventListener("mouseout", ()=>{
    githubH.style.display = "none";
});

*/


