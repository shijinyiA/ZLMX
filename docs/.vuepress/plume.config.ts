import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://img.vinua.cn/images/IBCyQ.jpg',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',
  
  footer: {
  message: '©2024 By 岩王帝君版权所有保留一切解释权利<span style="display: inline-flex;vertical-align: middle;margin-right:4px;"><img src="https://img.vinua.cn/images/Iqf4j.png"width="16px"><code class="html"></span><a href="https://beian.mps.gov.cn/#/query/webSearch?code=51072502110071">川公网安备51072502110071号',
  copyright: '<span style="display: inline-flex;vertical-align: middle;margin-right:4px;"><img src="https://img.vinua.cn/images/Iq2ZV.png"width="16px"><code class="html"><a href="https://beian.miit.gov.cn/#/home">蜀ICP备2024093216号',
},  
  appearance: true,

  social: [
    { icon: 'qq', link: '/' },
  ],

  locales: {
    '/': {
      profile: {
        avatar: 'https://img.vinua.cn/images/IBCyQ.jpg',
        name: '岩王帝君的Blog',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {
      profile: {
        avatar: 'https://img.vinua.cn/images/IBCyQ.jpg',
        name: 'blog',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
  },
})
