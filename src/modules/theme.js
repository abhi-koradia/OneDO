export function theme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.className = 'dark'
  } else {
    document.body.className = 'light'
  }
}
