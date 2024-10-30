import comp from "/data/data/com.termux/files/home/my-project1/docs/.vuepress/.temp/pages/en/demo/zkoxiazn/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/demo/zkoxiazn/\",\"title\":\"bar\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"bar\",\"createTime\":\"2024/10/20 10:18:23\",\"permalink\":\"/en/demo/zkoxiazn/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"en/notes/demo/bar.md\",\"bulletin\":false}")
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
