var imgBefore = document.querySelector('.viewer__view-before');
var imgAfter = document.querySelector('.viewer__view-after');
var range = document.querySelector('.viewer__range');



var link = document.querySelector(".viewer__control-switch");
var moddd = document.querySelector(".viewer__view-before");
var moddd2 = document.querySelector(".viewer__view-after");

if (window.innerWidth >= 768) {
  moddd2.classList.remove("viewer__view--mob-hidden");
  imgBefore.style.width = 50 + '%';
  imgAfter.style.width = 50 + '%';
  imgBefore.style.backgroundposition = 'center left';
  imgAfter.style.backgroundposition = 'center right';
  console.log("ширина 50%, оба видны");
} else {
  moddd.classList.remove("viewer__view--mob-hidden");
  moddd2.classList.add("viewer__view--mob-hidden");
  imgBefore.style.width = 100 + '%';
  imgAfter.style.width = 100 + '%';
  console.log("ширина 100%, виден первый, второй нет");
}





// if (window.innerWidth >= 768) {
//   moddd2.classList.remove("viewer__view--mob-hidden");
//   moddd.classList.remove("viewer__view--mob-hidden");
//   console.log("убрать скрытие после");
// }
// else {
//   moddd2.classList.add("viewer__view--mob-hidden");
//   console.log("добавить скрытие после");
// }
window.addEventListener('resize', function(){
  console.log("смена шиирны окна");
    if (window.innerWidth >= 768) {
      moddd2.classList.remove("viewer__view--mob-hidden");
      moddd.classList.remove("viewer__view--mob-hidden");
      console.log("убрать скрытие после");
    }
    else {
      moddd2.classList.add("viewer__view--mob-hidden");
      console.log("добавить скрытие после");
    }
}, true);

// window.onresize = function () {
//   console.log("смена шиирны окна");
//   if (window.innerWidth >= 768) {
//     moddd2.classList.remove("viewer__view--mob-hidden");
//     moddd.classList.remove("viewer__view--mob-hidden");
//     console.log("убрать скрытие после");
//   }
//   else {
//     moddd2.classList.add("viewer__view--mob-hidden");
//     console.log("добавить скрытие после");
//   }
// }


link.addEventListener("click", function (evt) {
  if(moddd2.classList.contains('viewer__view--mob-hidden')) {
    moddd2.classList.remove("viewer__view--mob-hidden");
    moddd.classList.add("viewer__view--mob-hidden");
    console.log("Клик по переключателю");
  } else {
    moddd.classList.remove("viewer__view--mob-hidden");
    moddd2.classList.add("viewer__view--mob-hidden");
    console.log("Клик по переключателю");
  }
});



range.addEventListener('input', function() {
  console.log("Ползунок шевелится");
  imgBefore.style.width = (100 - range.value) + '%';
  imgAfter.style.width = range.value + '%';
})
