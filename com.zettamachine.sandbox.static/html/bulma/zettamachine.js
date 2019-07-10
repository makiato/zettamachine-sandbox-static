'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Toggles

  var $burgers = getAll('.burger');

  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
        $target.classList.toggle('has-dark-background');
      });
    });
  }
  
  var $logo = document.getElementById('logo');
  var $navbar = getAll('.navbar');
  
  window.onscroll = function() {
	  if($logo) {
		  if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
			  $logo.width = '90';
			  $navbar[0].classList.add('has-dark-background');
		  } else {
			  $logo.width = '180';
			  $navbar[0].classList.remove('has-dark-background');
		  }
	  } else {
		  console.log('there is no logo');
	  }
  }

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});