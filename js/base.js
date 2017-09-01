// JavaScript Document
var Base={
	getStyle:function(obj){
		if(obj.currentStyle){
			return obj.currentStyle	
		}else{
			return getComputedStyle(obj,false);	
		}
	},
	getstyle:function(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr]
		}else{
			return getComputedStyle(obj,false)[attr];	
		}
	},
	startMove:function(obj,json,fn){
		clearInterval(obj.timer)
		obj.timer=setInterval(function(){
			for(var attr in json){
				//attr=left
				//获取初始值
				if(attr=='opacity'){
					var iCur=parseInt(parseFloat(Base.getstyle(obj,attr))*100)
				}else{
					var iCur=parseInt(Base.getstyle(obj,attr))
					
				}
				//计算速度
				var speed=(json[attr]-iCur)/6
				speed=speed >0 ? Math.ceil(speed) : Math.floor(speed);
				if(json[attr]==iCur){
					clearInterval(obj.timer);
					if(fn){
						fn()	
					}
				}else{
					if (attr == 'opacity') {
						obj.style.filter = 'alpha(opacity' + iCur + speed + ')';
						obj.style.opacity = (iCur + speed) / 100;
					} else {
						obj.style[attr] = (iCur + speed) + 'px';
					}
				}
			}
		},50)
	}
}

/*封装日期工具*/
var DateUtil={
	//封装判断闰年 是4倍数 但是不是100的倍数 或者是400的倍数
	isLeapYear:function(year){
		if(year%4==0 && year%100!=0 || year%400==0){
			return true;	
		}else{
			return false;	
		}
	},
	//将日期对象按照指定的分隔符格式化成字符串
	formar:function(_date,separator){
		var year=_date.getFullYear();
		var month=_date.getMonth()+1 >9 ? _date.getMonth()+1 : "0"+(_date.getMonth()+1)
		var day=_date.getDate() >9 ? _date.getDate() : "0"+_date.getDate();
		return year+separator+month+separator+day;
	},
	//字符串转日期对象
	parseStr:function(str,separator){
		var time=str.split(separator);
		//用-连接
		time=time.join("-");
		//将字符串转换成毫秒数
		time=Date.parse(time);
		time=new Date(time);
		return time;
	},
	//获得某个月份的天数
	getMonthLength:function(num){
		switch(num){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:return 31;break;	
			case 2:return 28;break;
			case 4:
			case 6:
			case 9:
			case 11:return 30;
		}
	},
	//获得两个日期直接相差的天数
	getDiff:function(date1,date2){
		var time1=date1.getTime();
		var time2=date2.getTime();
		return Math.floor(Math.abs(date1-date2)/(1000*60*60*24))
	},
	//获得N天以后的日期
	getSday:function(n){
		var now=new Date();
		var time=now.getTime();
		time+=n*24*60*60*1000;
		return new Date(time);
	}
	
}
var StringUtil={
	//去掉字符串的空格
	trim:function(str){
		var arr=[];
		for(var i=0;i<str.length;i++){
			if(str[i]==" "){
				continue;//跳出本次循环	
			}else{
				arr.push(str[i])	
			}
		}
		return arr.join("")
	}	
}
var Cookie={
	//存储cookie
	put:function(key,value,expires,domain,path){
		//document.cookie='key=value;expires='+过期时间
		var str=key+"="+value;
		if(expires && (expires instanceof Date)){
			str+=';expires='+expires
		}
		if(domain){
			str+=';domain='+domain;	
		}
		if(path){
			str+=';path='+path	
		}
		return document.cookie=str;	
	},
	//移除指定cookie
	remove:function(key){
		var d=new Date(0)
		return document.cookie=key+"=111;expires="+d
	},
	//获取指定cookie值
	get:function(key){
		var str=document.cookie.split(";")	;
		//onsole.log(str)
		for(var t in str){
			var ss=str[t].split("=");
			console.log(StringUtil.trim(ss[0]))
			if(StringUtil.trim(ss[0])==key){
				return ss[1]	
			}
		}
	}
}
