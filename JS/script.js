var sub = document.querySelector('.sub-menu');

function mobileToggleOn() {
  if(sub.classList.contains('menu-toggle')) {
    sub.classList.remove('menu-toggle');
  }else {
    sub.classList.add('menu-toggle');
  }
}

var frame,
    draw = function() {
      var act = document.querySelector('.coloring');
      if (act.style.opacity == 0) {
        act.style.opacity = 1;
      } else {
        act.style.opacity = 0;
        clearInterval(frame);
      }
    };

function notifyOn(inputEmail) {
  var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputEmail.value.match(mailFormat)) {
    frame = setInterval(function() {
        draw();
      }, 1500);
    return true;
  } else {
    alert("You have entered an invalid email");
    document.form1.text1.focus();
    return false;
  }
}
