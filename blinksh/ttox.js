black = "#3E3635";
red = "#BD4E36";
green = "#617934";
yellow = "#896D35";
blue = "#4C6EBF";
magenta = "#9856B1";
cyan = "#4C6EBF";
white = "#D6D4D4";
lightBlack = "#655E5C";
lightRed = "#F4AB9B";
lightGreen = "#8DCA61";
lightYellow = "#DDB64F";
lightBlue = "#A2B6EE";
lightMagenta = "#C2B1E8";
lightCyan = "#70CEB2";
lightWhite = "#EEEDED";

dark = {
  fg: "#FFFFFF",
  bg: "#1D1D1D",
  cursor: "rgba(255, 255, 255, 0.5)",
};

light = {
  fg: "#080808",
  bg: "#FFFFFF",
  cursor: "rgba(0, 0, 0, 0.5)",
};

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
