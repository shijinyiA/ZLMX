import comp from "/data/data/com.termux/files/home/my-project1/docs/.vuepress/.temp/pages/article/7hts7wfy/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/7hts7wfy/\",\"title\":\"关于我们\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于我们\",\"createTime\":\"2024/10/19 09:33:44\",\"sticky\":\"number\",\"tags\":[\"about Us\"],\"permalink\":\"/article/7hts7wfy/\"},\"headers\":[{\"level\":2,\"title\":\"作者简介\",\"slug\":\"作者简介\",\"link\":\"#作者简介\",\"children\":[]}],\"readingTime\":{\"minutes\":0.4,\"words\":119},\"filePathRelative\":\"更多/关于我们.md\",\"categoryList\":[{\"id\":\"0ec9ea\",\"sort\":10002,\"name\":\"更多\"}]}")
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
