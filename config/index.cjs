
// 你可以不断按格式往下增加
// ...
/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx52e2e96a98fd52e5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '68755fc67a2cdcd99453578fb84444b4',

  PROVINCE: '陕西',
  CITY: '西安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '00',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '5cu4xtpqodWp50UOqApiAQfWO1wJtXMp6nXM3mOWv7w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2002-02-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-04-15' },
      ],
    },

    {
      // 想要发送的人的名字
      name: '02',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oLiUI6GdcautO0op606-AUtF1gJ4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '5cu4xtpqodWp50UOqApiAQfWO1wJtXMp6nXM3mOWv7w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2002-02-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-04-15' },
      ],
    },


    {
      // 想要发送的人的名字
      name: '03',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '5cu4xtpqodWp50UOqApiAQfWO1wJtXMp6nXM3mOWv7w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2002-02-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-04-15' },
      ],
    },


  ],

}

module.exports = USER_CONFIG

