 var ID = {
            person: {
                UserId: Array,
                username: Array
            }
        };


        var user_account = {
            username: String,
            tasks: Array
        }

        var user_info = {
            idAccount: Number,
            email: String,
            password: String,
            username: String,
            phone: Number
}
        
function regex1() {
    pass = $('#password').val()
    email = $('#email').val();
    phone = $('#phone').val();
    patt = /\d/g;
    patt1 = /[A-Z]/g
    pattoff = /\s/g;

    mailpatt = /\S+@\S+\.\S+/;
    phonepatt = /[^0-9]/g;
    console.log(mailpatt.test(email)); console.log(!phonepatt.test(phone));

    result1 = ((patt.test(pass) && !pattoff.test(pass)) && patt1.test(pass));
    result2 = mailpatt.test(email);
    result3 = phonepatt.test(phone);

    if (!result2) {
        $('#email').css('border', 'solid 2px rgb(189, 67, 87)');
        $('#err_email')
                         .text('incorrect pattern')
                         .css({
                             'color': 'rgb(189, 67, 87)',
                             'font-size' : '13px'
                         });
    }
    if (result3) {
        $('#phone').css('border', 'solid 2px rgb(189, 67, 87)');
        $('#err_phone')
                         .text('must have 9 digits')
                         .css({
                             'color': 'rgb(189, 67, 87)',
                             'font-size' : '13px'
                         });
    }
    if (!result1) {
         $('#err_pass')
                         .text('must contain numbers and capitals')
                         .css({
                             'color': 'rgb(189, 67, 87)',
                             'font-size' : '13px'
                         });
                     $('#password').css('border', 'solid 2px rgb(189, 67, 87)');
    }
    
    //console.log(result); console.log(patt.test(pass)); console.log(!pattoff.test(pass)); console.log(patt1.test(pass))
    return result1 && result2 && !result3; 
}


        $(document).ready(() => {

                if (!localStorage.getItem('id')) {
                    localStorage.setItem('id', JSON.stringify(ID));
                    let x = JSON.parse(localStorage.getItem('id'));
                    x.person.UserId = [];
                    x.person.username = [];
                    localStorage.removeItem('id');
                    localStorage.setItem('id', JSON.stringify(x));
            }
            
        });
            
             $('#submit').click(() => {
                var id = new Object();
                var account = new Object(user_account);
                var users = new Object(user_info);
                id = JSON.parse(localStorage.getItem('id'));
                email = $('#email').val();
                phone = $('#phone').val();
                password = $('#password').val();
                
                 
                 if (regex1()) {
                     alert('ok')
                username = email.substr(0, email.indexOf('@'));
                users.email = email;
                users.password = password;
                users.phone = phone;
                account.username = username;
                account.tasks = [];
                users.idAccount = id.person.UserId.length + 1;
                users.username = username;

                localStorage.removeItem('id');
                id.person.UserId.push(users.idAccount);
                id.person.username.push(users.username);
                localStorage.setItem('id', JSON.stringify(id));
                localStorage.setItem(account.username, JSON.stringify(account));
                localStorage.setItem(users.idAccount, JSON.stringify(users));
                window.location.href = 'index.html';
                 }
                

                 })
                