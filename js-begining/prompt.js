let legalAge = prompt ( "Сколько Вам лет?")

if (NaN) {
    alert ("Вы совершеннолетний!");
}

     else {
        if (legalAge >= 18) {
        alert("Вы совершеннолетний");
        } else {
        alert("Вы несовершеннолетний. Покиньте страницу!");
    }
  }

  for (let i = 1; i <= 10; i++) {
    alert(i);
  }

  let dayOfWeek = new Date().getDay(); 

switch (dayOfWeek) {
  case 0:
    alert ("Сегодня Понедельник");
    break;

  case 1:
    alert ("Сегодня Вторник");
    break;

  case 2:
    alert ("Сегодня Среда");
    break;

  case 3:
    alert ("Сегодня Четверг");
    break;

  case 4:
    alert ("Сегодня Пятница");
    break;

  case 5:
    alert ("Сегодня Суббота");
    break;

  case 6:
    alert ("Сегодня Воскресенье");
    break;
    
  default:
    alert ("Ошибка: Некорректный день недели.");
}