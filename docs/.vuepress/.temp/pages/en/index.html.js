import comp from "/data/data/com.termux/files/home/my-project1/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"config\":[{\"type\":\"banner\",\"banner\":\"https://img.vinua.cn/images/IqcrJ.jpg\",\"bannerMask\":{\"light\":0.1,\"dark\":0.3},\"hero\":{\"name\":\"岩王帝君\",\"tagline\":\"Emperor of the Rock King\",\"text\":null,\"actions\":[{\"text\":\"我的博客\",\"link\":\"/blog/\",\"theme\":\"brand\"},{\"text\":\"QQ\",\"link\":\"https://github.com/pengzhanbo\",\"theme\":\"alt\"}]}}],\"pageLayout\":\"home\"},\"headers\":[],\"readingTime\":{\"minutes\":0.14,\"words\":43},\"filePathRelative\":\"en/README.md\",\"categoryList\":[]}")
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
