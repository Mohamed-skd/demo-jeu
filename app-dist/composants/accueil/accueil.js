import { action, aller, creer, hasard, modifClass, recupAttrib, select, selectTout, } from "../../app-src/js/reset.js";
export default function accueil() {
    const mediaTaille1 = matchMedia("(min-width:40rem)");
    function navSite() {
        const navSite = select("#nav-site");
        const navSiteBts = selectTout("#nav-site button");
        for (const navSiteBt of navSiteBts) {
            action(navSiteBt, "click", () => {
                const dataNav = recupAttrib(navSiteBt, ["data-nav"]);
                const cible = select(`#${dataNav[0].valeur}`);
                aller(cible, window, 0, navSite.offsetHeight);
            });
        }
    }
    navSite();
    mediaTaille1.addEventListener("change", () => {
        navSite();
        shiMedia(mediaTaille1);
        morpMedia(mediaTaille1);
    });
    const resets = selectTout(".reset");
    for (const reset of resets) {
        action(reset, "click", () => {
            location.assign("");
        });
    }
    const copyright = select("#copyright");
    const date = new Date();
    copyright.textContent = `Tout droit réservé © ${date.getFullYear()}`;
    const devJeu = select("#dev-jeu");
    const devInfo = select("#dev-info");
    const devChoix = select("#dev-choix");
    const devHasard = hasard(101);
    let chances = 10;
    let info = `Vous devez deviner un nombre entre 0 et 100, Vous avez droit à ${chances} tentatives.`;
    function devInfos() {
        devInfo.textContent = info;
        devChoix.value = "";
    }
    function devReset() {
        devChoix.disabled = true;
        setTimeout(() => {
            location.assign("");
        }, 1000);
    }
    devInfos();
    action(devJeu, "submit", (e) => {
        e.preventDefault();
        const choix = parseInt(devChoix?.value);
        if (isNaN(choix) || choix < 0 || choix > 100) {
            info = "Vous devez choisir un nombre entre 0 et 100 👀";
            devInfos();
            return;
        }
        if (choix === devHasard) {
            info = `Bravo 😊 ! Vous avez trouvé ${devHasard}.`;
            devReset();
        }
        else if (choix !== devHasard && chances === 1) {
            info = `Dommage 😢 ! Il fallait trouver ${devHasard}.`;
            devReset();
        }
        else if (choix < devHasard) {
            chances--;
            info = `${choix} est trop petit. Il vous reste ${chances} tentatives ✊`;
        }
        else if (choix > devHasard) {
            chances--;
            info = `${choix} est trop grand. Il vous reste ${chances} tentatives ✊`;
        }
        devInfos();
        devChoix.focus();
    });
    const shiBot = select("#shi-bot-choix");
    const shiInfo = select("#shi-info p");
    const shiJoueur = select("#shi-joueur-choix");
    const shiChoix = select("#shi-choix");
    const shiScoreJoueur = select("#shi-score-joueur");
    const shiScoreBot = select("#shi-score-bot");
    const shiChoixTab = ["✊", "✋", "✌️"];
    let scoreJoueurShi = 0;
    let scoreBotShi = 0;
    let infoShi = "🍀";
    function shiInfos() {
        const emotJoueur = scoreJoueurShi > scoreBotShi ? "😊" : "😐";
        shiInfo.textContent = infoShi;
        shiScoreJoueur.textContent = `${emotJoueur} : ${scoreJoueurShi}`;
        shiScoreBot.textContent = `🤖 : ${scoreBotShi}`;
    }
    function shiMedia(mediaQuery) {
        const sects = [
            select("#shi-bot"),
            select("#shi-joueur"),
            select("#shi-score"),
        ];
        for (const sect of sects) {
            if (mediaQuery.matches) {
                modifClass(sect, "add", "colonne");
            }
            else {
                modifClass(sect, "sup", "colonne");
            }
        }
    }
    shiMedia(mediaTaille1);
    shiInfos();
    action(shiChoix, "click", (e) => {
        const choix = e.target;
        if (choix.dataset.choix) {
            const choixJoueur = parseInt(choix.dataset.choix);
            const choixBot = hasard(3);
            shiJoueur.textContent = shiChoixTab[choixJoueur];
            shiBot.textContent = shiChoixTab[choixBot];
            if ((choixJoueur === 0 && choixBot === 2) ||
                (choixJoueur === 1 && choixBot === 0) ||
                (choixJoueur === 2 && choixBot === 1)) {
                infoShi = "Gagné !";
                scoreJoueurShi++;
            }
            else if ((choixJoueur === 2 && choixBot === 0) ||
                (choixJoueur === 0 && choixBot === 1) ||
                (choixJoueur === 1 && choixBot === 2)) {
                infoShi = "Perdu !";
                scoreBotShi++;
            }
            else {
                infoShi = "Égalité.";
            }
        }
        shiInfos();
    });
    const morpGrille = select("#morp-grille");
    const morpInfo = select("#morp-info");
    const morpScoreX = select("#morp-scoreX");
    const morpScoreO = select("#morp-scoreO");
    let infoMorp = "✌️";
    let scoreXMorp = 0;
    let scoreOMorp = 0;
    let morpTourJoueur = false;
    let morpEnCours = true;
    let morpJoueur = "";
    let morpJeu = ["", "", "", "", "", "", "", "", ""];
    let morpVictoires = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    function morpInfos() {
        morpInfo.textContent = infoMorp;
        morpScoreX.textContent = `Joueur X : ${scoreXMorp}`;
        morpScoreO.textContent = `Joueur O : ${scoreOMorp}`;
    }
    function morpMedia(mediaQuery) {
        const sects = [select("#morp-score")];
        for (const sect of sects) {
            if (mediaQuery.matches) {
                modifClass(sect, "add", "colonne");
            }
            else {
                modifClass(sect, "sup", "colonne");
            }
        }
    }
    function resetMorp() {
        setTimeout(() => {
            morpEnCours = true;
            infoMorp = "✌️";
            morpJeu.map((jeu) => (jeu = ""));
            morpCases.map((elem) => (elem.textContent = ""));
            morpInfos();
        }, 1000);
    }
    for (let i = 0; i < morpJeu.length; i++) {
        const morpCase = creer("div", {
            class: "morp-case flex",
            id: `morp-case-${i}`,
        });
        morpGrille.append(morpCase);
    }
    const morpCases = selectTout(".morp-case");
    morpMedia(mediaTaille1);
    morpInfos();
    action(morpGrille, "click", (e) => {
        const choix = e.target;
        if (choix.classList.contains("morp-case")) {
            const cible = select(`#${choix.id}`);
            if (cible.textContent !== "" || !morpEnCours)
                return;
            morpTourJoueur = !morpTourJoueur;
            morpJoueur = morpTourJoueur === true ? "X" : "O";
            cible.textContent = morpJoueur;
            for (let i = 0; i < morpJeu.length; i++) {
                morpJeu[i] = morpCases[i].textContent;
            }
        }
        for (const gain of morpVictoires) {
            if (morpJeu[gain[0]] &&
                morpJeu[gain[0]] === morpJeu[gain[1]] &&
                morpJeu[gain[0]] === morpJeu[gain[2]]) {
                morpEnCours = false;
                morpJoueur === "X" ? scoreXMorp++ : scoreOMorp++;
                infoMorp = `Joueur ${morpJoueur} à gagné !`;
                resetMorp();
            }
        }
        if (!morpJeu.includes("") && morpEnCours) {
            infoMorp = "🥱";
            resetMorp();
        }
        morpInfos();
    });
}
//# sourceMappingURL=accueil.js.map