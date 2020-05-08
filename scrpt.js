window.onload = (event) => {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    dele();
};

function dele() {
    var forum_activity = $(".mod-forum-activity");
    var i;
    for (i = 0; i < forum_activity.length; i++) {
        forum_activity[i].remove();
    }
    setInterval(function(){ dele(); }, 500);
}
