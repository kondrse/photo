"use strict";

var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
var body = document.querySelector('body');

if (isMobile.any()) {
  body.classList.add('touch');
  var toggles = document.querySelectorAll('.main-nav__toggle');

  if (toggles && toggle.length > 0) {
    [].forEach.call(toggles, function (toggle) {
      if (toggle.dataset.togglebutton) {
        toggle.addEventListener('click', function (e) {
          e.preventDefault();
          var blocks = document.querySelectorAll('[data-toggleblock="' + toggle.dataset.togglebutton + '"]');

          if (blocks) {
            [].forEach.call(blocks, function (block) {
              if (block.hasAttribute('hidden')) {
                block.removeAttribute('hidden');
              } else {
                block.setAttribute('hidden', '');
              }
            });

            if (toggle.dataset.toggletext) {
              var text = toggle.textContent;
              toggle.textContent = toggle.dataset.toggletext;
              toggle.dataset.toggletext = text;
            }
          }
        });
      }
    });
  }
} else {
  body.classList.add('mouse');
};
