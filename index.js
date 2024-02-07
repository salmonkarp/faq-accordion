function toggleAnswer(container) {
    let element = container.querySelector('svg');
    if(element.className.baseVal == 'plus') {
        let answerDivList = document.querySelectorAll('.qa-q-container');
        answerDivList.forEach(function(elementx) {
            let element2 = elementx.querySelector('svg');
            element2.innerHTML = "<path fill='#AD28EB' d='M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z'/>";
            element2.className.baseVal = 'plus'
            let answerDiv = element2.parentNode.nextElementSibling;
            answerDiv.setAttribute('hidden','true');
        })
        element.innerHTML = "<path fill='#301534' d='M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z'/>"
        element.className.baseVal = 'minus'
        let answerDiv = element.parentNode.nextElementSibling;
        answerDiv.removeAttribute('hidden');
    }
    else {
        element.innerHTML = "<path fill='#AD28EB' d='M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z'/>";
        element.className.baseVal = 'plus'
        let answerDiv = element.parentNode.nextElementSibling;
        answerDiv.setAttribute('hidden','true');
    }
}


document.addEventListener("keydown", function(event) {
    var focusableElements = document.querySelectorAll(".focusable");
    var index = Array.prototype.indexOf.call(focusableElements, document.activeElement);
    
    if (event.key === "ArrowDown" || event.key === "ArrowRight" ) {
    focusableElements[(index + 1) % focusableElements.length].focus();
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    focusableElements[(index - 1 + focusableElements.length) % focusableElements.length].focus();
    } else if (event.key === 'Enter') {
        toggleAnswer(document.activeElement);
    }
});