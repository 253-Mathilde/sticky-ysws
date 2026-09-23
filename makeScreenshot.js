function postCanvasToURL(data) 
{
    data = data.replace('data:image/png;base64,', '');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "post.php", true);
    var boundary = 'this-is-a-string';
    xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
    request_str = '--' + boundary + '\r\n' + 'Content-Disposition: form-data; name="formelement"; filename="image.png"' + '\r\n' +
                   'Content-Type: image/png' + '\r\n\r\n' + atob(data) + '\r\n' + '--' + boundary + '--';
    var bytes = [];
    for (var i in request_str)
    {
        bytes.push(request_str[i].charCodeAt(0) & 0xff);
    }
    xhr.send(new Uint8Array(bytes).buffer);
}
$(window).ready(function()
{
    var options = {onrendered : function(canvas) { postCanvasToURL(canvas.toDataURL()); }};
    var canvasRecord = $('body').html2canvas(options);
});