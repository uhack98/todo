 var ID = {
            person: {
                UserId: Array,
                username: Array
            }
        };


        var user_account = {
            username: String,
            tasks: {
                label: '',
                hour: 0,
                duration: 0
            }
        }

        var user_info = {
            idAccount: Number,
            email: String,
            password: String,
            username: String,
            phone: Number
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

                     username = email.substr(0, email.indexOf('@'));
                     users.email = email;
                     users.password = password;
                     users.phone = phone;
                     account.username = username;
                     users.idAccount = id.person.UserId.length + 1;
                     users.username = username;

                     localStorage.removeItem('id');
                     id.person.UserId.push(users.idAccount);
                     id.person.username.push(users.username);
                     localStorage.setItem('id', JSON.stringify(id));
                     localStorage.setItem(account.username, JSON.stringify(account));
                     localStorage.setItem(users.idAccount, JSON.stringify(users));
                     window.location.href = 'index.html';

                 })
