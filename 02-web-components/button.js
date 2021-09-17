
class Button extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <link rel="stylesheet" href="./style.css">
        <div><p id="Text"class="n">0</p></div>
        <div>
            <button id="incrementButton" class="btn">+</button>
        </div>
        `;
        document.getElementById("incrementButton").addEventListener("click", function() {
            // presentar la cuenta de clicks realizados sobre el elemento con id "incrementButton"
            var element = document.getElementById('Text');
            var value = element.innerHTML;
            ++value;
            console.log(value)
            document.getElementById('Text').innerHTML = value;
        }, false);
    }
}
window.customElements.define("plus-button", Button);
