export const html = document.documentElement, body = document.body, head = document.head;
export function select(tag) {
    return document.querySelector(tag);
}
export function selectTout(tag) {
    return Array.from(document.querySelectorAll(tag));
}
export function creer(tag, attrib = {}) {
    const elem = document.createElement(tag);
    for (const [attr, value] of Object.entries(attrib)) {
        elem.setAttribute(attr, value);
    }
    return elem;
}
export function modifAttrib(elem, modif, attrib = {}) {
    const mod = ["add", "sup"];
    if (modif === mod[0]) {
        for (const [attr, value] of Object.entries(attrib)) {
            elem.setAttribute(attr, value);
        }
    }
    else if (modif === mod[1]) {
        for (const [attr] of Object.entries(attrib)) {
            elem.removeAttribute(attr);
        }
    }
}
export function modifClass(elem, modif, classe) {
    const mod = ["add", "sup", "tog"];
    if (modif === mod[0]) {
        elem.classList.add(classe);
    }
    else if (modif === mod[1]) {
        elem.classList.remove(classe);
    }
    else if (modif === mod[2]) {
        elem.classList.toggle(classe);
    }
}
export function recupAttrib(elem, attrib = []) {
    let vals = [];
    for (const attr of attrib) {
        vals.push({
            nom: attr,
            valeur: elem.getAttribute(attr),
        });
    }
    return vals;
}
export function style(elem, attrib = {}) {
    for (const [attr, val] of Object.entries(attrib)) {
        elem.style[attr] = val;
    }
}
export function aller(elem, cadre = window, margeX = 0, margeY = 0) {
    cadre.scroll(elem.offsetLeft - margeX, elem.offsetTop - margeY);
}
export function melange(string) {
    let base = "";
    for (let i = 0; i < string.length; i++) {
        const random = Math.floor(Math.random() * string.length);
        base += string[random];
    }
    return base;
}
export function incipit(string) {
    return string.match("\\w+");
}
export function hasard(max, min = 0) {
    return Math.floor(Math.random() * max + min);
}
export function action(elem, event, func, opt = {}) {
    elem.addEventListener(event, func, opt);
}
export async function requete(req) {
    try {
        const info = await req;
        return info.json();
    }
    catch (err) {
        console.log(err);
    }
}
//# sourceMappingURL=reset.js.map