document.addEventListener("DOMContentLoaded", function() {  
  /*global fetch, response*/
fetch("../partials/header.html")
    .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
    navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);     
// Loop through each anchor element
navLinks.forEach((link) => {
  // Check if the href property of the anchor element matches the current page's URL
  if (link.href === location.href) {
    // Add the "active" class to the anchor element
    link.classList.add("active");
  } else {
    // Remove the "active" class from the anchor element
    link.classList.remove("active");
  }
});
    
    
  });  
});      
