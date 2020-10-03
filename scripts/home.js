


 var task ={
            label: '',
            hour: 0,
            duration: 0
        }

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
            var task_i = new Object(task);
            var current = JSON.parse(localStorage.getItem('current'));

                let str = localStorage.getItem(current.name);
                    user = JSON.parse(str);
                
                task_i.label = label;
                task_i.hour = hour;
                task_i.duration = duration;

                console.log(user.tasks);
                user.tasks.push(task_i);
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

 $('#display').click(function () { 
        var current = JSON.parse(localStorage.getItem('current')),
            user = JSON.parse(localStorage.getItem(current.name));
            console.log(user.tasks);
            for (let index = 0; index < user.tasks.length; index++) {
                let task = user.tasks[index];
                $('.tr').after(`<tr><td>${task.label}</td><td>${task.hour}H</td><td>${task.duration}H</td></tr>`);
                
            }
        
        
 });
     $('#delete').click(function () { 
        var current = JSON.parse(localStorage.getItem('current')),
            user = JSON.parse(localStorage.getItem(current.name));
            console.log(user.tasks);
            for (let index = 0; index < user.tasks.length; index++) {
                let task = user.tasks[index];
                $('.tr').after(`<tr><td>${task.label}</td><td>${task.hour}H</td><td>${task.duration}H</td></tr>`);
                
         }
         
        
        
    });

        
    