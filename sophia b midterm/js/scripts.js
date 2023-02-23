const links = document.querySelectorAll("nav .nav-item > a.nav-link:not(.dropdown-toggle), a.dropdown-item, .special-link");

 links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = e.target.getAttribute("href");

    links.forEach(link => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
        // Update the URL using pushState
     //   history.pushState({}, "", href);
      
    fetch(href)
      .then(response => response.text())
      .then(data => {
        document.querySelector("#content").innerHTML = data;
      });

   
      
  });
}); 
    
window.onpopstate = function (e) { 
	window.history.forward(1); 
if (performance.navigation.type == 1) {
   // console.info( "This page is reloaded" );
      window.location.href = "index.html";
  } else {
    console.info( "This page is not reloaded");
  }  

}
 
