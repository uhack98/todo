


 var CURRENT = {
    password: String,
    name: String,
    id: Number
}

function loadData(index) {
            if (!localStorage.getItem('current')) {
                 let cur = new Object(CURRENT)
                localStorage.setItem('current', JSON.stringify(cur));
            }
            let x = JSON.parse(localStorage.getItem('current'));
            let current = JSON.parse(localStorage.getItem(index)) 
            x.password = current.password;
                 x.name = current.username; 
                 x.id = index;
                localStorage.removeItem('current');
                localStorage.setItem('current', JSON.stringify(x))

            window.location.href = 'home.html';
           }
            
 
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

            var objb = JSON.parse(localStorage.getItem(x[index]));
            //console.log((username === objb.username || username === objb.phone || username === objb.email))
            fst = !((username === objb.username || username === objb.phone || username === objb.email)
                && (pass === objb.password));
            if (!(pass === objb.password)) {
                pass_i ++; console.log(pass_i)
            }
            if (!(username === objb.username || username === objb.phone || username === objb.email)) {
                
                usr_i ++; console.log(usr_i)    
            } //alert(!(pass === objb.password))
            scd = (index < y-1);
            condition = fst && scd;
            console.log(index); console.log(condition);
            //console.log(index + 1); console.log(condition)
            
            index++
            count++; 
           
        }
         while(condition)
        
        if ((count < y) || count==1) {
            alert('ok')
            loadData(index);
        }
        else {
            if (usr_i > y-1) {
                $('#user').css('border', 'red 2px solid');
                $('#pass').css('border', 'red 2px solid');
                //$('#user').attr('value', 'incorrect').css('color', 'red');
            }
            if((pass_i > y-1)&&!(usr_i > y-1)) {
                $('#pass').css('border', 'red 2px solid');
            }
            else {
                if ((pass_i > y - 1) && (usr_i > y - 1)) {
                    //$('#user').css('border', '');
                    //$('#').attr('value', 'incorrect').css('color', 'red');  
                }
            }
            
            //alert(`ok${count}`);
        }

    });

});


