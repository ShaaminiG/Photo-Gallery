function upDate(previewPic) {
  console.log("upDate triggered:", previewPic.alt);

  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("unDo triggered");

  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}

// NEW: runs on page load, adds tabindex to each image so you can tab to them
function addTabFocus() {
  console.log("addTabFocus triggered (onload)");

  var previews = document.querySelectorAll(".preview");

  for (var i = 0; i < previews.length; i++) {
    previews[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image", i, previews[i].alt);
  }
}
