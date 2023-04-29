//1 задание
let lisa = 1
let deadushka = 2;
let rabbit = 3;

  switch(2) 
  {
    case  lisa:
      alert( "меня съели" );
      break;

    case 2 :
      alert( "я от дедушки ушел" );
      break;

  case 3:
  alert("неизвестная операция")

  }
//2 задание
  let voice = 'Дед Мороз! Дед Мороз! Дед Мороз!'
let name = 'santa'
function newYear(name){
    if(name=='santa'){
        console.log(${voice})
    }else{
        console.log('Снегурочка! Снегурочка! Снегурочка!')
    }
}
newYear(name)
//домашняя работа

//работа с замечаниями по доьашней работе
let person = "lisa"
let person2 = 'deadushka'
let person3 = 'rabbit'
colobok('deadushka')

function colobok(person){
    if(person=="lisa"){
        console.log("меня сьели")
    }else if(person=='deadushka'){
        console.log("Я от дедушки ушёл")
    }else{
        console.log("я живой")
    }
}