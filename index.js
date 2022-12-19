const cringeLevel = {
    level1Words: [
        "lol", "bruh", "lmao", "kek", "cringe", "lfmao", "lmaoo", "lfmaoo",
    ],
    level1: [
        "😀", "😁", "😃", "😄", "😅", "😆", "😉",
    ],
    level2Words: [
        "kpop", "xdd", "xddd", "xdddd", "xddddd", "xdddddd", "stfu", "su", "x)", "8)", "8d",
    ],
    level2: [
        "🥱", "😴", "😒", "😜", "😝", "🥵",
    ],
    level3Words: [
        "ratio", "uwu", "owo", "uou", "ouo", "naruto", "poopy", "poop", "pp", "asked",
    ],
    level3: [
        "🤣", "😍", "😎", "😗", "😙", "🤩", "🥰", "😘", "👹", "👺", "😈", "👿", "👻", "👽", "👾", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "😫", "😭", "😨", "😱", "😰", "😡", "🤬", "🥶",
    ]
}

function Cringemeter(text) {

    if(typeof text != "string") throw new Error("The argument of Cringemeter must be a string.");

    text = text.toLowerCase();
    let textArr1 = [...text];
    let textArr2 = text.split(" ");

    let lvl1Count = (textArr1.filter(char => cringeLevel.level1.includes(char))).length + (textArr1.filter(char => cringeLevel.level1Words.includes(char))).length;
    let lvl2Count = (textArr1.filter(char => cringeLevel.level2.includes(char))).length + (textArr2.filter(char => cringeLevel.level2Words.includes(char))).length;
    let lvl3Count = (textArr1.filter(char => cringeLevel.level3.includes(char))).length + (textArr2.filter(char => cringeLevel.level3Words.includes(char))).length;

    let parameter1 = text.length;
    if(parameter1 < 10) parameter1 = 10;
    if(parameter1 > 30) parameter1 = 30;

    let parameter2 = parameter1 / 10;

    let cringeIndicator = parseFloat(( ( (lvl1Count*(1.25*parameter2)) + (lvl2Count*(1.5*parameter2)) + (lvl3Count*(1.75*parameter2)) ) / parameter1 ).toFixed(2));
    if(cringeIndicator > 1) cringeIndicator = 1.0;

    return cringeIndicator;

}

module.exports = {
    Cringemeter
 }