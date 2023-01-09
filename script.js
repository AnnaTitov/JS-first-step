//Завдання 1
let mystr=prompt('Write text');
let k=0;
for (let i=0; i<mystr.length; i++){
    if(mystr.charAt(i)==' '){
        k++;
    }
}
console.log(k);

//Завдання 2
let email = prompt('e-mail');
let znak = (email.indexOf('@'));
if (znak == 0 || znak == email.length - 1 || znak == -1) {
    alert('Error');
}
else {
    prompt('write password');
}

//Завдання 3
let myStr = prompt('text');
let start = 0;
let find = 0;
 while (true) {
     let position = myStr.indexOf('html', start);
     if (position === -1) break;
     find++;
     start = position + 1;
}
console.log(find);

