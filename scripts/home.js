


 var task ={
            label: '',
            hour: 0,
            duration: 0
        }

$(document).ready(function () {

//display
    function display() {
        var current = JSON.parse(localStorage.getItem('current')),
            user = JSON.parse(localStorage.getItem(current.name));
            console.log(user.tasks);
            for (let index = 0; index < user.tasks.length; index++) {
                let task = user.tasks[index];

                
                $('.tr').after(`<tr><td>${task.label}</td><td>${task.hour}H</td>
                <td>${task.duration}H</td><td><button>uptate</button></td>
                <td><button>delete</button></td></tr>`);
                
                $('#create').css('disabled', 'true');
                alert($('td button'))
                $('td button').addClass('btn btn-info')
                
                
            }
    }
    display();
    
    $('#display').click(() => {
            $('ul li.active').removeClass(' active');
            $('#display').addClass(' active')        
            $('#createForm').hide();
            $('#deletezone').hide();   
            $('#displayblock').show();
        
        });
    
    //end of display

//create  

    $('#create').click(() => {
    $('ul li.active').removeClass('active');
    $('#create').addClass(' active')
    $('#displayblock').hide()
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

    $('#label').attr('value', '');    
    $('#hour').attr('value', '');
    $('#duration').attr('value', '');

    console.log(user.tasks);
    user.tasks.push(task_i);
    console.log(user);
    localStorage.removeItem(user.username);
    localStorage.setItem(user.username, JSON.stringify(user));
    $('.tr').after(`<tr><td>${label}</td><td>${hour}H</td><td>${duration}H</td></tr>`);
    $('#createForm').hide();
    $('#displayblock').show();

});


let current_ = JSON.parse(localStorage.getItem('current'));
pass = current_.name;
$('#personal').before(`   ${pass}`);
    console.log('enter')
    

    if ($('#deletezone').css('display', 'block')) {
        
    }

}); 

//end create
//delete zone

$('#delete').click(function () { 
     $('#create').css('disabled', 'true');
    alert($('td button'))
    $('td button').addClass('btn btn-info')
    $('ul li.active').removeClass(' active');
    $('#delete').addClass(' active')
    $('#createForm').hide();
    $('#displayblock').show();
    $('#deletezone').show();

});
        
        $('#delete').click(() => {
            
        });





        
    