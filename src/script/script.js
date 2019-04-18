var dropCookie = true;
var cookieDuration = 365;
var cookieName = 'acceptCookie';
var cookieValue = 'on';

function createCookieBanner(){
  var main = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');
  div.setAttribute('id','cookie-law');
  div.innerHTML = '<div class="context"><p>Wir verwenden Cookies. Bei den Besuch und weiteren Verlauf der Webseite akzeptieren Sie die Berechtigung und Nutzung der Cookies.<span class="datasecurity"><a href="#" rel="nofollow" title="Datenschutzerklärung">Datenschutzerklärung</a></span></p></div><div class="information"><div class="accept"><a class="close-cookie-banner" href="javascript:void(0);" onclick="acceptCookie();"><div class="button">Akzeptieren</div></a></div></div>'; 

  main.insertBefore(div,main.firstChild);

  document.getElementsByTagName('body')[0].className+=' cookiebanner';

  createCookie(window.cookieName,window.cookieValue, window.cookieDuration);
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000)); 
    var expires = "; expires="+date.toGMTString(); 
  }
  else {
    var expires = "";
  }
  if(window.dropCookie) { 
    document.cookie = name+"="+value+expires+"; path=/"; 
  }
}

function checkCookie(name) {
  var validator = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(validator) == 0) return c.substring(validator.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

window.onload = function(){
  if(checkCookie(window.cookieName) != window.cookieValue){
    createCookieBanner(); 
  } else {
    console.log(window.cookieName + " - " + window.cookieValue);
  }
}

function acceptCookie(){
  var element = document.getElementById('cookie-law');
  element.parentNode.removeChild(element);
}
