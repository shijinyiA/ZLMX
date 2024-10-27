import { defineClientConfig } from 'vuepress/client'
import Tabs from '/data/data/com.termux/files/home/my-project1/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.111_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.1_kp2oqh3ru3vadd7a5kosv2v6zu/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/data/data/com.termux/files/home/my-project1/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.111_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.1_kp2oqh3ru3vadd7a5kosv2v6zu/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/data/data/com.termux/files/home/my-project1/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.111_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.1_kp2oqh3ru3vadd7a5kosv2v6zu/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from '/data/data/com.termux/files/home/my-project1/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.111_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.1_kp2oqh3ru3vadd7a5kosv2v6zu/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
