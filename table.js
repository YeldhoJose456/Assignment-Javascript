function printTable(){
    const num=12;


    let i=0;
    
    while  (i<=10){
    console.log('12'+"*"+i+"="+ num*i);
    i=i+1
    }
}

const num = prompt('Enter a Number');

printTable(num);