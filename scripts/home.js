
var userAccount = {
            username: String,
            tasks:Array
        }
var tasks = {
    label: String,
    hour: Number,
    duration: Number
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
            var task = new Object(tasks);
            var user = new Object(userAccount);
            var id = JSON.parse(localStorage.getItem('id'));

            let str = localStorage.getItem(user.username);
            var obj = JSON.parse(str);

            task.label = label;
            task.hour = hour;
            task.duration = duration;

            

            localStorage.removeItem(userAccount.username);
            localStorage.setItem(userAccount.username, userAccount);

        });
   }); 

        
    