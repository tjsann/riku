//ローチケメアド電話番号自動入力[エイリアス]

//使用アドレス入力
var domains = ['@gmail.com'];

//使用アドレス名
var address_names = ['lushenzhang','nusohamu','assault48','hoshinomac28','mariatamu0310'];

var domain = domains[Math.floor(Math.random()*domains.length)];
var address_name =  address_names[Math.floor(Math.random()*address_names.length)];

var ketasuu = Math.floor(Math.random()*6);
var address_rand = address_name + "+" + Math.random().toString(36).slice(-1*(ketasuu+5)) + domain;

//メアド形式選択(1:1)
var mailtype = Math.floor(Math.random()*Math.floor(2));
if(mailtype == 0){
  mail = address_rand;
}else{
  mail = address_rand;
}

//メアド入力
document.forms.ttg160.elements.MAIL_ADDRS.value = document.forms.ttg160.elements.MAIL_ADDRS_CONFIRM.value = mail;

//電話番号入力
document.forms.ttg160.elements.TEL.value = document.forms.ttg160.elements.TEL_CONFIRM.value = "0" + (Math.floor(Math.random()*3)+7) + "0" + (Math.floor(Math.random()*90000000)+10000000);

//次ページへ
document.querySelector("[name=NEXT]").click();
