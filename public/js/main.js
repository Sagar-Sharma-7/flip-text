const fliptext = (str) => {
    const text = str.toLowerCase();
    const charx = {
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
        resultStr += charx[text[i]]
    }

    console.log(resultStr);
}

fliptext("flip text");