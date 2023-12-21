function register() {
   
    var username = document.getElementById('typeUsernameX-2').value;
    var password = document.getElementById('typePasswordX-2').value;

   
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return;
    }


    var userDetails = {
        username: username,
        password: password
    };


    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    alert('Registration successful!');
}
