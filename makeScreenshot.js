function postCanvasToServer(canvas) {
    canvas.toBlob(function(blob) {
        var formData = new FormData();
        formData.append('formelement', blob, 'image.png');
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'post.php', true);
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log('Screenshot erfolgreich gespeichert!');
            } else {
                console.error('Fehler beim Server-Upload.');
            }
        };
        xhr.send(formData);
    }, 'image/png');
}

$(document).ready(function() {
    html2canvas(document.body).then(function(canvas) {
        postCanvasToServer(canvas);
    });
});