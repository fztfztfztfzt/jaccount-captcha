# -*- coding: utf-8 -*-
from splinter import Browser
from PIL import Image
import urllib2
import pytesseract


def format_captcha(captcha):
	temp = ''
	for i in captcha:
		if (ord(i)>=48 and ord(i)<=57) or (ord(i)>=65 and ord(i)<=90) or (ord(i)>=97 and ord(i)<=122):
			temp = temp + i
	if temp=='':
		temp = 'aaaa'
	return temp
	

browser = Browser('chrome')
url = "https://jaccount.sjtu.edu.cn/jaccount/jalogin?sid=jasjtumail&returl=CPiUlE8hZjjz%2FwuzfEhWYwS%2BcSOkQVjNh5obOmafCN79IISrODF57%2Bbar90FbrWm2pbm8Q9T07YScDAdkuOZVMQ%3D&se=CM8OBenwfpw2XDQGCR3P4UPo0rhbtIqbTue6pjULCliqw4ExAvoEBoM%3D"

sss = 0

while True:
	browser.visit(url)

		
	cookie = browser.cookies.all()
	opener = urllib2.build_opener()
	opener.addheaders.append(('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'))
	opener.addheaders.append(('Host','jaccount.sjtu.edu.cn'))
	opener.addheaders.append(('Referer',browser.url))
	opener.addheaders.append(('Cookie',  "; ".join('%s=%s' % (k,v) for k,v in cookie.items())))
	f = opener.open("https://jaccount.sjtu.edu.cn/jaccount/captcha?1488154642719")
	data = f.read()
	with file('captcha.png','wb') as f:
		f.write(data)
	img = Image.open("captcha.png").convert('L')
	result = format_captcha(pytesseract.image_to_string(img,lang="eng"))
	browser.fill('captcha',result)
	browser.fill('user','test')
	browser.fill('pass','test')
	xpath = '//*[@id="form-input"]/div[4]/input'
	browser.find_by_xpath(xpath).click()
	flag = browser.is_text_present(u'请正确填写验证码')
	if not flag:
		with file("data/"+result+".png",'wb') as f:
			f.write(data)
		sss = sss+1
		print sss
		if sss==1000:
			break
	else:
		continue
		
	
	
