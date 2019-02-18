// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: 43.78015, lng: -79.40362 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navBar").style.opacity = 0.9;
  } else {
    document.querySelector("#navBar").style.opacity = 1;
  }
});

$("#navBar a, .btn,.btnSchedule").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
