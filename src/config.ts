const WEBSITE_SORTS: WebsiteSort[] = [
  { id: 1, title: "智哲AI" },
  // { id: 2, title: "示例分类2" },
  // { id: 3, title: "示例分类3" },
  // { id: 4, title: "示例分类4" },
  // { id: 5, title: "示例分类5" },
  // { id: 6, title: "友情链接" },
];

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    sortId: 1,
    title: "导航首页",
    url: "https://home.zhizhe.fun",
    description: "收藏不迷路-有效期至2027",
    icon: "https://at.alicdn.com/t/c/font_4480655_8sepqaak4ve.css",
    color: "#0171CD",
  },
  {
    sortId: 1,
    title: "智哲AI-国外中转",
    description: "国外节点访问",
    url: "https://chat.zhizhe.fun/zh",
    icon: "https://at.alicdn.com/t/c/font_4480655_8sepqaak4ve.css",
    color: "#cdca01",
  },
  {
    sortId: 1,
    title: "智哲AI-国内中转",
    description: "国内节点访问",
    url: "https://chat.zhizhe.fun/zh",
    icon: "https://at.alicdn.com/t/c/font_4480655_8sepqaak4ve.css",
    color: "#cdca01",
  },
  // {
  //   sortId: 1,
  //   title: "智哲AI-备用地址",
  //   description: "建议收藏首页",
  //   url: "http://zhizhe.v6.rocks/zh",
  //   icon: "https://at.alicdn.com/t/c/font_4480655_8sepqaak4ve.css",
  //   color: "#52cb49",
  // },
  {
    sortId: 1,
    title: "Libertad's Blog",
    description: "Libertad 的博客",
    url: "https://blog.zhizhe.fun/",
    // icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
    icon: "../../tmp/logo.jpg",
    color: "#ad902d",
  },
];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  FOREIGN_WISDOM_WISDOM: "智哲AI",
  DOMESTIC_WISDOM_WISDOM: "智哲AI",
  /**
   * 个人博客链接
   */
  FOREIGN_WISDOM_WISDOM_URL: "https://chat.zhizhe.fun/zh",
  DOMESTIC_WISDOM_WISDOM_URL: "https://gpt.zhizhe.fun/zh",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/fanzhefanzhe",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  // ICP: "京ICP证000001号",
  // ICP_URL: "https://beian.miit.gov.cn/",
  // FOOTER_INFO: true,
  ICP: "因智哲AI原域名(chat.fzgo.me)于3.26到期,故搭建首页导航!请大家及时收藏",
  ICP_URL: "https://home.zhizhe.fun",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * 网站分类列表
   */
  WEBSITE_SORTS,
  /**
   * 网站分类列表
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "智哲首页",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
