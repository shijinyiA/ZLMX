import './articleTagColors.css'
export const articleTagColors = {"Plugins":"4hiq","Liunx搭建教程":"7omg","Yunzai":"uf5k","Termux搭建教程":"g9cb","Windows搭建教程":"fbi1","about Us":"hiz2","Friendly Links":"fbi1","Changelog":"wtjt","预览":"9yr8","组件":"fbi1","markdown":"sz6v"}

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
