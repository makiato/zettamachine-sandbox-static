'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Burger toggles

  var $burgers = getAll('.burger');

  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
        $target.classList.toggle('has-background-light	');
      });
    });
  }

  // Navbar scroll transition
  var $navbar = getAll('.navbar');
  
  window.onscroll = function() {
	  if($logo) {
		  if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
			  $logo.width = '0';
			  $navbar[0].classList.add('has-background-light');
		  } else {
			  $logo.width = '180';
			  $navbar[0].classList.remove('has-background-light');
		  }
	  } else {
		  console.log('there is no logo');
	  }
  }
  
  // Raphael logo
  var $arrayLogo = getAll(".logo");
	
	if($arrayLogo.length > 0) {
		$arrayLogo.forEach(
			function($logo) {
				var $rem = 16;
				var $direction = $logo.getAttribute('direction');
				if($direction == 'column') {
					$logo.classList.add('logo-column');
				} else {
					$logo.classList.add('logo-row');
				}
				var $size = parseInt($logo.getAttribute('size'),10);
				var $colour = $logo.getAttribute('colour');
				var $weight = parseInt($logo.getAttribute('weight'),10);
				var $logoImage = document.createElement('div');
				var paper = Raphael($logoImage, $rem * $size + 2 * $weight, $rem * $size + 2 * $weight); 
				paper.rect(0.075 * $rem * $size + $weight, 0.15 * $rem * $size + $weight, 0.85 * $rem * $size, 0.85 * $rem * $size).attr({'stroke': $colour,'stroke-width': $weight});
				paper.circle(($rem/2) * $size + $weight, ($rem/2) * $size + $weight, ($rem/2) * $size).attr({'stroke': $colour,'stroke-width': $weight});
				
				$logoImage.classList.add('logo-image');
				$logo.appendChild($logoImage);
				var $logoZetta = document.createElement('div');
				$logoZetta.classList.add('logo-zetta');
				$logoZetta.style.fontSize = $size / 1.6 + 'rem';
				$logoZetta.style.color = $colour;
				$logo.appendChild($logoZetta);
				var $logoMachine = document.createElement('div');
				$logoMachine.classList.add('logo-machine');
				$logoMachine.style.fontSize = $size / 1.6 + 'rem';
				$logoMachine.style.color = $colour;
				$logo.appendChild($logoMachine);
			}
		);
	}

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});
