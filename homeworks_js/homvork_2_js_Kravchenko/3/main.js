let month = prompt('Введіть місяць');
if(month == 12 || month >=1 && month < 3){
    alert('зима');
}else if(month >=3 && month < 6){
    alert('весна');
}else if(month >=6 && month < 9){
    alert('літо');
}else if(month >=9 && month < 12){
    alert('осінь');
}else{
    alert('введіть число від 1 до 12');
}