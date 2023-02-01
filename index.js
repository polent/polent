#!/usr/bin/env node

const RESET = "\x1b[0m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const WHITE = "\x1b[37m";

const cText = (text, color) => {
    if(color == null){
        color = WHITE;
    }
    return color + text + RESET;
}
console.log(cText("Hello!", GREEN));
console.log(cText("I'm Polent, some call me Holger!", YELLOW));
console.log(cText(`

🧾 Blog: https://polente.de
🌤 WTF: https://hellinger.wtf
🥇 Me : https://hellinger.wtf
🎸 GitHub: https://github.com/polent

`, WHITE));
console.log(cText("Have a great life!", GREEN));