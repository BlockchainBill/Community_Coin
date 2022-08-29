var div = 360 / 6;
var radius = 130;
var parentdiv = document.getElementById('parentdiv');
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square

//First circle of 6
var offsetToChildCenter = 50;
var totalOffset = offsetToParentCenter - offsetToChildCenter;
for (var i = 1; i <= 6; ++i) {
  var childdiv = document.createElement('div');
  childdiv.className = 'div2';
  childdiv.style.position = 'absolute';
  var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
  var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
  childdiv.style.top = (y + totalOffset).toString() + "px";
  childdiv.style.left = (x + totalOffset).toString() + "px";
  parentdiv.appendChild(childdiv);
}

//Second circle of 6
var radius2 = 200;
var offsetToChild2Center = 30;
var totalOffset2 = offsetToParentCenter - offsetToChild2Center;
for (var i = 1; i <= 6; ++i) {
    var childdiv2 = document.createElement('div2');
    childdiv2.className = 'div3';
    childdiv2.style.position = 'absolute';
    var y = Math.sin(((div * i) * (Math.PI / 180)) - (Math.PI / 6)) * radius2;
    var x = Math.cos(((div * i) * (Math.PI / 180)) - (Math.PI / 6)) * radius2;
    childdiv2.style.top = (y + totalOffset2).toString() + "px";
    childdiv2.style.left = (x + totalOffset2).toString() + "px";
    parentdiv.appendChild(childdiv2);
  }

//Third circle of 6
var radius3 = 250;
var offsetToChild3Center = 20;
var totalOffset3 = offsetToParentCenter - offsetToChild3Center;
for (var i = 1; i <= 6; ++i) {
    var childdiv3 = document.createElement('div3');
    childdiv3.className = 'div4';
    childdiv3.style.position = 'absolute';
    var y = Math.sin((div * i) * (Math.PI / 180)) * radius3;
    var x = Math.cos((div * i) * (Math.PI / 180)) * radius3;
    childdiv3.style.top = (y + totalOffset3).toString() + "px";
    childdiv3.style.left = (x + totalOffset3).toString() + "px";
    parentdiv.appendChild(childdiv3);
  }

//Fourth circle of 6
var radius4 = 280;
var offsetToChild4Center = 25;
var totalOffset4 = offsetToParentCenter - offsetToChild4Center;
for (var i = 1; i <= 6; ++i) {
    var childdiv4 = document.createElement('div4');
    childdiv4.className = 'div5';
    childdiv4.style.position = 'absolute';
    var y = Math.sin(((div * i) * (Math.PI / 180)) - (Math.PI / 6)) * radius4;
    var x = Math.cos(((div * i) * (Math.PI / 180)) - (Math.PI / 6)) * radius4;
    childdiv4.style.top = (y + totalOffset4).toString() + "px";
    childdiv4.style.left = (x + totalOffset4).toString() + "px";
    parentdiv.appendChild(childdiv4);
  }

//Fifth circle of 6
var radius5 = 330;
var offsetToChild5Center = 15;
var totalOffset5 = offsetToParentCenter - offsetToChild5Center;
for (var i = 1; i <= 6; ++i) {
    var childdiv5 = document.createElement('div4');
    childdiv5.className = 'div6';
    childdiv5.style.position = 'absolute';
    var y = Math.sin((div * i) * (Math.PI / 180)) * radius5;
    var x = Math.cos((div * i) * (Math.PI / 180)) * radius5;
    childdiv5.style.top = (y + totalOffset5).toString() + "px";
    childdiv5.style.left = (x + totalOffset5).toString() + "px";
    parentdiv.appendChild(childdiv5);
  }