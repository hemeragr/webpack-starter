export const renderContacts = function(users) {
    document.querySelector('.contact-list').innerHTML = '';
    users.forEach(function(user) {
        document.querySelector('.contact-list').innerHTML = document.querySelector('.contact-list').innerHTML + renderContact(user.name, user.surname, user.email, user.tel);
    });
};
