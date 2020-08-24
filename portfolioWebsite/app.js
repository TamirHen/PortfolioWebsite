function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

document.body.addEventListener('click', outlineTerminal, true); 

function outlineTerminal() {
    let cursor = document.querySelector(".cursor");
    let header = document.querySelector(".terminal-header");
    cursor.classList.remove("blink");
    cursor.classList.add("outline-cursor");
    header.classList.remove("terminal-header-focused");

}

document.getElementById("terminal-body").addEventListener("overflow", function(event){
    console.log(event);
}, false);