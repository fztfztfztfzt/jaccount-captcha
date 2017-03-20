localUser = document.getElementById('user');
localPwd = document.getElementById('psw');
chrome.storage.sync.get('user', function(result) {
    if(typeof(result['user'])=="undefined") {
		localUser.value="";
	}
    else{
    	localUser.value=result['user'];
    }
});
chrome.storage.sync.get('pwd', function(result) {
    if(typeof(result['pwd'])=="undefined") {
        localPwd.value="";
    }
    else {
        localPwd.value = result['pwd'];
    }
});
var ok = document.getElementById('ok');
ok.onclick = function save(){
	console.log('a');
	localUser = document.getElementById('user');
	localPwd = document.getElementById('psw');
	var tmp = document.getElementById('suc');
	tmp.innerHTML="succeed";
	chrome.storage.sync.set({'user': localUser.value}, function(result) {
		console.log("保存成功")
	});
	chrome.storage.sync.set({'pwd': localPwd.value}, function(result) {
		var tmp = document.getElementById('suc');
		tmp.innerHTML="succeed";
	});
}