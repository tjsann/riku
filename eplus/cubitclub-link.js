var form = document.createElement('form');
document.body.appendChild(form);
form.method = 'POST';
form.action ='https://w1.onlineticket.jp/sf/tkt10/detail/3632480001?P6=529';
var input = document.createElement('input');
input.type = 'hidden';
input.name = 'keyword';
input.value = '6393';
form.appendChild(input);
form.submit();
