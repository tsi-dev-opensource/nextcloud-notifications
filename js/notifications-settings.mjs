/*! third party licenses: js/vendor.LICENSE.txt */
import{r as yi,a as Oi,V as ti}from"./style-N1aAjoYj.chunk.mjs";import{g as Ii,c as Li,n as Ci,N as Mi,l as zi,a as Ui,v as Ri,s as xi,b as ni}from"./_plugin-vue2_normalizer-BYYz0fjb.chunk.mjs";import{N as Pi,B as z}from"./BrowserStorage-CQYcNyYn.chunk.mjs";import{N as Bi}from"./NcSettingsSection-CEWt4eXE-BjNr3FJO.chunk.mjs";var ri={exports:{}};(function(r,m){(function(g,h){var N="1.0.39",A="",si="?",W="function",R="undefined",Z="object",P="string",ci="major",e="model",a="name",i="type",o="vendor",s="version",_="architecture",D="console",l="mobile",b="tablet",v="smarttv",E="wearable",K="embedded",J=500,B="Amazon",O="Apple",di="ASUS",bi="BlackBerry",I="Browser",j="Chrome",Ai="Edge",Y="Firefox",H="Google",li="Huawei",Q="LG",X="Microsoft",wi="Motorola",L="Opera",C="Samsung",ui="Sharp",V="Sony",ii="Xiaomi",ei="Zebra",pi="Facebook",mi="Chromium OS",fi="Mac OS",gi=" Browser",Ti=function(w,u){var d={};for(var f in w)u[f]&&u[f].length%2===0?d[f]=u[f].concat(w[f]):d[f]=w[f];return d},F=function(w){for(var u={},d=0;d<w.length;d++)u[w[d].toUpperCase()]=w[d];return u},hi=function(w,u){return typeof w===P?T(u).indexOf(T(w))!==-1:!1},T=function(w){return w.toLowerCase()},qi=function(w){return typeof w===P?w.replace(/[^\d\.]/g,A).split(".")[0]:h},oi=function(w,u){if(typeof w===P)return w=w.replace(/^\s\s*/,A),typeof u===R?w:w.substring(0,J)},M=function(w,u){for(var d=0,f,x,y,p,c,S;d<u.length&&!c;){var ai=u[d],ki=u[d+1];for(f=x=0;f<ai.length&&!c&&ai[f];)if(c=ai[f++].exec(w),c)for(y=0;y<ki.length;y++)S=c[++x],p=ki[y],typeof p===Z&&p.length>0?p.length===2?typeof p[1]==W?this[p[0]]=p[1].call(this,S):this[p[0]]=p[1]:p.length===3?typeof p[1]===W&&!(p[1].exec&&p[1].test)?this[p[0]]=S?p[1].call(this,S,p[2]):h:this[p[0]]=S?S.replace(p[1],p[2]):h:p.length===4&&(this[p[0]]=S?p[3].call(this,S.replace(p[1],p[2])):h):this[p]=S||h;d+=2}},$=function(w,u){for(var d in u)if(typeof u[d]===Z&&u[d].length>0){for(var f=0;f<u[d].length;f++)if(hi(u[d][f],w))return d===si?h:d}else if(hi(u[d],w))return d===si?h:d;return u.hasOwnProperty("*")?u["*"]:w},Di={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},vi={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},_i={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[s,[a,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[s,[a,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[a,s],[/opios[\/ ]+([\w\.]+)/i],[s,[a,L+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[s,[a,L+" GX"]],[/\bopr\/([\w\.]+)/i],[s,[a,L]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[s,[a,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[a,s],[/quark(?:pc)?\/([-\w\.]+)/i],[s,[a,"Quark"]],[/\bddg\/([\w\.]+)/i],[s,[a,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[s,[a,"UC"+I]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[s,[a,"WeChat"]],[/konqueror\/([\w\.]+)/i],[s,[a,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[s,[a,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[s,[a,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[s,[a,"Smart Lenovo "+I]],[/(avast|avg)\/([\w\.]+)/i],[[a,/(.+)/,"$1 Secure "+I],s],[/\bfocus\/([\w\.]+)/i],[s,[a,Y+" Focus"]],[/\bopt\/([\w\.]+)/i],[s,[a,L+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[s,[a,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[s,[a,"Dolphin"]],[/coast\/([\w\.]+)/i],[s,[a,L+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[s,[a,"MIUI "+I]],[/fxios\/([-\w\.]+)/i],[s,[a,Y]],[/\bqihu|(qi?ho?o?|360)browser/i],[[a,"360"+gi]],[/\b(qq)\/([\w\.]+)/i],[[a,/(.+)/,"$1Browser"],s],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[a,/(.+)/,"$1"+gi],s],[/samsungbrowser\/([\w\.]+)/i],[s,[a,C+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],s],[/metasr[\/ ]?([\d\.]+)/i],[s,[a,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[a,"Sogou Mobile"],s],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[a,s],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[a],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[a,pi],s],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[a,s],[/\bgsa\/([\w\.]+) .*safari\//i],[s,[a,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[s,[a,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[s,[a,j+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[a,j+" WebView"],s],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[s,[a,"Android "+I]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[a,s],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[s,[a,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[s,a],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[a,[s,$,Di]],[/(webkit|khtml)\/([\w\.]+)/i],[a,s],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[a,"Netscape"],s],[/(wolvic)\/([\w\.]+)/i],[a,s],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[s,[a,Y+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[a,[s,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[a,[s,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[_,"amd64"]],[/(ia32(?=;))/i],[[_,T]],[/((?:i[346]|x)86)[;\)]/i],[[_,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[_,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[_,"armhf"]],[/windows (ce|mobile); ppc;/i],[[_,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[_,/ower/,A,T]],[/(sun4\w)[;\)]/i],[[_,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[_,T]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[o,C],[i,b]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[e,[o,C],[i,l]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[e,[o,O],[i,l]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[o,O],[i,b]],[/(macintosh);/i],[e,[o,O]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[o,ui],[i,l]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[e,[o,li],[i,b]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[o,li],[i,l]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[e,/_/g," "],[o,ii],[i,l]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[e,/_/g," "],[o,ii],[i,b]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[o,"OPPO"],[i,l]],[/\b(opd2\d{3}a?) bui/i],[e,[o,"OPPO"],[i,b]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[o,"Vivo"],[i,l]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[e,[o,"Realme"],[i,l]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[o,wi],[i,l]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[o,wi],[i,b]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[o,Q],[i,b]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[o,Q],[i,l]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[e,[o,"Lenovo"],[i,b]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[e,/_/g," "],[o,"Nokia"],[i,l]],[/(pixel c)\b/i],[e,[o,H],[i,b]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[o,H],[i,l]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[o,V],[i,l]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[o,V],[i,b]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[o,"OnePlus"],[i,l]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[o,B],[i,b]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[o,B],[i,l]],[/(playbook);[-\w\),; ]+(rim)/i],[e,o,[i,b]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[o,bi],[i,l]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[o,di],[i,b]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[o,di],[i,l]],[/(nexus 9)/i],[e,[o,"HTC"],[i,b]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[o,[e,/_/g," "],[i,l]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[e,[o,"TCL"],[i,b]],[/(itel) ((\w+))/i],[[o,T],e,[i,$,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[o,"Acer"],[i,b]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[o,"Meizu"],[i,l]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[e,[o,"Ulefone"],[i,l]],[/droid.+; (a(?:015|06[35]|142p?))/i],[e,[o,"Nothing"],[i,l]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,e,[i,l]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[o,e,[i,b]],[/(surface duo)/i],[e,[o,X],[i,b]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[o,"Fairphone"],[i,l]],[/(u304aa)/i],[e,[o,"AT&T"],[i,l]],[/\bsie-(\w*)/i],[e,[o,"Siemens"],[i,l]],[/\b(rct\w+) b/i],[e,[o,"RCA"],[i,b]],[/\b(venue[\d ]{2,7}) b/i],[e,[o,"Dell"],[i,b]],[/\b(q(?:mv|ta)\w+) b/i],[e,[o,"Verizon"],[i,b]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[e,[o,"Barnes & Noble"],[i,b]],[/\b(tm\d{3}\w+) b/i],[e,[o,"NuVision"],[i,b]],[/\b(k88) b/i],[e,[o,"ZTE"],[i,b]],[/\b(nx\d{3}j) b/i],[e,[o,"ZTE"],[i,l]],[/\b(gen\d{3}) b.+49h/i],[e,[o,"Swiss"],[i,l]],[/\b(zur\d{3}) b/i],[e,[o,"Swiss"],[i,b]],[/\b((zeki)?tb.*\b) b/i],[e,[o,"Zeki"],[i,b]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[o,"Dragon Touch"],e,[i,b]],[/\b(ns-?\w{0,9}) b/i],[e,[o,"Insignia"],[i,b]],[/\b((nxa|next)-?\w{0,9}) b/i],[e,[o,"NextBook"],[i,b]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[o,"Voice"],e,[i,l]],[/\b(lvtel\-)?(v1[12]) b/i],[[o,"LvTel"],e,[i,l]],[/\b(ph-1) /i],[e,[o,"Essential"],[i,l]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[e,[o,"Envizen"],[i,b]],[/\b(trio[-\w\. ]+) b/i],[e,[o,"MachSpeed"],[i,b]],[/\btu_(1491) b/i],[e,[o,"Rotor"],[i,b]],[/(shield[\w ]+) b/i],[e,[o,"Nvidia"],[i,b]],[/(sprint) (\w+)/i],[o,e,[i,l]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[o,X],[i,l]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[o,ei],[i,b]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[o,ei],[i,l]],[/smart-tv.+(samsung)/i],[o,[i,v]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[o,C],[i,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,Q],[i,v]],[/(apple) ?tv/i],[o,[e,O+" TV"],[i,v]],[/crkey/i],[[e,j+"cast"],[o,H],[i,v]],[/droid.+aft(\w+)( bui|\))/i],[e,[o,B],[i,v]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[o,ui],[i,v]],[/(bravia[\w ]+)( bui|\))/i],[e,[o,V],[i,v]],[/(mitv-\w{5}) bui/i],[e,[o,ii],[i,v]],[/Hbbtv.*(technisat) (.*);/i],[o,e,[i,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[o,oi],[e,oi],[i,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[o,e,[i,D]],[/droid.+; (shield) bui/i],[e,[o,"Nvidia"],[i,D]],[/(playstation [345portablevi]+)/i],[e,[o,V],[i,D]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[o,X],[i,D]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[e,[o,C],[i,E]],[/((pebble))app/i],[o,e,[i,E]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[o,O],[i,E]],[/droid.+; (glass) \d/i],[e,[o,H],[i,E]],[/droid.+; (wt63?0{2,3})\)/i],[e,[o,ei],[i,E]],[/(quest( \d| pro)?)/i],[e,[o,pi],[i,E]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[i,K]],[/(aeobc)\b/i],[e,[o,B],[i,K]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[e,[i,l]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[e,[i,b]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,b]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,l]],[/(android[-\w\. ]{0,9});.+buil/i],[e,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[s,[a,Ai+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[s,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[a,s],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[s,a]],os:[[/microsoft (windows) (vista|xp)/i],[a,s],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[a,[s,$,vi]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[s,$,vi],[a,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[s,/_/g,"."],[a,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[a,fi],[s,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[s,a],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[a,s],[/\(bb(10);/i],[s,[a,bi]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[s,[a,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[s,[a,Y+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[s,[a,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[s,[a,"watchOS"]],[/crkey\/([\d\.]+)/i],[s,[a,j+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[a,mi],s],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[a,s],[/(sunos) ?([\w\.\d]*)/i],[[a,"Solaris"],s],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[a,s]]},k=function(w,u){if(typeof w===Z&&(u=w,w=h),!(this instanceof k))return new k(w,u).getResult();var d=typeof g!==R&&g.navigator?g.navigator:h,f=w||(d&&d.userAgent?d.userAgent:A),x=d&&d.userAgentData?d.userAgentData:h,y=u?Ti(_i,u):_i,p=d&&d.userAgent==f;return this.getBrowser=function(){var c={};return c[a]=h,c[s]=h,M.call(c,f,y.browser),c[ci]=qi(c[s]),p&&d&&d.brave&&typeof d.brave.isBrave==W&&(c[a]="Brave"),c},this.getCPU=function(){var c={};return c[_]=h,M.call(c,f,y.cpu),c},this.getDevice=function(){var c={};return c[o]=h,c[e]=h,c[i]=h,M.call(c,f,y.device),p&&!c[i]&&x&&x.mobile&&(c[i]=l),p&&c[e]=="Macintosh"&&d&&typeof d.standalone!==R&&d.maxTouchPoints&&d.maxTouchPoints>2&&(c[e]="iPad",c[i]=b),c},this.getEngine=function(){var c={};return c[a]=h,c[s]=h,M.call(c,f,y.engine),c},this.getOS=function(){var c={};return c[a]=h,c[s]=h,M.call(c,f,y.os),p&&!c[a]&&x&&x.platform&&x.platform!="Unknown"&&(c[a]=x.platform.replace(/chrome os/i,mi).replace(/macos/i,fi)),c},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return f},this.setUA=function(c){return f=typeof c===P&&c.length>J?oi(c,J):c,this},this.setUA(f),this};k.VERSION=N,k.BROWSER=F([a,s,ci]),k.CPU=F([_]),k.DEVICE=F([e,o,i,D,l,v,b,E,K]),k.ENGINE=k.OS=F([a,s]),r.exports&&(m=r.exports=k),m.UAParser=k;var q=typeof g!==R&&(g.jQuery||g.Zepto);if(q&&!q.ua){var G=new k;q.ua=G.getResult(),q.ua.get=function(){return G.getUA()},q.ua.set=function(w){G.setUA(w);var u=G.getResult();for(var d in u)q.ua[d]=u[d]}}})(typeof window=="object"?window:Li)})(ri,ri.exports);var ji=ri.exports;const Yi=Ii(ji),U={EMAIL_SEND_OFF:0,EMAIL_SEND_HOURLY:1,EMAIL_SEND_3HOURLY:2,EMAIL_SEND_DAILY:3,EMAIL_SEND_WEEKLY:4},Hi=[{text:t("notifications","Never"),value:U.EMAIL_SEND_OFF},{text:t("notifications","1 hour"),value:U.EMAIL_SEND_HOURLY},{text:t("notifications","3 hours"),value:U.EMAIL_SEND_3HOURLY},{text:t("notifications","1 day"),value:U.EMAIL_SEND_DAILY},{text:t("notifications","1 week"),value:U.EMAIL_SEND_WEEKLY}],Si={id:null,label:t("notifications","None")},Vi=new Yi,Ni=Vi.getBrowser(),Ei=Ni.name==="Safari"||Ni.name==="Mobile Safari",Fi={name:"UserSettings",components:{NcCheckboxRadioSwitch:Mi,NcSelect:Pi,NcSettingsSection:Bi},setup(){const r=yi(zi("notifications","config")),m=yi({secondary_speaker:z.getItem("secondary_speaker")==="true",secondary_speaker_device:JSON.parse(z.getItem("secondary_speaker_device"))??Si}),g=Oi([]);return{BATCHTIME_OPTIONS:Hi,isSafari:Ei,config:r,storage:m,devices:g}},methods:{async updateSettings(){try{const r=new FormData;r.append("batchSetting",this.config.setting_batchtime),r.append("soundNotification",this.config.sound_notification?"yes":"no"),r.append("soundTalk",this.config.sound_talk?"yes":"no"),await Ui.post(Ri("apps/notifications/api/v2/settings"),r),xi(t("notifications","Your settings have been updated."))}catch(r){ni(t("notifications","An error occurred while updating your settings.")),console.error(r)}},updateLocalSettings(){try{z.setItem("secondary_speaker",this.storage.secondary_speaker),this.storage.secondary_speaker&&this.storage.secondary_speaker_device.id?z.setItem("secondary_speaker_device",JSON.stringify(this.storage.secondary_speaker_device)):z.removeItem("secondary_speaker_device"),xi(t("notifications","Your settings have been updated."))}catch(r){ni(t("notifications","An error occurred while updating your settings.")),console.error(r)}},async initializeDevices(){if(!(!Ei&&navigator?.mediaDevices?.getUserMedia&&navigator?.mediaDevices?.enumerateDevices)||this.devices.length>0)return;let r=null;try{r=await navigator.mediaDevices.getUserMedia({audio:!0}),this.devices=(await navigator.mediaDevices.enumerateDevices()??[]).filter(m=>m.kind==="audiooutput").map(m=>({id:m.deviceId,label:m.label?m.label:m.fallbackLabel})).concat([Si])}catch(m){ni(t("notifications","An error occurred while updating your settings.")),console.error("Error while requesting or initializing audio devices: ",m)}finally{r&&r.getTracks().forEach(m=>m.stop())}}}};var $i=function(){var r=this,m=r._self._c;return m("NcSettingsSection",{attrs:{name:r.t("notifications","Notifications")}},[m("div",{staticClass:"notification-frequency__warning"},[r.config.is_email_set?r._e():m("strong",[r._v(r._s(r.t("notifications","You need to set up your email address before you can receive notification emails.")))])]),m("p",[m("label",{staticClass:"notification-frequency__label",attrs:{for:"notification_reminder_batchtime"}},[r._v(" "+r._s(r.t("notifications","Send email reminders about unhandled notifications after:"))+" ")]),m("select",{directives:[{name:"model",rawName:"v-model",value:r.config.setting_batchtime,expression:"config.setting_batchtime"}],staticClass:"notification-frequency__select",attrs:{id:"notification_reminder_batchtime",name:"notification_reminder_batchtime"},on:{change:[function(g){var h=Array.prototype.filter.call(g.target.options,function(N){return N.selected}).map(function(N){var A="_value"in N?N._value:N.value;return A});r.$set(r.config,"setting_batchtime",g.target.multiple?h:h[0])},function(g){return r.updateSettings()}]}},r._l(r.BATCHTIME_OPTIONS,function(g){return m("option",{key:g.value,domProps:{value:g.value}},[r._v(" "+r._s(g.text)+" ")])}),0)]),m("NcCheckboxRadioSwitch",{attrs:{checked:r.config.sound_notification},on:{"update:checked":[function(g){return r.$set(r.config,"sound_notification",g)},r.updateSettings]}},[r._v(" "+r._s(r.t("notifications","Play sound when a new notification arrives"))+" ")]),m("NcCheckboxRadioSwitch",{attrs:{checked:r.config.sound_talk},on:{"update:checked":[function(g){return r.$set(r.config,"sound_talk",g)},r.updateSettings]}},[r._v(" "+r._s(r.t("notifications","Play sound when a call started (requires Nextcloud Talk)"))+" ")]),r.config.sound_talk?[m("NcCheckboxRadioSwitch",{staticClass:"additional-margin-top",attrs:{checked:r.storage.secondary_speaker,disabled:r.isSafari},on:{"update:checked":[function(g){return r.$set(r.storage,"secondary_speaker",g)},r.updateLocalSettings]}},[r._v(" "+r._s(r.t("notifications","Also repeat sound on a secondary speaker"))+" ")]),r.isSafari?m("div",{staticClass:"notification-frequency__warning"},[m("strong",[r._v(r._s(r.t("notifications","Selection of the speaker device is currently not supported by Safari")))])]):r._e(),!r.isSafari&&r.storage.secondary_speaker?m("NcSelect",{attrs:{"input-id":"device-selector-audio-output",options:r.devices,label:"label","aria-label-combobox":r.t("notifications","Select a device"),clearable:!1,placeholder:r.t("notifications","Select a device")},on:{open:r.initializeDevices,input:r.updateLocalSettings},model:{value:r.storage.secondary_speaker_device,callback:function(g){r.$set(r.storage,"secondary_speaker_device",g)},expression:"storage.secondary_speaker_device"}}):r._e()]:r._e()],2)},Gi=[],Wi=Ci(Fi,$i,Gi,!1,null,"25b56fc5");const Zi=Wi.exports;ti.prototype.t=t,ti.prototype.n=n,new ti({el:"#notifications-user-settings",render:r=>r(Zi)});
