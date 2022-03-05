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
    ]
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
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
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
              "icon": "reco-github"
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
  }
}
