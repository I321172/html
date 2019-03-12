function get(url,callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && ) {
            if (xhr.status == 200){
                callback(xhr.responseText);
            }else{
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send();
}