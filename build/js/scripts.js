"use strict";

// $(function() {
//   $(".header-btn").on("click", function(){
//     $(".menu").addClass("active");
//   });
//
//   $(".close-btn").on("click", function(){
//     $(".menu").removeClass("active");
//   });
// });
var button = document.querySelector('.header-btn__inner');
var header = document.querySelector('.header');
button.addEventListener('click', function () {
  button.classList.toggle('is-active');
  header.classList.toggle('nav-open');
});