


$(document).ready(function () {
    
});
 
$(document).ready(function () {
    $('#submit').click(function () { 
        pass = $('#pass').val()
        username = $('#user').val(); 
        var obj = new Object();
        obj = JSON.parse(localStorage.getItem('id'))
        var x = obj.person.UserId
        var count = 0; console.log(x);
        let index = 0; let y = x.pop(); x.push(y);
        var pass_i=0, usr_i=0
        do {

            let objb = JSON.parse(localStorage.getItem(x[index]))
            //console.log((username === objb.username || username === objb.phone || username === objb.email))
            fst = !((username === objb.username || username === objb.phone || username === objb.email)
                && (pass === objb.password));
            if (pass === objb.password) {
                pass_i = 1;
            }
            if (username === objb.username || username === objb.phone || username === objb.email) {
                usr_i = 1;
            }
            scd = (index < y-1);
            condition = fst && scd
            
            //console.log(index + 1); console.log(condition)
            
            index++
            count++; 
           
        }
         while(condition)
        
        if (count < y) {
            window.location.href = 'home.html'
            
        }
        else {
            if (usr_i == 1) {
                $('#user').css('border', 'red 1px');
            }
            if (usr_i == 1) {
                $('#pass').css('border', 'red 1px');
            }
            
            //alert(`ok${count}`);
        }

    });
});
