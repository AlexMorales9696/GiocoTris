const x=document.getElementsByClassName('stileBottone')
console.log(x);
turno=0;
function myFunction(riga,colonna) {
    n=riga*3+colonna;
    if(turno%2==0){
        document.getElementsByClassName('stileBottone')[n].innerHTML ="X";
    }
    else 
    {
        document.getElementsByClassName('stileBottone')[n].innerHTML ="O";
    }
   turno=turno+1;
  }

  turno=0;
  
