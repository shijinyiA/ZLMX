import CodeDemo from "/data/data/com.termux/files/home/my-project1/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_markdown-it@14.1.0_sass-embedded@1.80.3_typescript@5.6_ymtf2dhqpgyvns6ur2zt4lrupa/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/data/data/com.termux/files/home/my-project1/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_markdown-it@14.1.0_sass-embedded@1.80.3_typescript@5.6_ymtf2dhqpgyvns6ur2zt4lrupa/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
