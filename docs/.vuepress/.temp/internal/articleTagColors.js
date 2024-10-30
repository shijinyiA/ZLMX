import './articleTagColors.css'
export const articleTagColors = {"Plugins":"cxh3","Liunx搭建教程":"9ndj","Yunzai":"j2b3","Termux搭建教程":"nh51","Windows搭建教程":"rf0x","about Us":"0147","Friendly Links":"rf0x","Changelog":"v4c2","预览":"oogn","组件":"rf0x","markdown":"ri9f"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
