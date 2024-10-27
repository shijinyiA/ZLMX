import comp from "/data/data/com.termux/files/home/my-project1/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"config\":[{\"type\":\"banner\",\"banner\":\"/images/bj/1.png\",\"bannerMask\":{\"light\":0.1,\"dark\":0.3},\"hero\":{\"name\":\"岩王帝君\",\"tagline\":\"Emperor of the Rock King\",\"text\":null,\"actions\":[{\"text\":\"我的博客\",\"link\":\"/blog/\",\"theme\":\"brand\"},{\"text\":\"QQ\",\"link\":\"https://qm.qq.com/q/vvZdF4Boie\",\"theme\":\"alt\"}]}}],\"pageLayout\":\"home\"},\"headers\":[],\"readingTime\":{\"minutes\":0.14,\"words\":42},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
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
