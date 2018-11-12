function setCookie(key,value,days){
	var date = new Date();
	date.setDate(date.getDate()+days);
	document.cookie = key+"="+value+"; expires="+date;
}

function getCookie(key){
	var cookies = document.cookie.split("; ");
	for(var i=0; i<cookies.length; i++){
		var cook = cookies[i].split("=");
		if(cook[0]==key){
			return cook[1];
		}
	}
	return null;
}

function removeCookie(key){
	setCookie(key,"",-1);
}

function clearCookie(){
	var cookies = document.cookie.split("; ");
	for(var i=0; i<cookies.length; i++){
		var cook = cookies[i].split("=");
		removeCookie(cook[0]);
	}
}