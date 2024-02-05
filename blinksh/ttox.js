// Adapted from the "Moon/Dawn" Rose Pine theme https://github.com/ng-hai/rose-pine-blinksh
const setTheme = ({ matches = false }) => {
  const darkmode = matches;

  t.prefs_.set("cursor-color", "#d5d4d3");
  t.prefs_.set("foreground-color", darkmode ? "#ffffff" : "#080808");
  t.prefs_.set("background-color", darkmode ? "#1d1d1d" : "#ffffff");

  t.prefs_.set("color-palette-overrides", [
    "#3e3635", // black
    "#bd4e36", // red
    "#617934", // green
    "#896d35", // yellow
    "#4c6ebf", // blue
    "#9856b1", // magenta
    "#4c6ebf", // cyan
    "#d6d4d4", // gray
    "#655e5c", // medium gray
    "#f4ab9b", // light red
    "#8dca61", // light green
    "#ddb64f", // light yellow
    "#a2b6ee", // light blue
    "#c2b1e8", // light magenta
    "#70ceb2", // light cyan
    "#eeeded", // white
  ]);
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setTheme)

setTheme({ matches: window.matchMedia("(prefers-color-scheme: dark)").matches });
