(function(b){function u(b,i,j){var i=parseInt(i),g;typeof j=="string"&&(g=j.split(/\D/),eval("var date = new Date("+g.join(",")+")"));typeof j=="object"&&(g=new Date(j.toString()));switch(b){case "y":g.setFullYear(g.getFullYear()+i);break;case "m":g.setMonth(g.getMonth()+i);break;case "d":g.setDate(g.getDate()+i);break;case "w":g.setDate(g.getDate()+7*i);break;case "h":g.setHours(g.getHours()+i);break;case "n":g.setMinutes(g.getMinutes()+i);break;case "s":g.setSeconds(g.getSeconds()+i);break;case "l":g.setMilliseconds(g.getMilliseconds()+
i)}return g}var p=window.navigator.userAgent.toLowerCase();b.browser.msie8=b.browser.msie&&/msie 8\.0/i.test(p);b.browser.msie7=b.browser.msie&&/msie 7\.0/i.test(p);b.browser.msie6=!b.browser.msie8&&!b.browser.msie7&&b.browser.msie&&/msie 6\.0/i.test(p);Date.prototype.Format=function(b){var i={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),w:"0123456".indexOf(this.getDay()),S:this.getMilliseconds()};
/(y+)/.test(b)&&(b=b.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var j in i)RegExp("("+j+")").test(b)&&(b=b.replace(RegExp.$1,RegExp.$1.length==1?i[j]:("00"+i[j]).substr((""+i[j]).length)));return b};b.fn.datepicker=function(c){function i(){b("#BBIT-DP-MP").animate({top:-193},{duration:200,complete:function(){b("#BBIT-DP-MP").hide()}});return!1}function j(){a.Year=a.cy;a.Month=a.cm+1;a.Day=1;b("#BBIT-DP-MP").animate({top:-193},{duration:200,complete:function(){b("#BBIT-DP-MP").hide()}});
r();return!1}function g(){var f=a.ty-10;a.ty=f;v(f);return!1}function p(){var f=a.ty+10;a.ty=f;v(f);return!1}function v(f){f-=4;for(var e=[],d=0;d<5;d++)e.push(f+d),e.push(f+d+5);b("#BBIT-DP-MP td.bbit-dp-mp-year").each(function(f){a.Year==e[f]?b(this).addClass("bbit-dp-mp-sel"):b(this).removeClass("bbit-dp-mp-sel");b(this).html("<a href='javascript:void(0);'>"+e[f]+"</a>").attr("xyear",e[f])})}function y(a){var e=s(a.target||a.srcElement);if(e==null)return!1;(b(e).hasClass("bbit-dp-mp-month")||b(e).hasClass("bbit-dp-mp-year"))&&
j(a);return!1}function z(f){var e=b(this),f=s(f.target||f.srcElement);if(f==null)return!1;if(b(f).hasClass("bbit-dp-mp-month")&&!b(f).hasClass("bbit-dp-mp-sel")){var d=e.find("td.bbit-dp-mp-month.bbit-dp-mp-sel");d.length>0&&d.removeClass("bbit-dp-mp-sel");b(f).addClass("bbit-dp-mp-sel");a.cm=parseInt(b(f).attr("xmonth"))}if(b(f).hasClass("bbit-dp-mp-year")&&!b(f).hasClass("bbit-dp-mp-sel"))d=e.find("td.bbit-dp-mp-year.bbit-dp-mp-sel"),d.length>0&&d.removeClass("bbit-dp-mp-sel"),b(f).addClass("bbit-dp-mp-sel"),
a.cy=parseInt(b(f).attr("xyear"));return!1}function A(){var f=b("#BBIT-DP-MP"),e=a.Year;a.cy=a.ty=e;var d=a.Month-1;a.cm=d;for(var c=b("#BBIT-DP-MP td.bbit-dp-mp-month"),h=c.length-1;h>=0;h--)b(c[h]).attr("xmonth")==d?b(c[h]).addClass("bbit-dp-mp-sel"):b(c[h]).removeClass("bbit-dp-mp-sel");v(e);f.css("top",-193).show().animate({top:0},{duration:200})}function s(a){if(a.tagName.toUpperCase()=="TD")return a;else if(a.tagName.toUpperCase()!="BODY"&&(a=b(a).parent(),a.length>0))return a[0].tagName.toUpperCase()!=
"TD"?s(a[0]):a[0];return null}function B(f){f=s(f.target||f.srcElement);if(f==null)return!1;var e=b(f);b(f).hasClass("bbit-dp-disabled")||(f=e.attr("xdate").split("-"),f=new Date(f[0],parseInt(f[1],10)-1,f[2]),a.showtime&&(e=b("#BBIT-DP-TIME").val(),/\d{2}:\d{2}:\d{2}/.test(e)||(e="00:00:00"),e=e.split(":"),e.length==3&&f.setHours(e[0],e[1],e[2])),h.data("indata",f),w());return!1}function C(){return!1}function D(){var b=h.data("indata");b!=null?(a.Year=b.getFullYear(),a.Month=b.getMonth()+1,a.Day=
b.getDate()):(a.Year=(new Date).getFullYear(),a.Month=(new Date).getMonth()+1,a.Day=(new Date).getDate())}function E(){a.Month==1?(a.Year--,a.Month=12):a.Month--;r();return!1}function F(){a.Month==12?(a.Year++,a.Month=1):a.Month++;r();return!1}function G(a){if(a.keyCode==13&&(a=b(this).val(),/\d{2}:\d{2}:\d{2}/.test(a)||(a="00:00:00"),a=a.split(":"),a.length==3)){var e=h.data("indata");e==null&&(e=new Date);e.setHours(a[0],a[1],a[2]);h.data("indata",e);w()}}function H(){var f=new Date;if(a.showtime){var e=
b("#BBIT-DP-TIME").val();/\d{2}:\d{2}:\d{2}/.test(e)||(e="00:00:00");e=e.split(":");e.length==3&&f.setHours(e[0],e[1],e[2])}h.data("indata",f);w()}function w(){var b=h.data("ctarget"),e=h.data("cpk"),d=h.data("onReturn"),c=h.data("indata"),q=h.data("ads"),g=h.data("ade"),i=!1;q&&c<q&&(i=!0);g&&c>g&&(i=!0);i||(d&&jQuery.isFunction(d)?d.call(b[0],h.data("indata")):(d=a.showtime?"yyyy-MM-dd HH:mm:ss":"yyyy-MM-dd",b.val(h.data("indata").Format(d))),e.attr("isshow","0"),h.removeData("ctarget").removeData("cpk").removeData("indata").removeData("onReturn").removeData("ads").removeData("ade"),
h.css("visibility","hidden"))}function r(){var f=b("#BBIT_DP_INNER tbody");b("#BBIT_DP_YMBTN").html(a.monthName[a.Month-1]+a.monthp+" "+a.Year);var c=new Date(a.Year,a.Month-1,1),d=a.weekStart-c.getDay(),g=a.Month-1;d>0&&(d-=7);c=u("d",d,c);u("d",42,c);for(var d=h.data("ads"),q=h.data("ade"),i=[],j=a.today.Format("yyyy-MM-dd"),l=h.data("indata"),l=l!=null?l.Format("yyyy-MM-dd"):"",m=1;m<=42;m++){m%7==1&&i.push("<tr>");var k=u("d",m-1,c),n=[],o=!1;d&&k<d&&(o=!0);q&&k>q&&(o=!0);k.getMonth()<g?n.push("bbit-dp-prevday"):
k.getMonth()>g&&n.push("bbit-dp-nextday");o?n.push("bbit-dp-disabled"):n.push("bbit-dp-active");o=k.Format("yyyy-MM-dd");o==j&&n.push("bbit-dp-today");o==l&&n.push("bbit-dp-selected");i.push("<td class='",n.join(" "),"' title='",k.Format("yyyy-MM-dd"),"' xdate='",k.Format("yyyy-M-d"),"'><a href='javascript:void(0);'><em><span>",k.getDate(),"</span></em></a></td>");m%7==0&&i.push("</tr>")}f.html(i.join(""))}var a={weekStart:0,weekName:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],
monthName:["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u5341\u4e00","\u5341\u4e8c"],monthp:"\u6708",Year:(new Date).getFullYear(),Month:(new Date).getMonth()+1,Day:(new Date).getDate(),today:new Date,btnOk:" \u786e\u5b9a ",btnCancel:" \u53d6\u6d88 ",btnToday:"\u4eca\u5929",inputDate:null,onReturn:!1,version:"1.1",showtime:!1,applyrule:!1,showtarget:null,picker:""};b.extend(a,c);var h=b("#BBIT_DP_CONTAINER");if(h.length==0){c=[];c.push("<div id='BBIT_DP_CONTAINER' class='bbit-dp' style='width:175px;z-index:999;'>");
b.browser.msie6&&c.push('<iframe style="position:absolute;z-index:-1;width:100%;height:205px;top:0;left:0;scrolling:no;" frameborder="0" src="about:blank"></iframe>');c.push("<table class='dp-maintable' cellspacing='0' cellpadding='0' style='width:175px;'><tbody><tr><td>");c.push("<table class='bbit-dp-top' cellspacing='0'><tr><td class='bbit-dp-top-left'> <a id='BBIT_DP_LEFTBTN' href='javascript:void(0);' title='\u5411\u524d\u4e00\u4e2a\u6708'>&nbsp;</a></td><td class='bbit-dp-top-center' align='center'><em><button id='BBIT_DP_YMBTN'>\u4e5d\u6708 2009</button></em></td><td class='bbit-dp-top-right'><a id='BBIT_DP_RIGHTBTN' href='javascript:void(0);' title='\u5411\u540e\u4e00\u4e2a\u6708'>&nbsp;</a></td></tr></table>");
c.push("</td></tr>");c.push("<tr><td>");c.push("<table id='BBIT_DP_INNER' class='bbit-dp-inner' cellspacing='0'><thead><tr>");for(var t=a.weekStart,x=0;x<7;x++)c.push("<th><span>",a.weekName[t],"</span></th>"),t==6?t=0:t++;c.push("</tr></thead>");c.push("<tbody></tbody></table>");c.push("</td></tr>");c.push("<tr><td class='bbit-dp-bottom' align='center'>",a.showtime?"<input type='text' value='00:00:00' maxlength='8' id='BBIT-DP-TIME' class='bbit-dp-time'/>":"","<button id='BBIT-DP-TODAY'>",a.btnToday,
"</button></td></tr>");c.push("</tbody></table>");c.push("<div id='BBIT-DP-MP' class='bbit-dp-mp'  style='z-index:auto;'><table id='BBIT-DP-T' style='width: 175px; height: 193px' border='0' cellspacing='0'><tbody>");c.push("<tr>");c.push("<td class='bbit-dp-mp-month' xmonth='0'><a href='javascript:void(0);'>",a.monthName[0],"</a></td><td class='bbit-dp-mp-month bbit-dp-mp-sep' xmonth='6'><a href='javascript:void(0);'>",a.monthName[6],"</a></td><td class='bbit-dp-mp-ybtn' align='middle'><a id='BBIT-DP-MP-PREV' class='bbit-dp-mp-prev'></a></td><td class='bbit-dp-mp-ybtn' align='middle'><a id='BBIT-DP-MP-NEXT' class='bbit-dp-mp-next'></a></td>");
c.push("</tr>");c.push("<tr>");c.push("<td class='bbit-dp-mp-month' xmonth='1'><a href='javascript:void(0);'>",a.monthName[1],"</a></td><td class='bbit-dp-mp-month bbit-dp-mp-sep' xmonth='7'><a href='javascript:void(0);'>",a.monthName[7],"</a></td><td class='bbit-dp-mp-year'><a href='javascript:void(0);'></a></td><td class='bbit-dp-mp-year'><a href='javascript:void(0);'></a></td>");c.push("</tr>");c.push("<tr>");c.push("<td class='bbit-dp-mp-month' xmonth='2'><a href='javascript:void(0);'>",a.monthName[2],
"</a></td><td class='bbit-dp-mp-month bbit-dp-mp-sep' xmonth='8'><a href='javascript:void(0);'>",a.monthName[8],"</a></td><td class='bbit-dp-mp-year'><a href='javascript:void(0);'></a></td><td class='bbit-dp-mp-year'><a href='javascript:void(0);'></a></td>");c.push("</tr>");c.push("<tr>");c.push("<td class='bbit-dp-mp-month' xmonth='3'><a href='javascript:void(0);'>",a.monthName[3],"</a></td><td class='bbit-dp-mp-month bbit-dp-mp-sep' xmonth='9'><a href='javascript:void(0);'>",a.monthName[9],"</a></td><td class='bbit-dp-mp-year'><a href='javascript:void(0);'></a></td><td class='bbit-dp-mp-year'><a href='javascript:void(0);'></a></td>");
c.push("</tr>");c.push("<tr>");c.push("<td class='bbit-dp-mp-month' xmonth='4'><a href='javascript:void(0);'>",a.monthName[4],"</a></td><td class='bbit-dp-mp-month bbit-dp-mp-sep' xmonth='10'><a href='javascript:void(0);'>",a.monthName[10],"</a></td><td class='bbit-dp-mp-year'><a href='javascript:void(0);'></a></td><td class='bbit-dp-mp-year'><a href='javascript:void(0);'></a></td>");c.push("</tr>");c.push("<tr>");c.push("<td class='bbit-dp-mp-month' xmonth='5'><a href='javascript:void(0);'>",a.monthName[5],
"</a></td><td class='bbit-dp-mp-month bbit-dp-mp-sep' xmonth='11'><a href='javascript:void(0);'>",a.monthName[11],"</a></td><td class='bbit-dp-mp-year'><a href='javascript:void(0);'></a></td><td class='bbit-dp-mp-year'><a href='javascript:void(0);'></a></td>");c.push("</tr>");c.push("<tr class='bbit-dp-mp-btns'>");c.push("<td colspan='4'><button id='BBIT-DP-MP-OKBTN' class='bbit-dp-mp-ok'>",a.btnOk,"</button><button id='BBIT-DP-MP-CANCELBTN' class='bbit-dp-mp-cancel'>",a.btnCancel,"</button></td>");
c.push("</tr>");c.push("</tbody></table>");c.push("</div>");c.push("</div>");c=c.join("");b(document.body).append(c);h=b("#BBIT_DP_CONTAINER");b("#BBIT-DP-TODAY").click(H);h.click(C).bind("resetdefdate",D);b("#BBIT_DP_INNER tbody").click(B);b("#BBIT_DP_LEFTBTN").click(E);b("#BBIT_DP_RIGHTBTN").click(F);b("#BBIT_DP_YMBTN").click(A);b("#BBIT-DP-MP").click(z).dblclick(y);b("#BBIT-DP-MP-PREV").click(g);b("#BBIT-DP-MP-NEXT").click(p);b("#BBIT-DP-MP-OKBTN").click(j);b("#BBIT-DP-MP-CANCELBTN").click(i);
b("#BBIT-DP-TIME").keypress(G)}return b(this).each(function(){var c=b(this).addClass("bbit-dp-input"),e=b(a.picker);a.showtarget==null&&c.after(e);e.click(function(){var d=b(this).attr("isshow"),e=b(this);h.css("visibility")=="visible"&&h.css(" visibility","hidden");if(d=="1")return e.attr("isshow","0"),h.removeData("ctarget").removeData("cpk").removeData("indata").removeData("onReturn"),!1;var d=c.val(),g=a.showtime?/^(\d{1,4})(-|\/|.)(\d{1,2})\2(\d{1,2})\040+(\d{1,2}):(\d{1,2}):(\d{1,2})$/:/^(\d{1,4})(-|\/|.)(\d{1,2})\2(\d{1,2})$/;
d!=""&&(d=d.match(g));d==null||d==""?(d=new Date,a.Year=d.getFullYear(),a.Month=d.getMonth()+1,a.Day=d.getDate(),a.Hour=d.getHours(),a.Minute=d.getMinutes(),a.Second=d.getSeconds(),a.inputDate=null,a.showtime&&b("#BBIT-DP-TIME").val("00:00:00")):(a.Year=parseInt(d[1],10),a.Month=parseInt(d[3],10),a.Day=parseInt(d[4],10),a.showtime?(a.Hour=parseInt(d[5],10),a.Minute=parseInt(d[6],10),a.Second=parseInt(d[7],10),a.inputDate=new Date(a.Year,a.Month-1,a.Day,a.Hour,a.Minute,a.Second),b("#BBIT-DP-TIME").val(a.inputDate.Format("HH:mm:ss"))):
a.inputDate=new Date(a.Year,a.Month-1,a.Day));h.data("ctarget",c).data("cpk",e).data("indata",a.inputDate).data("onReturn",a.onReturn);h.trigger("resetdefdate");if(a.applyrule&&b.isFunction(a.applyrule)){if(d=a.applyrule.call(c,c[0].id))d.startdate?h.data("ads",d.startdate):h.removeData("ads"),d.enddate?h.data("ade",d.enddate):h.removeData("ade")}else h.removeData("ads").removeData("ade");r();b("#BBIT-DP-T").height(h.height());var g=a.showtarget||c,d=g.offset(),g=g.outerHeight(),g={left:d.left,top:d.top+
g},i=h.width(),j=h.height(),l=document.documentElement.clientWidth,m=document.documentElement.clientHeight;if(g.left+i>=l)g.left=l-i-2;if(g.top+j>=m)g.top=d.top-j-2;if(g.left<0)g.left=10;if(g.top<0)g.top=10;b("#BBIT-DP-MP").hide();g.visibility="visible";h.css(g);b(this).attr("isshow","1");b(document).one("click",function(){e.attr("isshow","0");h.removeData("ctarget").removeData("cpk").removeData("indata");h.css("visibility","hidden")});return!1})})}})(jQuery);