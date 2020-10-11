


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
        let index = 0; let y = x.length  ;// x.push(y);
        var pass_i=0, usr_i=0 
             do {

            var objb = JSON.parse(localStorage.getItem(x[index]));
            //console.log((username === objb.username || username === objb.phone || username === objb.email))
            fst = !((username === objb.username || username === objb.phone || username === objb.email)
                && (pass === objb.password));
            if ((pass === objb.password)) {
                pass_i ++; console.log(pass_i)
            }
            if ((username === objb.username || username === objb.phone || username === objb.email)) {
                
                usr_i ++; console.log(usr_i)    
            } //alert(!(pass === objb.password))
            
            //console.log(index + 1); console.log(condition)
            index++
            //count++; 
            scd = (index < y);
            condition = fst && scd; console.log(fst);
            //console.log(index); console.log(y); console.log(condition);
           
            }
             while(condition)
        
        
        if ((!fst)) {
            console.log(`y = ${y}`)
            loadData(index);
        }
        else {
            if (usr_i == 0) {
                $('#user').css('border', 'red 2px solid');
                $('#pass').css('border', 'red 2px solid');
                //$('#user').attr('value', 'incorrect').css('color', 'red');
            }
            if(pass_i == 0) {
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


