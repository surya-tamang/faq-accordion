const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const answer = document.querySelectorAll(".show");


for(let i=0 ; i<plus.length ; i++){
    plus[i].addEventListener('click', function(){
      plus[i].style.display="none";
      minus[i].style.display="block";
      answer[i].style.display="block";
    })
}

for(let i=0 ; i<minus.length ; i++){
    minus[i].addEventListener('click', function(){
      plus[i].style.display="block";
      minus[i].style.display="none";
      answer[i].style.display="none";
    })
}