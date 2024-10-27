import comp from "/data/data/com.termux/files/home/my-project1/docs/.vuepress/.temp/pages/demo/qsb0zb0q/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/qsb0zb0q/\",\"title\":\"bar\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"bar\",\"createTime\":\"2024/10/19 20:34:50\",\"permalink\":\"/demo/qsb0zb0q/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/demo/bar.md\"}")
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
