
import { useCopyCode } from '/data/data/com.termux/files/home/my-project1/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.111_typescript@5.6.3_vue@3.5.12_typescript@5.6.3__vue_nmwpawfbb2lczzselugxgurs3m/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from '/data/data/com.termux/files/home/my-project1/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.111_typescript@5.6.3_vue@3.5.12_typescript@5.6.3__vue_nmwpawfbb2lczzselugxgurs3m/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
