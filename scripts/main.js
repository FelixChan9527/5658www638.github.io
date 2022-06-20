let myImage = document.querySelector('img');

document.querySelector('html').onclick = function() {
  alert("大傻逼");
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wife.jpg') {
      myImage.setAttribute('src', 'images/wife2.jpg');
    } else {
      myImage.setAttribute('src', 'images/wife.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');    // 生成一个类似alert的对话框，但是用于输入数据
    if(!myName) {                             // 如果没有输入，则数据为空，再次递归运行该函数
      setUserName();
    } else {
      localStorage.setItem('name', myName);     // 存储输入的数据到本地
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;  // 修改标题
    }
  }

if(!localStorage.getItem('name')) {         // 判断浏览器是否存储了名字，没有则在进入页面前需要输入名字
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {         // 点击名字也可以更换用户名
    setUserName();
 }
