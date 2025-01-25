import "./polyfills";

export function setTheme(dark = !document.body.classList.contains("dark")) {
    const oldTheme = getTheme();
    const newTheme = dark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);

    // temporarily disable transitions to avoid color transitions
    document.body.classList.add("disable-transitions");

    document.body.classList.add(newTheme);
    document.body.classList.remove(oldTheme);

    setImmediate(() => document.body.classList.remove("disable-transitions"));

    document.dispatchEvent(new Event("themechange"));

    console.log("Switched theme to", newTheme);
    return dark;
}

export function getTheme() {
    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
        currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
    }

    return currentTheme;
}
