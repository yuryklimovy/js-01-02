var login = [];
var checkLogin = false;

for (var i = 0; i < 5; i++) {
  login[i] = prompt('Введите список имен пользователя');
}

var currentLogin = prompt('Введите имя пользователя');

for (var i = 0; i < login.length; i++) {
  if (currentLogin == login[i]) {
    checkLogin = true;
  }
}

if (checkLogin) {
  alert(currentLogin + ' вы успешно вошли');
}else {
  alert('Такого пользователя не существует');
}
