import { renderContacts } from "./contact";
import { storeContact } from "./store";

let users = [];
const usersInText = localStorage.getItem('users');
if (usersInText != null) {
    users = JSON.parse(usersInText);
}
renderContacts(users);

const adddButton = document.querySelector('#add');
adddButton.addEventListener('click', function() {
	const name = document.querySelector('#name').value;
	const surname = document.querySelector('#surname').value;
	const email = document.querySelector('#email').value;
	const tel = document.querySelector('#tel').value;

  storeContact(name, surname, email, tel);
	let users = [];
	const usersInText = localStorage.getItem('users');
	if (usersInText != null) {
	    users = JSON.parse(usersInText);
	}
	renderContacts(users);

});