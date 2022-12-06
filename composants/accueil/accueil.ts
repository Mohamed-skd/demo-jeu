import {
  action,
  aller,
  hasard,
  recupAttrib,
  select,
  selectTout,
} from "../../app-src/js/reset.js";

export default function accueil() {
  // nav site
  const navSite = select("#nav-site")!;
  const navSiteBts = selectTout("#nav-site button");

  for (const navSiteBt of navSiteBts) {
    action(navSiteBt, "click", () => {
      const dataNav = recupAttrib(navSiteBt, ["data-nav"]);
      const cible = select(`#${dataNav[0].valeur}`)!;
      aller(cible, window, 0, navSite?.offsetHeight);
    });
  }

  // devinette
  const devForm = select("#dev-form")!;
  const devInfo = select("#dev-info")!;
  const devChoix = select("#dev-choix") as HTMLInputElement;
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
  action(devForm, "submit", (e) => {
    e.preventDefault();
    const choix = parseInt(devChoix?.value as string);

    if (isNaN(choix) || choix < 0 || choix > 100) {
      info = "Vous devez choisir un nombre entre 0 et 100 👀";
      devInfos();
      return;
    }

    if (choix === devHasard) {
      info = `Bravo 😊 ! Vous avez trouvé ${devHasard}.`;
      devReset();
    } else if (choix !== devHasard && chances === 1) {
      info = `Dommage 😢 ! Il fallait trouver ${devHasard}.`;
      devReset();
    } else if (choix < devHasard) {
      chances--;
      info = `${choix} est trop petit. Il vous reste ${chances} tentatives ✊`;
    } else if (choix > devHasard) {
      chances--;
      info = `${choix} est trop grand. Il vous reste ${chances} tentatives ✊`;
    }

    devInfos();
    devChoix.focus();
  });

  // shifumi
  const shiBot = select("#shi-bot-choix")!;
  const shiInfo = select("#shi-info p")!;
  const shiJoueur = select("#shi-joueur-choix")!;
  const shiChoix = select("#shi-choix")!;
  const shiScoreJoueur = select("#shi-score-joueur")!;
  const shiScoreBot = select("#shi-score-bot")!;
  const shiReset = select("#shi-reset")!;
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

  shiInfos();
  action(shiReset, "click", () => {
    location.assign("");
  });
  action(shiChoix, "click", (e) => {
    const choix = e.target as HTMLElement;

    if (choix.dataset.choix) {
      const choixJoueur = parseInt(choix.dataset.choix);
      const choixBot = hasard(3);

      shiJoueur.textContent = shiChoixTab[choixJoueur];
      shiBot.textContent = shiChoixTab[choixBot];

      if (
        (choixJoueur === 0 && choixBot === 2) ||
        (choixJoueur === 1 && choixBot === 0) ||
        (choixJoueur === 2 && choixBot === 1)
      ) {
        infoShi = "Gagné !";
        scoreJoueurShi++;
      } else if (
        (choixJoueur === 2 && choixBot === 0) ||
        (choixJoueur === 0 && choixBot === 1) ||
        (choixJoueur === 1 && choixBot === 2)
      ) {
        infoShi = "Perdu !";
        scoreBotShi++;
      } else {
        infoShi = "Égalité.";
      }
    }

    shiInfos();
  });
}
