import comp from "/data/data/com.termux/files/home/my-project1/docs/.vuepress/.temp/pages/article/45oyj7bz/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/45oyj7bz/\",\"title\":\"自定义组件\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"自定义组件\",\"tags\":[\"预览\",\"组件\"],\"createTime\":\"2024/10/19 20:34:50\",\"permalink\":\"/article/45oyj7bz/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"en/preview/custom-component.example.md\",\"categoryList\":[{\"id\":\"5ebeb6\",\"sort\":10003,\"name\":\"preview\"}]}")
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
