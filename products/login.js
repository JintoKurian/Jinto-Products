function login() {
  
    var username = document.getElementById('typeUsernameX-2').value;
    var password = document.getElementById('typePasswordX-2').value;

    var storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (storedUserDetails) {
        if (username === storedUserDetails.username && password === storedUserDetails.password) {
            alert('Login successful!');
            window.location.href = 'home.html'; 
        } else {
            alert('Invalid username or password');
        }
    } else {
        alert('No user registered. Please register first.');
    }
}
