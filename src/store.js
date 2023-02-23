
export const storeContact = function(name, surname, email, tel) {
	// Obtenemos el valor, que puede ser un texto o null
	const listInText = window.localStorage.getItem('users');
	// Inicializamos el array
	let listOfUsers = [];
	// Comprobamos si el valor existe o es null. Si no es null, lo leemmos y parseamos
	if (listInText !== null) {
		listOfUsers = JSON.parse(listInText);
	}
	// Introducimos el nuevo valor en la lista
	listOfUsers.push({ name: name, surname: surname, email: email, tel: tel });
	// Escribimos en memoria transformando en texto
	window.localStorage.setItem('users', JSON.stringify(listOfUsers)); 
};