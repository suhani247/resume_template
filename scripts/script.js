window.onload = function() {
    /*var data={
        "name"    : "Suhani Khurana",
        "title"   : "Graduate Analyst",
        "contact" : {
                    "phone" : "9999595628",
                    "email" : "suhani24khurana@gmail.com"
                    }
        };*/
           
            var jsonResult = data;
            console.log(jsonResult);
            
            document.getElementById('usrName').textContent = jsonResult.name;
            document.getElementById('usrTitle').textContent = jsonResult.title;
            document.getElementById('usrPhone').textContent = jsonResult.contact.phone;
            document.getElementById('usrEmail').textContent = jsonResult.contact.email;
       
}