import comp from "/data/data/com.termux/files/home/my-project1/docs/.vuepress/.temp/pages/en/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/blog/\",\"title\":\"Blog\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Blog\",\"draft\":true},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"type\":\"blog\"}")
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
