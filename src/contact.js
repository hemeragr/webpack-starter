export const renderContact = function(name, surname, email, tel, index) {
    return `
        <a class="contact" href="/detail.html?user=${index}">
            <p> ${name} ${surname}</p>
            <a href="mailto:${email}"> ${email} </a>
            <a href="tel:${tel}"> ${tel} </a>
        </a>
    `;
};

export const renderContacts = function(users) {
    document.querySelector('.contact-list').innerHTML = '';
    users.forEach(function(user, index) {
        document.querySelector('.contact-list').innerHTML = document.querySelector('.contact-list').innerHTML + renderContact(
					user.name, user.surname, user.email, user.tel, index
				);
    });
}