function setProgress(elem, percent) {
  var
    degrees = percent * 3.6, /* degrees = percent * 3.6,*/
    transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
  //elem.querySelector('.counter').setAttribute('data-percent', Math.round(percent));
  elem.querySelector('.progressEnd').style[transform] = 'rotate(' + degrees + 'deg)';
  elem.querySelector('.progress').style[transform] = 'rotate(' + degrees + 'deg)';
  if(degrees!=0){
    if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className))
    elem.className += ' fiftyPlus';
}else{
  elem.className = 'circlePercent';
}
  
}

(function() {
  var
    elem = document.querySelector('.circlePercent'),
    percent = 6;
  /*(function animate() {
    setProgress(elem, (percent += .25));
    if(percent < 100)
      setTimeout(animate, 15);
  })();*/
})();

function clickme(){
  elem = document.querySelector('.circlePercent'),
  percent = 6;
  var percentdegree=0;
  var attempts = $(".counter").attr('data-percent');
  var caseNum = parseInt(attempts);
  switch (caseNum) {
    case 0:
        percentdegree = "100";
        break;
    case 1:
        percentdegree = "0";
        break;
    case 2:
        percentdegree = "75";
        break;
    case 3:
        percentdegree = "60";
        break;
    case 4:
        percentdegree = "45";
        break;
    case 5:
        percentdegree = "30";
        break;
    case  6:
        percentdegree = "15";
}
  (function animate() {
    setProgress(elem, (percentdegree)); /* setProgress(elem, (percent += attempts)); */
   // if(percent < 100) setTimeout(animate, 15);
  })();
}

function reset() {
  $('#menu').show();
}