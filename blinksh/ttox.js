
t.prefs_.set("color-palette-overrides", [
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed,
  lightGreen,
  lightYellow,
  lightBlue,
  lightMagenta,
  lightCyan,
  lightWhite,
]);

// Adapted from the "Moon/Dawn" Rose Pine theme https://github.com/ng-hai/rose-pine-blinksh
function setTheme({ matches = false }) {
  t.prefs_.set("foreground-color", matches ? dark.fg : light.fg);
  t.prefs_.set("background-color", matches ? dark.bg : light.bg);
  t.prefs_.set("cursor-color", matches ? dark.cursor : light.cursor);
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setTheme)

setTheme({ matches: window.matchMedia("(prefers-color-scheme: dark)").matches });
