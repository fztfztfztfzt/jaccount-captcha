var ok = document.getElementById('ok');
ok.onclick = function save(){
	console.log('a');
	localUser = document.getElementById('user');
	localPwd = document.getElementById('pwd');
	var tmp = document.getElementById('suc');
	tmp.innerHTML="succeed";
	chrome.storage.sync.set({user: localUser.value}, function(result) {});
	chrome.storage.sync.set({pwd: localPwd.value}, function(result) {
		var tmp = document.getElementById('suc');
		tmp.innerHTML="succeed";
	});
}