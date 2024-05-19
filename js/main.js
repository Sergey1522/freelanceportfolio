const darkModeBtn = document.querySelector(".dark-mode-btn");

if (localStorage.getItem('darkMode') === 'dark') {
  darkModeBtn.classList.add('dark-mode-btn--active');
  document.body.classList.add("dark");
}
// if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
//   darkModeBtn.classList.add('dark-mode-btn--active');
//   document.body.classList.add("dark");
// }


darkModeBtn.onclick = function() {
  darkModeBtn.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
    console.log(isDark)
  }else {
    localStorage.setItem("darkMode", "light");
    console.log(isDark)
  }
}