import { defineClientConfig } from 'vuepress/client'
import YourComponent from './theme/components/your-component.vue'

// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.component('RepoCard', RepoCard)
    // app.component('CustomComponent', CustomComponent)
    app.component('your-component', YourComponent)
  },
})
