//edie home page

// ********** fixed navbar ************

const navbar = document.getElementById("nav");


window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  
});


// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll("#scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    /*const containerHeight = linksContainer.getBoundingClientRect().height;*/
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    //if navbar is not fixed
    if (!fixedNav) {
      position = position - navHeight;
    }
    /*if (navHeight > 82) {
      position = position + containerHeight;
    }
*/
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    /*linksContainer.style.height = 0;*/
  });
});
// calculate heights