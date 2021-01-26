(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{498:function(t,s,a){"use strict";a.r(s);var e=a(27),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"🌐网络与信息中心-its-sustech-edu-cn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🌐网络与信息中心-its-sustech-edu-cn"}},[t._v("#")]),t._v(" 🌐网络与信息中心 (its@sustech.edu.cn)")]),t._v(" "),a("h2",{attrs:{id:"校内局域网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校内局域网"}},[t._v("#")]),t._v(" 校内局域网")]),t._v(" "),a("p",[t._v("南科大的校内局域网主要分为主要包含教学/科研/业务计算机的科研教学网段("),a("code",[t._v("172.18.0.0/16")]),t._v(")和包含大部分师生员工的个人有线与无线设备的普通网段("),a("code",[t._v("10.16.0.0/13")]),t._v(")。")]),t._v(" "),a("p",[t._v("在普通网段中，"),a("code",[t._v("10.20.0.0/16")]),t._v("为有线网段，"),a("code",[t._v("10.22.0.0/16")]),t._v("为电信自费宽带网段。")]),t._v(" "),a("p",[t._v("学校为支持IPv6的设备分配前缀为"),a("code",[t._v("2001:DA8:201D::/48")]),t._v("的IPv6地址。("),a("a",{attrs:{href:"http://www.nic.edu.cn/member-cgi/i6obj?query=SUSTC6-CERNET2",target:"_blank",rel:"noopener noreferrer"}},[t._v("SUSTC6-CERNET2"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("h3",{attrs:{id:"接入网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接入网络"}},[t._v("#")]),t._v(" 接入网络")]),t._v(" "),a("p",[t._v("南科大师生员工无需为互联网服务付费（电信自费宽带除外）。设备获取的内网IP地址在遵循前述原则下与Mac地址绑定，在较长的时间内不会改变。")]),t._v(" "),a("p",[t._v("网络接入管理地址："),a("a",{attrs:{href:"http://172.16.16.20:8900/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://172.16.16.20:8900/home"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("为无法进行Web认证的设备，添加Mac无感知认证；")]),t._v(" "),a("li",[t._v("查看上网设备")]),t._v(" "),a("li",[t._v("查看上网记录")])]),t._v(" "),a("h4",{attrs:{id:"有线网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有线网络"}},[t._v("#")]),t._v(" 有线网络")]),t._v(" "),a("p",[t._v("接入学校有线网络暂时无需认证，接入电信自费宽带的有线网络时需要验证购买过套餐的同学的学号与密码。")]),t._v(" "),a("h4",{attrs:{id:"无线网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无线网络"}},[t._v("#")]),t._v(" 无线网络")]),t._v(" "),a("p",[t._v("接入无线网络时，需要通过Web认证，输入学号与密码后才可上网，否则只能访问校内局域网，无线网络的认证地址为："),a("a",{attrs:{href:"http://172.16.16.20:803/sustc_cas.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://172.16.16.20:803/sustc_cas.php"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如联网设备不支持通过Web进行验证（如路由器，开发板等），可以尝试使用同学制作的"),a("a",{attrs:{href:"https://www.whexy.com/post/openwrt-zhi-jie-jue-nan-ke-da-xiao-yuan-wang-deng-lu-nan-ti/",target:"_blank",rel:"noopener noreferrer"}},[t._v("第三方脚本"),a("OutboundLink")],1),t._v("进行联网，或是更改可进行Web认证设备的Mac地址为不支持Web认证设备的Mac地址代为认证。")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("同学制作的无线网络登陆脚本")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://cas.sustc.edu.cn/cas/login?service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http%3A%2F%2F172.16.16.20%3A803%2Fsustc_cas.php "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" a.txt\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("s")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -o -E "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("\\ value="),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("(.+?)"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('"')]),t._v(" a.txt"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$s")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("s")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("#")]),t._v('*\\"}')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("s")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("#")]),t._v('*\\"}')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("s")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%%")]),t._v('\\"*}')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$s")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("unm")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("此处填入教/学工号\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("此处填入密码\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cas.sustc.edu.cn/cas/login?service=http%3A%2F%2F172.16.16.20%3A803%2Fsustc_cas.php"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username='),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$unm")]),t._v("&password="),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pwd")]),t._v("&execution="),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$s")]),t._v('&_eventId=submit&geolocation="')]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://www.whexy.com/post/openwrt-zhi-jie-jue-nan-ke-da-xiao-yuan-wang-deng-lu-nan-ti/",target:"_blank",rel:"noopener noreferrer"}},[t._v("给路由器写了一个登录南科大校园网的脚本"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"互联网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#互联网"}},[t._v("#")]),t._v(" 互联网")]),t._v(" "),a("h3",{attrs:{id:"出口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出口"}},[t._v("#")]),t._v(" 出口")]),t._v(" "),a("p",[t._v("学校目前拥有4Gbps电信163出口带宽，2.5Gbps电信CN2出口带宽，以及1.5Gbps教育网出口带宽。"),a("a",{attrs:{href:"https://biddingoffice.sustc.edu.cn/search/news/id/5085/pid",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("学校信息中心会将访问境外网站的流量发往CN2出口，因此学校内访问境外网站的质量会显著高于普通电信网络。")]),t._v(" "),a("p",[t._v("学校目前对普通网段设备限速8Mbps，对科研教学网段限速50Mbps，对教育网IPv4限速20Mbps，暂不对教育网IPv6限速。")]),t._v(" "),a("h2",{attrs:{id:"电信自费宽带"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电信自费宽带"}},[t._v("#")]),t._v(" 电信自费宽带")]),t._v(" "),a("p",[t._v("中国电信为居住于湖畔宿舍区的同学提供自费电信宽带。")]),t._v(" "),a("p",[t._v("宽带速率可选50Mbps和100Mbps。其中，100Mbps宽带和手机卡套餐的总价为70元/月。")]),t._v(" "),a("p",[t._v("电信自费宽带也需要使用购买套餐同学的校园卡账户登录后才可使用，登陆方式为Web认证。也有同学制作了第三方脚本以方便快速验证。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/sustc/sustech-online-ng@master/docs/service/network/CT_campus_broadband_plan.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("此处(PDF)"),a("OutboundLink")],1),t._v("是一份电信为南科大同学提供的学生卡套餐的具体内容（含流量与宿舍宽带）。")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("同学制作的电信自费网络登陆脚本")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("loginurl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cas.sustech.edu.cn/cas/login"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("authip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"219.134.142.194"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Insert your CAS info below:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_USER_NAME_HERE"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_PASSWORD_HERE"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ret_code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -I -s --connect-timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" http://www.baidu.com -w %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("http_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -n1"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ret_code")]),t._v(" -ne "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Attempting to log in the enet system"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f /tmp/cascookie\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You may need to modify the following regex for different distros.")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("routerip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -A "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^eth0.2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -P -o "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(?<=inet addr:).*(?=  Bcast)"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("eneturl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://125.88.59.131:10001/sz/sz112/index.jsp?wlanuserip='),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$routerip")]),t._v("&wlanacip="),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$authip")]),t._v('"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("execution")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --silent --cookie-jar /tmp/cascookies -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:71.0) Gecko/20100101 Firefox/71.0"')]),t._v(" -L "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$eneturl")]),t._v('"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -o "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'execution.*/><input type'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -o "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[^\"]\\{50,\\}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --silent --output /dev/null --cookie /tmp/cascookies --cookie-jar /tmp/cascookies -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/x-www-form-urlencoded"')]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:71.0) Gecko/20100101 Firefox/71.0"')]),t._v(" -L -X POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loginurl")]),t._v('"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username='),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$username")]),t._v("&password="),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),t._v("&execution="),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$execution")]),t._v('&_eventId=submit&geolocation="')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connected to Internet, recheck a second later"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" 1s\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/NewbieOrange/SUSTech-EnetLogin",target:"_blank",rel:"noopener noreferrer"}},[t._v("NewbieOrange/SUSTech-EnetLogin"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"信息中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信息中心"}},[t._v("#")]),t._v(" 信息中心")]),t._v(" "),a("p",[t._v("信息中心老师的联系方式如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("岗位名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("在岗人员名单")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("联系方式")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("主任")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("杨海琨")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88010799")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("副主任")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("孙乔羽")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88010798")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("运维管理")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("管立生")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88010776")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("综合保障")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("刘敬、张炳坤")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88010780")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("信息化管理")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("郑善辉")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88010779")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("招生信息化")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("詹涵舒、韩少亮")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88010789")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("教学信息化")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("宋伟中")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88010788")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("综合信息化")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("朱朝阳")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88010775")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("科技管理")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("尹荣荣")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88010787")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("项目管理")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("陈毅")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88010726")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://116.7.234.209/wlzx",target:"_blank",rel:"noopener noreferrer"}},[t._v("网络信息中心（页面即将停用）"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("南科大信息中心沟通群："),a("strong",[t._v("434226835")])])]),t._v(" "),a("h2",{attrs:{id:"我可以请求信息中心做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我可以请求信息中心做什么"}},[t._v("#")]),t._v(" 我可以请求信息中心做什么？")]),t._v(" "),a("ul",[a("li",[t._v("重置CAS密码")]),t._v(" "),a("li",[t._v("重置邮箱密码")]),t._v(" "),a("li",[a("a",{attrs:{href:"./apply-for-vpn"}},[t._v("申请回校VPN")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/service/unifound"}},[t._v("给打印机加纸")])]),t._v(" "),a("li",[t._v("调整往某个网段的路由")])]),t._v(" "),a("p",[a("strong",[t._v("关于学校提供的更多信息服务，请见"),a("a",{attrs:{href:"/service"}},[t._v("服务")]),t._v("一节")])]),t._v(" "),a("h2",{attrs:{id:"选择合适的电子产品"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的电子产品"}},[t._v("#")]),t._v(" 选择合适的电子产品")]),t._v(" "),a("ul",[a("li",[t._v("电脑")]),t._v(" "),a("li",[a("a",{attrs:{href:"./choose-a-pad"}},[t._v("平板")])]),t._v(" "),a("li",[a("a",{attrs:{href:"./choose-a-router"}},[t._v("路由器")])])]),t._v(" "),a("h2",{attrs:{id:"校内网络使用技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校内网络使用技巧"}},[t._v("#")]),t._v(" 校内网络使用技巧")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"./remote-desktop"}},[t._v("远程桌面")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);