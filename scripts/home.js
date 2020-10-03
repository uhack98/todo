


$(document).ready(function () {
    //$('#createForm').hide();
    $('#create').click(() => {
        $('#createForm').show();
    });
    
    $('#createBtn').click(() => {
            var label = $('#label').val(),
                hour = $('#hour').val(),
                duration = $('#duration').val();
            var user = new Object();
            var current = JSON.parse(localStorage.getItem('current'));

            let str = localStorage.getItem(current.name);
                user = JSON.parse(str);
            
            user.tasks.label = label;
            user.tasks.hour = hour;
            user.tasks.duration = duration;
            console.log(user);
            localStorage.removeItem(user.username);
        localStorage.setItem(user.username, JSON.stringify(user));
        $('#createForm').hide();
        //$('#displayZone').show();
        

        });

    let current = JSON.parse(localStorage.getItem('current'));
    pass = current.name;
    $('#personal').before('   '+pass);
   
}); 

        
    