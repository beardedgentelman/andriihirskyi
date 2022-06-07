// increase textarea down by the text
    var textarea = document.getElementsByTagName('textarea')[0];

    textarea.addEventListener('keydown', resize);

    function resize() {
    var el = this;
    setTimeout(function() {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 1);
    }
// -------------------------------------