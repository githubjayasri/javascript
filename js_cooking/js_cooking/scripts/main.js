var myImg=document.querySelector('img');
var btn=document.querySelector('button');
var heading=document.querySelector('h1');

myImg.onclick=function()
{
	console.log('hai');
	var mysrc=myImg.getAttribute('src');
	console.log(mysrc);
	if(mysrc === 'images/firefox-icon.png'){
		myImg.setAttribute('src','images/rb.png');
		}
	else{
		myImg.setAttribute('src','images/firefox-icon.png');
		}
}

function setUserName()
{
	var myName=prompt('Please enter username:');
	localStorage.setItem('name',myName);
	heading.textContent= 'You Are So Cool @ ' +myName;
}

if(!localStorage.getItem('name'))
{
	setUserName();
}
else{
	var storedName=localStorage.getItem('name');
	heading.textContent='U r cool and cute' + storedName;
}

btn.onclick=function(){
	setUserName();
}