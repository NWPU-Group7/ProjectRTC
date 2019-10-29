//判断是否为安卓端
var userAge = navigator.userAgent;
var isAndroid = userAge.indexOf('Android') > -1 || userAge.indexOf('Adr') > -1;
var data = { isAndroi: isAndroid };

window.onload = function(){
    var main = document.getElementsByTagName('body')[0].innerHtml;
    //var html=ejs.render('<%if(isAndroid){%>',data);
    var html = ejs.render(main, data)
    //document.body.insertBefore(main,html);
    document.body.getElementsByTagName('body')[0].innerHtml = html;
};