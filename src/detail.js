const params = new URLSearchParams(window.location.search);
const userIndex = params.get('user');
alert(userIndex);