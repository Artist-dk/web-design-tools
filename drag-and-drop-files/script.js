function handleDrop(event) {
    event.preventDefault();
    var files = event.dataTransfer.files;
    if (files.length > 0) {
        var file = files[0];
        if (file.type.match('image.*')) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var img = new Image();
                img.src = e.target.result;
                // document.body.appendChild(img);
                
                // Calculate aspect ratio
                var imageObj = new Image();
                imageObj.src = img.src;
                var fileOutput = document.getElementById('fileOutput');
                fileOutput.src = img.src;
                // console.log(fileOutput);
                imageObj.onload = function() {
                    var aspectRatio = imageObj.naturalWidth / imageObj.naturalHeight;
                    console.log("Aspect Ratio:", aspectRatio);
                    document.getElementById("naturalHeight").value = imageObj.naturalHeight
                    document.getElementById("naturalWidth").value = imageObj.naturalWidth

                    console.log(imageObj.naturalWidth)
                    console.log(imageObj.naturalHeight)
                };
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please drop an image file.');
        }
    }
    document.getElementById('dropzone').classList.remove('hover');
}

document.getElementById('dropzone').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = new Image();
        img.src = e.target.result;
        document.body.appendChild(img);
        
        // Calculate aspect ratio
        var imageObj = new Image();
        imageObj.src = img.src;
        imageObj.onload = function() {
            var aspectRatio = imageObj.naturalWidth / imageObj.naturalHeight;
            console.log("Aspect Ratio:", aspectRatio);
            document.innerHTM = imageObj.naturalWidth;
            document.innerHTM =  imageObj.naturalHeight;
        };
    };
    reader.readAsDataURL(file);
});