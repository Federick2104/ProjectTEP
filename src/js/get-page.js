export const getPage = () => {
  let page = window.location.href
  page = page.split('/')
  page = page[page.length - 1]
  return page.split('.')[0] || 'home'
}
