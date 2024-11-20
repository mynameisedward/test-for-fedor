const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.login === login && u.password === password);
            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                window.location.href = '/account'; // Редирект на страницу аккаунта
            } else {
                setError('Неверный логин или пароль');
            }
        }
    )
}
;