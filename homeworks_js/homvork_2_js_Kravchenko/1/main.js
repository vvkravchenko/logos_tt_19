
let start = confirm(`Are you redy?`);
if(start == true){
    let i = 0;
    let answer = confirm(`1+1=2 ?`);
    if(answer == true) { 
        i+=1 ;
    }
    answer = confirm(`2+2=4 ?`)
    if(answer == true){
        i+=1 ;
    }
        answer = confirm(`3+3=6 ?`)
        if(answer == true){
            i+=1 ;
        }
            answer = confirm(`4+4=8 ?`)
            if(answer == true){
                i+=1 ;
            }
                answer = confirm(`5+5=10 ?`)
                if(answer == true){
                    i+=1 ;
                }
                    answer = confirm(`6+6=12 ?`)
                    if(answer == true){
                        i+=1 ;
                    }
                        answer = confirm(`7+7=14 ?`)
                        if(answer == true){
                            i+=1 ;
                        }
                            answer = confirm(`8+8=16 ?`)
                            if(answer == true){
                                i+=1 ;
                            }
                                answer = confirm(`9+9=18 ?`)
                                if(answer == true){
                                    i+=1 ;
                                }
                                    answer = confirm(`10+10=20 ?`)
                                    if(answer == true){
                                        i+=1 ;
                                    }
    let rate = i/10*100;
    alert(`Кількість правильних відповідей ${i} з 10; Рівень знань ${rate} %`);
} else{
    alert(`We'll wait for you`);
}