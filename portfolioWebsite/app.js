// function typingAnimation() {
//     if(i<text.length){
//         document.getElementById("typing-text").innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typingAnimation, 65);
//     }
// }

// function onLoad(){
//     var i=0, text;
//     text =  "Tamirs-MBP:portfolioWebsite tamirhen$";
//     typingAnimation();
// }

// document.onload = onLoad();

// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["Recent Computer Science graduate from the Holon Institute of Technology including a semester abroad as part of a student exchange program. GPA: 85.\n2 years’ experience with implementing and maintaining assurance tests in a C# .NET server-side environment as a QA engineer.\nA self-taught computer “geek” with a great passion for computers and cutting-edge technology."];
// const typingDelay = 40;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } 
// }

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });


// document.getElementById('terminal-body').onclick = function() {
//     let input = document.getElementById('terminal-input');
//     // let value = contenteditable = document.querySelector('[terminal-input]'),
//     input.focus();
//     placeCaretAtEnd(input);
//     let cursor = document.querySelector(".cursor");
//     cursor.classList.add("blink");
//     cursor.classList.remove("outline-cursor");

//     let header = document.querySelector(".terminal-header");
//     header.classList.add("terminal-header-focused");    
// }

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

// document.getElementById('terminal-body').oninput = function(){
//     let cursor = document.getElementById('cursor');
//     let animation = cursor.style.animation;
//     cursor.style.animation = false;

//     sleep(5000);
//     cursor.style.animation = animation;
// }

// document.getElementById('terminal-body').addEventListener("keyup", function(event) {
//     if(event.keyCode === 13) {
//         console.log("Enter pressed");
//         let clone = document.querySelector('.default-terminal-text').cloneNode(true);
//         // document.querySelector(".terminal-text").add("br");
//         document.querySelector(".terminal-text").appendChild(clone);
//     }
// });

// document.getElementById('terminal-text').onkeydown = function(e) {
//     if(e.keyCode == 13){
//         e.preventDefault();
//         const node = document.querySelector('.default-terminal-text');
//         const clonedDefaultText = node.cloneNode(true);
//         const terminalInputDiv = document.querySelector('.terminal-input-wrapper');

//         const newInputSpan = document.createElement("span");
//         newInputSpan.classList.add("terminal-input-wrapper");
//         let newInputChild = document.createElement("span");
//         newInputChild.classList.add("terminal-input");
//         newInputChild.contentEditable = true;
//         newInputChild.spellcheck = false;
//         newInputSpan.appendChild(newInputChild);

//         terminalInputDiv.appendChild(document.createElement("br"));
//         terminalInputDiv.after(clonedDefaultText);

//         clonedDefaultText.after(newInputSpan);
//         newInputChild.focus();
//     }
// };

document.getElementsByClassName('terminal-text').onkeydown = function(e) {
    if(e.keyCode == 13) {
        
    }
}

