window.onload = function() {
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200)
        {
            var data = this.responseText;
            var jsonResult = JSON.parse(data);
            console.log(jsonResult);
            
            document.getElementById('usrName').textContent = jsonResult.name;
            document.getElementById('usrTitle').textContent = jsonResult.title;
            document.getElementById('usrPhone').textContent = jsonResult.contact.phone;
            document.getElementById('usrEmail').textContent = jsonResult.contact.email;
        }
    };
    xmlhttp.open('get','http://maamw30505:9001/api/getData',true);
    xmlhttp.send();
}