function setHtmlFontSize () {
  const width = window.innerWidth
  // 设计宽度320px 6.4rem = 320px = innerWidth
  document.getElementsByTagName('html')[0].style.fontSize = width / 3.2 + 'px'
}

window.addEventListener('resize', () => {
  setHtmlFontSize()
})

setHtmlFontSize()
