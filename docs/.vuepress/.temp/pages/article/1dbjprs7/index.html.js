import comp from "/data/data/com.termux/files/home/my-project1/docs/.vuepress/.temp/pages/article/1dbjprs7/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/1dbjprs7/\",\"title\":\"Markdown\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Markdown\",\"tags\":[\"markdown\"],\"createTime\":\"2024/10/19 20:34:50\",\"permalink\":\"/article/1dbjprs7/\"},\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"link\":\"#标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"link\":\"#标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.45,\"words\":734},\"filePathRelative\":\"en/preview/markdown.md\",\"categoryList\":[{\"id\":\"5ebeb6\",\"sort\":10003,\"name\":\"preview\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
