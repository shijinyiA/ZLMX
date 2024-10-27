import comp from "/data/data/com.termux/files/home/my-project1/docs/.vuepress/.temp/pages/en/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/demo/\",\"title\":\"demo\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"demo\",\"createTime\":\"2024/10/20 10:18:23\",\"permalink\":\"/en/demo/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"en/notes/demo/README.md\"}")
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
