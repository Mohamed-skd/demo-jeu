type attributHtml = {
    nom: string;
    valeur: string | null;
};
export declare const html: HTMLElement, body: HTMLElement, head: HTMLElement;
export declare function select(tag: string): HTMLElement | null;
export declare function selectTout(tag: string): HTMLElement[];
export declare function creer(tag: string, attrib?: object): HTMLElement;
export declare function modifAttrib(elem: HTMLElement, modif: string, attrib?: object): void;
export declare function modifClass(elem: HTMLElement, modif: string, classe: string): void;
export declare function recupAttrib(elem: HTMLElement, attrib?: string[]): attributHtml[];
export declare function style(elem: HTMLElement, attrib?: object): void;
export declare function aller(elem: HTMLElement, cadre?: Window & typeof globalThis, margeX?: number, margeY?: number): void;
export declare function melange(string: string): string;
export declare function incipit(string: string): RegExpMatchArray | null;
export declare function hasard(max: number, min?: number): number;
export declare function action(elem: HTMLElement, event: keyof HTMLElementEventMap, func: EventListener, opt?: object): void;
export declare function requete(req: Promise<any>): Promise<any>;
export {};
//# sourceMappingURL=reset.d.ts.map