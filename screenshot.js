
/*function screenShot(){
    // if you are using a different 'id' in the div, make sure you replace it here.
    var element = document.getElementById("wrapper");
    html2canvas(element).then(function(canvas) {
        canvas.toBlob(function(blob) {
            window.saveAs(blob, "Saved Quote.png");
        });
    });
};


html2canvas(document.getElementsByClassName("image-div")[0], {
    useCORS: true,
  }).then(function (canvas) {
    var imageURL = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    a.href = imageURL;
    a.download = imageURL;
    a.click();
  });
 */
  function screenShot(){
   document.getElementById("screenShot").addEventListener("click", function() {
	html2canvas(document.getElementById("html-content-holder")).then(function (canvas) {			var anchorTag = document.createElement("a");
			document.body.appendChild(anchorTag);
			document.getElementById("previewImg").appendChild(canvas);
			anchorTag.download = "filename.jpg";
			anchorTag.href = canvas.toDataURL();
			anchorTag.target = '_blank';
			anchorTag.click();
		});
 });
}