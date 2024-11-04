# my-vuepress-site

The Site is generated using [vuepress](https://vuepress.vuejs.org/) and [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume)

## Install

```sh
pnpm i
```

## Usage

```sh
# start dev server
pnpm docs:dev
# build for production
pnpm docs:build
# preview production build in local
pnpm docs:preview
# update vuepress and theme
pnpm vp-update
```

## Documents

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)


---
home: true
config:
  -
    type: banner
    banner: https://t.mwm.moe/pc
    bannerMask:
      light: 0.1
      dark: 0.3
    hero:
      name: 岩王帝君
      tagline: Emperor of the Rock King
      text: 
      actions:
        -
          text: 我的博客
          link: /blog/
          theme: brand
        -
          text: QQ
          link: https://qm.qq.com/q/vvZdF4Boie
          theme: alt            
  -
    type: 'your-component'
    # 1234            
  -
    type: features
    features:
      -
        title: TRSS Script
        icon: 🌌
        link: /搭建/1.md
        details: 一键安装、启动、管理项目
      -
        title: Plugins
        icon: 📖
        link: /插件/插件.md
        details: Yunzai的插件
---


