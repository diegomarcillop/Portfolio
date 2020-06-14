class Theme {
  getMode() {
    return localStorage.getItem("theme");
  }
  setMode() {
    if (this.getMode() === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  }
}
export default new Theme();