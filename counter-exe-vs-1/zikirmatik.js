
var state={
  current:0,
};

function increament(){
  state.current++
}
function reset(){
  state.current=0
}

function yazdir(){
  var sayi=document.querySelector(".sayi1");
  sayi.innerText=state.current;
}

document.querySelector(".resetbutton") .addEventListener(
  "click",
  function(){
    reset();
    yazdir();
});

document.querySelector(".incbutton") .addEventListener(
    "click",
    function(){
      increament();
      yazdir()
    }
);
