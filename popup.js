localUser = document.getElementById('user');
localPwd = document.getElementById('psw');
box = $("#autoBox");
chrome.storage.sync.get('autoLogin', function(result) {
    if(result['autoLogin']){
        box.attr("checked",true);
    }
    else{
        box.removeAttr("checked");
    }
});
box.attr("checked",true);
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
    if(box.prop( "checked" )){
        chrome.storage.sync.set({'autoLogin': true}, function(result) {
            box.attr("checked",true);
            console.log("自动登陆");
        });
    }
    else{
        chrome.storage.sync.set({'autoLogin': false}, function(result) {
            box.removeAttr("checked");
            console.log("取消自动登陆");
        });
    }
    console.log('b');
	chrome.storage.sync.set({'user': localUser.value}, function(result) {
		console.log("保存成功");
	});
	chrome.storage.sync.set({'pwd': localPwd.value}, function(result) {
        window.close();
	});
};