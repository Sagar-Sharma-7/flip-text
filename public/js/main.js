// assigning const variables
const heading = document.querySelector("#heading"),
          userText = document.querySelector("#text"),
          flipBtn = document.querySelector("#flipBtn"),
          resultBox = document.querySelector(".result"),
          copyBtn = document.querySelector("#copyBtn");

// text content
heading.textContent = "Flip Text";
flipBtn.textContent = "Flip Text";
resultBox.textContent = "ɟʃıd ʇǝxʇ";
copyBtn.textContent = "Copy";


// window onload function
const alertMessage = () => {
    alert("Type your text in Lower Case.")
}



const fliptext = () => {

    const text = userText.value;
    console.log(text);
    const flipChar = {
        " ": " ",
        a : '\u0250',
        b : 'q',
        c : '\u0254', 
        d : 'p',
        e : '\u01DD',
        f : '\u025F', 
        g : '\u0183',
        h : '\u0265',
        i : '\u0131', 
        j : '\u027E',
        k : '\u029E',
        l : '\u0283',
        m : '\u026F',
        n : 'u',
        o:'o',
        p:'d',
        q:'b',
        r : '\u0279',
        s:'s',
        t : '\u0287',
        u: 'n',
        v : '\u028C',
        w : '\u028D',
        x: 'x',
        y : '\u028E',
        z: "z",
        A: "∀",
        B: "𐐒",
        C: "Ɔ",
        D: "ᗡ",
        E: "Ǝ",
        F: "Ⅎ",
        G: "⅁",
        H: "H",
        I: "I",
        J: "ſ",
        K: "ꓘ",
        L: "˥",
        M: "W",
        N: "N",
        O: "O", 
        P: "Ԁ", 
        Q: "Ꝺ", 
        R: "ꓤ", 
        S: "S", 
        T: "T", 
        U: "U", 
        V: "Ʌ", 
        W: "M", 
        X: "X", 
        Y: "Y", 
        Z: "Z", 
        '.' : '\u02D9',
        '[' : ']',
        '(' : ')',
        '{' : '}',
        '?' : '\u00BF',
        '!' : '\u00A1',
        "\'" : ',',
        '<' : '>',
        '_' : '\u203E',
        ';' : '\u061B',
        '\u203F' : '\u2040',
        '\u2045' : '\u2046',
        '\u2234' : '\u2235',
        '\r' : '\n'
    }

    let resultStr = "";
    for(let i = 0; i < text.length; i++){
        resultStr += flipChar[text[i]]
    }

    console.log(resultStr);
    resultBox.innerHTML = resultStr;
}

const copyText = () => {
    navigator.clipboard.writeText(resultBox.innerHTML);
    copyBtn.innerHTML = "Copied";
    setTimeout(() => {
        copyBtn.innerHTML = "Copy";
    }, 600);
}

flipBtn.addEventListener("click", fliptext);
alertMessage();

copyBtn.addEventListener("click", copyText)