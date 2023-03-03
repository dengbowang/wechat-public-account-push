/* eslint-disable */

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
      name: '01',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '5cu4xtpqodWp50UOqApiAQfWO1wJtXMp6nXM3mOWv7w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '02-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2023', date: '04-15',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2002-02-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-04-15' },
      ],
    },
  ],

  USERS: [
    {
      // 想要发送的人的名字
      name: '02',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oLiUI6GdcautO0op606-AUtF1gJ4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '5cu4xtpqodWp50UOqApiAQfWO1wJtXMp6nXM3mOWv7w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '02-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2023', date: '04-15',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2002-02-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-04-15' },
      ],
    },
  ],

  USERS: [
    {
      // 想要发送的人的名字
      name: '03',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oLiUI6E_oBn7CZqBcotOugsG91B8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '5cu4xtpqodWp50UOqApiAQfWO1wJtXMp6nXM3mOWv7w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '02-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2023', date: '04-15',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
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

