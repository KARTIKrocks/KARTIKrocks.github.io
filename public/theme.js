;(function () {
  const STORAGE_KEY = 'theme'
  const root = document.documentElement
  const storedTheme = localStorage.getItem(STORAGE_KEY)
  const systemTheme = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  const theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : systemTheme

  root.dataset.theme = theme
  root.style.colorScheme = theme
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'light' ? '#f6f7f8' : '#0e1014')
})()
