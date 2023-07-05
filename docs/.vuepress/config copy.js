// .vuepress/config.js
module.exports = {
    themeConfig: {
      logo: '/assets/img/blog-03.png',
    //   navbar: false,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
                {text:'Group1',items:[
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
                ]},
                {text:'Group2',items:[
                    { text: 'Home', link: '/md/java/base/IO流.md' },
                    { text: 'Guide', link: '/about' },
                ]}
            ]
          },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar:{
        "/md/java/base/": genBarJavaCore(),
      }


    }


  }
  
    // java-core
function genBarJavaCore() {
return [
{
    title: "基础技术",
    collapsable: false,
    sidebarDepth: 0,
    children: [
        "IO流.md",
        // "2019-12-21-[有点干货]JDK、CGLIB动态代理使用以及源码分析.md",
        // "2020-01-06-[源码分析]咋嘞？你的IDEA过期了吧！加个Jar包就破解了，为什么？.md",
        // "2020-01-18-似乎你总也记不住，byte的取值范围是 -127~128 还是 -128~127.md",
        // "2020-03-07-这种场景你还写ifelse你跟孩子坐一桌去吧.md",
        // "2020-05-05-汉字不能编程？别闹了，只是看着有点豪横！容易被开除！.md",
        // "2020-11-22-鹿鼎记 · 韦小宝，丽春院、天地会、入皇宫等五个场景，搭配不同剧情讲解多线程和锁，真香！.md",
        // "2021-04-21-一个Bug，让我发现了 Java 界的AJ锥！.md"
    ]
}
]
}
