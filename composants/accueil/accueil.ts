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
  let info: string =
    "Vous devez deviner un nombre entre 0 et 100, bonne chance.";

  function devInfos() {
    devInfo.textContent = info;
  }

  devInfos();
  action(devForm, "submit", (e) => {
    e.preventDefault();
    const choix: number = parseInt(devChoix?.value as string);

    if (isNaN(choix) || choix < 0 || choix > 100) {
      info = "Vous devez choisir un nombre entre 0 et 100 👀";
    }

    if (choix === devHasard) {
      info = `Bravo ! Vous avez trouvé ${devHasard} !`;
    } else if (choix < devHasard) {
      info = `${choix} est trop petit.`;
    } else if (choix > devHasard) {
      info = `${choix} est trop grand.`;
    }

    devInfos();
  });
}
