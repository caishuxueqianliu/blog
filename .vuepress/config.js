module.exports = {
  "base":"/",
  "title": "liuhao",
  "description": "",
  "dest": "blog",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ["script", { src: "/assets/js/bodyClick.js" }]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Test",
      //   "link": "/test/",
      //   "icon": "reco-date"
      // },
      // {
      //   "text": "Category",
      //   "icon": "reco-category",
      //   "items": [
      //     {
      //       "text": "category1",
      //       "link": "/blogs/category1/"
      //     },
      //     {
      //       "text": "category2",
      //       "link": "/blogs/category2/"
      //     },
      //     {
      //       "text": "category3",
      //       "link": "/blogs/category3/"
      //     },
      //   ]
      // },
      {
        "text": "项目展示",
        "icon": "reco-message",
        "link": "https://www.liuhao.website",
      },
      {
        "text": "Github",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/caishuxueqianliu",
            "icon": "reco-github"
          },
            {
              "text": "Gitee",
              "link": "https://gitee.com/caishuxueqianliu",
              "icon": "reco-mayun"
            }
        ]
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "GitLink": [
      {
        "title": "Github",
        "desc": "Enjoy when you can, and endure when you must.",
        // "email": "1156743527@qq.com",
        "link": "https://github.com/caishuxueqianliu",
      },
      {
        "title": "Gitee",
        "desc": "人生如逆旅 我亦是行人",
        // "avatar": "/avatar.jpg",
        "link": "https://github.com/caishuxueqianliu",
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "liuhao",
    "authorAvatar": "/avatar.png",
    "record": "记录学习",
    "startYear": "2019"
   },
  "markdown": {
    "lineNumbers": true
  },

  "plugins": [
    ["sakura", {
      num: 10,  // 默认数量
      show: true,
      zIndex: 2,
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '/sakura.png'     // 绝对路径
      }
    }],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: 1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["z16" ],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "30px",
          bottom: "0px",
          zIndex: 99999,
          pointerEvents: 'none'
        }
      }
    ],
    [
      "@vuepress-reco/comments",
      {
        solution: 'valine',
        options: {
          appId: 'GYR0FuIvlJ2OEJmBiioM35H1-gzGzoHsz',
          appKey: 'JMWhXbHiJDmlfCM9l785xHG3',
        }
      }
    ],
        [
          "meting",
          {
            meting: {
              server: "netease", // netease:网易云，tencent:qq音乐，xiami:虾米音乐
              type: "playlist",
              mid: "歌单或音乐id",
            },
            aplayer: {
              autoplay: true,
              mini: true,
              theme: '#282c34'
            },
            mobile: {
              cover: false,
              lrc: false
            }
          }
        ]
    // ['go-top'],
    // [
    //   "dynamic-title",
    //   {
    //     showIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
    //     showText: "欢迎回来 O(∩_∩)O~",
    //     hideIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
    //     hideText: "失联中。。。快回来~",
    //     recoverTime: 2000
    //   }
    // ],
    [
      'vuepress-plugin-helper-live2d', {
      // 是否开启控制台日志打印(default: false)
      log: false,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)
        model: 'koharu',
        display: {
          position: "left", // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
          hOffset: 65, //  水平偏移(default: 65)
          vOffset: 0, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 1 // 模型透明度(default: 0.8)
        }
      }
    }
    ]
  ]
}
