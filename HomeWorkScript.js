

function myFunction(){

    const num=[];  

    for (let i=0;i<=100;i++){  
        num[i]=i; 
    };
        for (let k=1;k<num.length;k++){
            const listUl = document.querySelector('ol');   
            const listLi = document.createElement('li');
            listUl.appendChild(listLi);

             if([k]%3==0 && [k]%5==0){listLi.innerHTML='FIZZBUZZ';
                }else if([k]%5==0){listLi.innerHTML='BUZZ';
                }else if([k]%3==0){listLi.innerHTML='FIZZ';
                }else {listLi.innerHTML=[k];
            };
        };

    };

    