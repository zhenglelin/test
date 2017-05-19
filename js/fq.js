/*发起众筹*/
service = function(id, _top, _right) {
    var me = id.charAt ? document.getElementById(id) : id, d1 = document.body, d2 = document.documentElement;
    d1.style.height = d2.style.height = '100%'; me.style.top = _top ? _top + 'px' : 0; me.style.right = _right + "px"; 
    me.style.position = 'absolute';
    me.style.display = 'block';
    setInterval(function() { me.style.top = parseInt(me.style.top) + (Math.max(d1.scrollTop, d2.scrollTop) + _top - parseInt(me.style.top)) * 0.1 + 'px'; }, 10 + parseInt(Math.random() * 20));
    return arguments.callee;
};

$(document).ready(function() {
    var html = '';
    html += '<a href="../发起众筹/发起众筹.html" class="launch" id="service">';
	html += '<i>+</i>发起众筹';
	html += '</a>';
	
    $(document.body).append(html);

    o = document.getElementById("service");
    i = parseInt(o.style.right);
	
    service('service', 250, 14 );
});
