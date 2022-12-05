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
  const devHasard: number = hasard(101);

  let chances: number = 10;
  let info: string = `Vous devez deviner un nombre entre 0 et 100, Vous avez droit à ${chances} tentatives.`;

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
    const choix: number = parseInt(devChoix?.value as string);

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
}
