


$(document).ready(function () {
    
});
 
$(document).ready(function () {
    $('#submit').click(function () { 
        pass = document.getElementById('pass').value;
        username = document.getElementById('user').value;
        let logger = localStorage.getItem('id');
        var obj = JSON.parse(logger).person.UserId
        var count = 0, x;
        alert(obj)
        let index = 0;
        do {
            alert('alo')
            index++
            count++;
           
        }
         while (!((username == objb.username | username == objb.phone | username == objb.email)
                                & (pass == objb.password) & (index <= obj.lenght))
                )
        
        if (count < obj.lenght + 1) {
            alert('ok')
            
        }
        else {
            alert('not fount')
        }

    });
});
