// types
type attributHtml = {
  nom: string;
  valeur: string | null;
};

// variables
export const html: HTMLElement = document.documentElement,
  body: HTMLElement = document.body,
  head: HTMLElement = document.head;

// fonctions
/**
 * Sélectionne un élément du DOM
 * @param {string} tag  Tag css de l'élément html
 * @returns {HTMLElement | null}
 */
export function select(tag: string): HTMLElement | null {
  return document.querySelector(tag);
}

/**
 *  Sélectionne un groupe d'éléments du DOM
 * @param {string} tag Tag css des éléments html
 * @returns {HTMLElement[]}
 */
export function selectTout(tag: string): HTMLElement[] {
  return Array.from(document.querySelectorAll(tag));
}

/**
 * Créer un élément Html
 * @param {string} tag Tag css de l'élément
 * @param {object} attrib Liste des attributs à ajouter
 * @returns {HTMLElement}
 */
export function creer(tag: string, attrib: object = {}): HTMLElement {
  const elem = document.createElement(tag);
  for (const [attr, value] of Object.entries(attrib)) {
    elem.setAttribute(attr, value);
  }
  return elem;
}

/**
 * Modifie les attributs d'un élément du DOM
 * @param {HTMLElement} elem Element du DOM à modifier
 * @param {string} modif Modification à faire - ajouter (add), supprimer (sup)
 * @param {object} attrib Liste des attributs (+valeur?)
 * @return {void}
 */
export function modifAttrib(
  elem: HTMLElement,
  modif: string,
  attrib: object = {}
): void {
  const mod: string[] = ["add", "sup"];
  if (modif === mod[0]) {
    for (const [attr, value] of Object.entries(attrib)) {
      elem.setAttribute(attr, value);
    }
  } else if (modif === mod[1]) {
    for (const [attr] of Object.entries(attrib)) {
      elem.removeAttribute(attr);
    }
  }
}

/**
 * Modifie les classes d'un élément
 * @param {HTMLElement} elem Element du DOM à modifier
 * @param {string} modif Modification à faire - ajouter (add), supprimer (sup), basculer (tog)
 * @param {string} classe Les classes modifiante
 * @return {void}
 */
export function modifClass(
  elem: HTMLElement,
  modif: string,
  classe: string
): void {
  const mod: string[] = ["add", "sup", "tog"];
  if (modif === mod[0]) {
    elem.classList.add(classe);
  } else if (modif === mod[1]) {
    elem.classList.remove(classe);
  } else if (modif === mod[2]) {
    elem.classList.toggle(classe);
  }
}

/**
 * Récupere les valeurs des attributs d'un élément
 * @param {HTMLElement} elem Element du DOM à analyser
 * @param {string[]} attrib Liste des attributs html à récupérer
 * @returns {attributHtml[]}
 */
export function recupAttrib(
  elem: HTMLElement,
  attrib: string[] = []
): attributHtml[] {
  let vals: attributHtml[] = [];
  for (const attr of attrib) {
    vals.push({
      nom: attr,
      valeur: elem.getAttribute(attr),
    });
  }
  return vals;
}

/**
 * Modifie le style d'un élément du DOM dans le html en inline
 * @param {HTMLElement} elem Element du Dom à modifier
 * @param {object} attrib Liste des styles
 * @return {void}
 */
export function style(elem: HTMLElement, attrib: object = {}): void {
  for (const [attr, val] of Object.entries(attrib)) {
    elem.style[attr as any] = val;
  }
}

/**
 * Scroll un élément du DOM dans la fenêtre
 * @param {HTMLElement} elem Element à scroller
 * @param {HTMLElement} cadre Cadre du scroll (Plus proche parent positioné, defaut: window)
 * @param {number} margeY (Optionnel) Marge verticale par rapport à la bordure haute de l'élément
 * @param {number} margeX (Optionnel) Marge horizontale par rapport à la bordure gauche de l'élément
 * @return {void}
 */
export function aller(
  elem: HTMLElement,
  cadre: (Window & typeof globalThis) | HTMLElement = window,
  margeX: number = 0,
  margeY: number = 0
): void {
  cadre.scroll(elem.offsetLeft - margeX, elem.offsetTop - margeY);
}

/**
 * Mélange les characteres d'une string
 * @param {string} string String à mélanger
 * @returns {string}
 */
export function melange(string: string): string {
  let base: string = "";
  for (let i = 0; i < string.length; i++) {
    const random = Math.floor(Math.random() * string.length);
    base += string[random];
  }
  return base;
}

/**
 * Récupère le premier mot d'une phrase
 * @param {string} string Phrase source
 * @returns {RegExpMatchArray | null}
 */
export function incipit(string: string): RegExpMatchArray | null {
  return string.match("\\w+");
}

/**
 * Retourne une string avec une majuscule sur le premier mot
 * @param string Phrase de base
 * @returns {string}
 */
export function majuscule(string: string): string {
  let base = "";
  const maj = string[0].trim().toUpperCase();
  const reste = string.substring(1);
  base = `${maj}${reste}`;

  return base.trim();
}

/**
 * Retourne un nombre entier aléatoire
 * @param {number} max Max des nombres aléatoire possible (exclu)
 * @param {number} min Min des nombres aléatoire possible (inclus, default 0)
 * @returns {number}
 */
export function hasard(max: number, min: number = 0): number {
  return Math.floor(Math.random() * max + min);
}

/**
 * Écouteur d'évènements dans le DOM
 * @param {HTMLElement} elem L'élément à écouter
 * @param {keyof HTMLElementEventMap} event L'évènement à écouter
 * @param {EventListener} func La fonction à appliquer à la détection de l'évènement
 * @param {object} opt Liste des options sup, voir : https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
 * @return {void}
 */
export function action(
  elem: HTMLElement,
  event: keyof HTMLElementEventMap,
  func: EventListener,
  opt: object = {}
): void {
  elem.addEventListener(event, func, opt);
}

/**
 * Retourne sous forme de promesse le json d'une requete fetch
 * @param {Promise} req La requete fetch
 * @returns {Promise}
 */
export async function requete(req: Promise<any>): Promise<any> {
  try {
    const info: Response = await req;
    return info.json();
  } catch (err) {
    console.log(err);
  }
}
