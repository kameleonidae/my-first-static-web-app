function displayImages() {
    var files = document.getElementById("fileInput").files;
    var imageContainer = document.getElementById("imageContainer");

    imageContainer.innerHTML = ""; 

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        reader.onload = function(e) {
            var imageElement = document.createElement("img");
            imageElement.src = e.target.result;
            imageElement.width = 500; 
            imageElement.height = 300; 
            imageContainer.appendChild(imageElement);
        }

        reader.readAsDataURL(file);
    }
}