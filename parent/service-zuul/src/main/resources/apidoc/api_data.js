define({ "api": [
  {
    "version": "1.0.0",
    "group": "gift",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/gift/getList",
    "title": "礼物列表",
    "name": "getList",
    "description": "<blockquote> <p>点击送礼按钮，进入礼物列表</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "giftId",
            "description": "<p>礼物ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "giftName",
            "description": "<p>礼物名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "giftImg",
            "description": "<p>礼物图片 地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "giftPrice",
            "description": "<p>礼物价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "specialStyle",
            "description": "<p>特效方式</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IGiftService.java",
    "groupTitle": "礼物API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/gift/getList"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "gift",
    "permission": [
      {
        "name": "IM"
      }
    ],
    "type": "POST",
    "url": "/gift/sendBombScreen/{zbId}",
    "title": "发送飞屏",
    "name": "sendBombScreen",
    "description": "<blockquote> <p>在聊天窗口，选择飞屏，发送飞屏消息</br> 待定：IM实现？还是API实现？</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msgText",
            "description": "<p>飞屏内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "diamondBalance",
            "description": "<p>用户钻石余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "cost",
            "description": "<p>消费金额</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IGiftService.java",
    "groupTitle": "礼物API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/gift/sendBombScreen/{zbId}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "gift",
    "permission": [
      {
        "name": "IM"
      }
    ],
    "type": "POST",
    "url": "/gift/sendGift/{zbId}",
    "title": "发送礼物",
    "name": "sendGift",
    "description": "<blockquote> <p>在礼物列表，选好礼物跟价格，发送礼物</br> 待定：IM实现？还是API实现？</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "giftId",
            "description": "<p>礼物id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "giftNum",
            "description": "<p>礼物数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "diamondBalance",
            "description": "<p>用户钻石余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "cost",
            "description": "<p>消费金额</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IGiftService.java",
    "groupTitle": "礼物API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/gift/sendGift/{zbId}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "index",
    "type": "GET",
    "url": "/index/{category}/getBannerList",
    "title": "直播首页Banner列表",
    "name": "getBannerList",
    "description": "<blockquote> <p>需要显示Banner的模块：最新、最热</br> category 房间分类：1=最热（默认）、2=收藏、3=最新、4=付费、5=游戏</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>BannerID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Banner标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumb_img_url",
            "description": "<p>Banner图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>跳转地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url_type",
            "description": "<p>Banner跳转类型（1:链接 2:应用内界面 3:指定视频）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态（1=正常、0=删除）</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IIndexService.java",
    "groupTitle": "直播首页API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/index/{category}/getBannerList"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "index",
    "type": "GET",
    "url": "/index/{category}/getIndexList/{position}/{pageSize}",
    "title": "房间列表",
    "name": "getIndexList",
    "description": "<blockquote> <p>房间分类：1=最热（默认）、2=收藏、3=最新、4=付费、5=游戏 </br> 【最热=1】：砖石数排序（大-小）,主播昵称、直播标题、房间类型（若普通房间收费模式不现实）、房间人数（真实人数和机器人数）、网络状态（API不提供）</br> 【最新=3】：主播开播时间（近-远）排序，主播昵称、房间类型、房间人数（真实人数和机器人数）、网络状态（API不提供）</br> 【收藏=2】：显示关注后的主播房间,顺序直播类型-录播类型</br> (1)直播类型=砖石数排序（大-小）,直播状态、房间人数、主播昵称、开播信息、网络状态、收费模式（普通房间不显示）</br> (2)录播类型=发布日期（近-远），被观看次数、收费价格（普通房间不显示）、主播昵称、开播信息</br> 【付费=4】：砖石数排序（大-小）,开播标题、房间类型、房间人数（真实人数和机器人数）、网络状态（API不提供）</br> 【游戏=5】：房间游戏投注数排序（大-小）,主播昵称、开播标题、游戏类型、参与人数（如上第二条解释）、网络状态（API不提供）</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "rows",
            "description": "<p>rows-&gt;row</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "row.roomId",
            "description": "<p>房间ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "row.zbId",
            "description": "<p>主播ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "row.roomPlanId",
            "description": "<p>房间场次ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.zbNickName",
            "description": "<p>主播昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.zbHeadImg",
            "description": "<p>主播头像</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.zbLevel",
            "description": "<p>主播等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.roomTitle",
            "description": "<p>房间标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.roomType",
            "description": "<p>房间类型：'normal=普通房间','ticket=门票房间','time=时常房间','personal=私密房间','game=游戏房间'</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "row.onlineUser",
            "description": "<p>真实在线用户</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "row.machineUser",
            "description": "<p>机器用户</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "row.viewCount",
            "description": "<p>总浏览次数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "row.watchCount",
            "description": "<p>总观看次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.roomBackgroundImg",
            "description": "<p>房间背景图片</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "row.roomStatus",
            "description": "<p>直播状态： 1=直播中，2=未开播，3=回放中</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "row.startTime",
            "description": "<p>房间开播时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "row.gameIcon",
            "description": "<p>游戏图标</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.playUrl",
            "description": "<p>录像回放地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "row.isCharge",
            "description": "<p>是否收费   0=不收费，1=收费</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IIndexService.java",
    "groupTitle": "直播首页API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/index/{category}/getIndexList/{position}/{pageSize}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "index",
    "type": "GET",
    "url": "/index/{category}/getMsgNotificationList",
    "title": "公告消息列表",
    "name": "getMsgNotificationList",
    "description": "<blockquote> <p>需要显示MsgNotification的模块：最新、最热</br> category 房间分类：1=最热（默认）、2=收藏、3=最新、4=付费、5=游戏</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>公告消息ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>公告消息内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>点击事件</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IIndexService.java",
    "groupTitle": "直播首页API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/index/{category}/getMsgNotificationList"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "mgr",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "POST",
    "url": "/mgr/{zbId}/createRoom?token=xxxxxx",
    "title": "后台开播自定义房间",
    "name": "createRoom",
    "description": "<blockquote> <p>后台开播API - 获取开播信息+开播接口\t</br> 运营账号登陆后台，创建自定义直播房间界面业务流程</br> （1）验证参数：是否合法</br> A.  验证管理平台Token，查询qvod_admin_users的remember_token字段</br> B .  验证主播ID</br> （2）获取IM与Media地址：</br> A.  Media地址后台输入</br> B.  如果拿不到地址，IM=null接口正常返回，不中断</br> C.  如果拿到地址，存入缓存zb_t_room_conf，用户看直播的时候直接重新拿推荐地址，一个地址绑定一个主播</br> （3）维护表：qvod_zb_t_room</br> A.如果无房间，创建房间，status=0（创建中）初始化房间zbId,status,createTime</br> B.如果有房间，继续（4-7）</br> （4）验证房间状态：</br> A.未开播（=2）继续（5-7）</br> B.直播中（=1），更新DB+缓存直播标题 等数据,  直接返回</br> （5）获取主播权限：</br> A.判断主播是否被禁播；UI弹出提示框</br> B.判断是否拥有 时常房间、门票房间、私密房间、游戏房间的开播权限</br> （6）获取房间属性：</br> A. 参数获取—UI动态配置开播时间、持续时间、门票价格数据等</br> B. 参数校验</br></p>    <p>  （7）维护表：zb_t_room_plan</br>      A.  新增admin字段，管理平台用户创建；如果为空，代表直播用户创建</br>     B. 查询当前房间场次，确保缓存中没场次（用户没有直播），在进行场次的创建，场次status=房间status</br>      C.  创建场次，存储到缓存 房间信息，主播信息（主播昵称、等级、主播头像等），房间属性配置信息，场次信息</br>     D.  如果是私密房间，更新用户预约表zb_t_user_personal的邀请时间，已经房间预约信息</br> （8）组件返回值：</br></blockquote>",
    "parameter": {
      "fields": {
        "ticket": [
          {
            "group": "ticket",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>目前房间类型只支持normal和ticket</p>"
          },
          {
            "group": "ticket",
            "type": "String",
            "size": "0..10",
            "optional": false,
            "field": "roomTitle",
            "description": "<p>房间标题</p>"
          },
          {
            "group": "ticket",
            "type": "Long",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间（时间戳）</p>"
          },
          {
            "group": "ticket",
            "type": "Integer",
            "optional": false,
            "field": "activityTime",
            "description": "<p>请输入值</p>"
          },
          {
            "group": "ticket",
            "type": "Integer",
            "optional": false,
            "field": "price",
            "description": "<p>请输入值</p>"
          },
          {
            "group": "ticket",
            "type": "Integer",
            "optional": false,
            "field": "playUrl",
            "description": "<p>推流地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "planId",
            "description": "<p>场次Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roomStatus",
            "description": "<p>0=创建，1=直播中，2=未开播，3=回放中</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>开播成功或失败</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IMgrService.java",
    "groupTitle": "管理平台API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/mgr/{zbId}/createRoom?token=xxxxxx"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "platform",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/platform/im/get/{zbId}",
    "title": "获取im地址",
    "name": "getIM",
    "description": "<blockquote> <p>首次获取需要验证IM流权限，获取的key存入缓存，调用视频流的接口，获取推/拉流地址</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>即时通讯类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>即时通讯地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "port",
            "description": "<p>即时通讯端口</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问token</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IPlatformService.java",
    "groupTitle": "三方平台API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/platform/im/get/{zbId}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "platform",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/platform/media/get/{zbId}",
    "title": "获取media地址",
    "name": "getMedia",
    "description": "<blockquote> <p>首次获取需要验证media流权限，获取的key存入缓存，调用视频流的接口，获取推/拉流地址</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>视频流类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>视频流地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问token</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IPlatformService.java",
    "groupTitle": "三方平台API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/platform/media/get/{zbId}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "room",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/room/{roomId}/backRoom/{userId}",
    "title": "退出房间",
    "name": "backRoom",
    "description": "<blockquote> <p>房间API - 退出房间</br> 主播主动结束退出直播</br> （1）房间id验证，当前房间是否在直播中</br> （2）获取缓存该房间场次的信息，收益做账统计，存储到DB</br> （3）清除该房间场次信息缓存</br> （4）更改房间状态status=1（直播中）—&gt;2（未开播）</br> （5）返回统计信息</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>退房成功或者失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statId",
            "description": "<p>记录统计ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "planId",
            "description": "<p>本场次ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "activityTime",
            "description": "<p>直播时长</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "onlineUser",
            "description": "<p>房间当前在线用户</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "machineUser",
            "description": "<p>房间机器人用户</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "incomeAmount",
            "description": "<p>累计收益</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "attentionCount",
            "description": "<p>累计粉丝</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "viewCount",
            "description": "<p>累计观看次数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "giftCount",
            "description": "<p>累计收礼数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bombScreenCount",
            "description": "<p>累计飞屏数</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IRoomService.java",
    "groupTitle": "房间API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/room/{roomId}/backRoom/{userId}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "room",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/room/{roomId}/enterRoom",
    "title": "进入房间",
    "name": "enterRoom",
    "description": "<blockquote> <p>用户与主播，进入房间，获取房间详情明细，包含如下几个动作：</br> （1）获取房间详情</br> （2）获取主播详情</br> （3）获取用户详情</br> （4）获取粉丝用户列表</br> （5）获取IM/Video服务器地址</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "planId",
            "description": "<p>房间场次ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomTitle",
            "description": "<p>房间标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型：'normal=普通房间','ticket=门票房间','time=时常房间','personal=私密房间','game=游戏房间'</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "onlineUser",
            "description": "<p>房间当前在线用户</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "machineUser",
            "description": "<p>房间机器人用户</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "diamondGiftNum",
            "description": "<p>房间钻石礼物总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roomNo1",
            "description": "<p>房间排名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomBackgroundImg",
            "description": "<p>房间背景图片</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "zbId",
            "description": "<p>主播ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>主播的用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zbNickname",
            "description": "<p>主播昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "zbLevel",
            "description": "<p>主播等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zbHeadImg",
            "description": "<p>主播头像</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zbSignature",
            "description": "<p>主播个性签名</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "isAttention",
            "description": "<p>用户是否关注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userLevel",
            "description": "<p>用户等级息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "download_url",
            "description": "<p>下载地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "diamondBalance",
            "description": "<p>用户钻石余额（星钻）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "diamondRankList",
            "description": "<p>diamondRankList-&gt;user（送礼钻石排行）</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "diamondRankList.user.userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diamondRankList.user.nickName",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diamondRankList.user.sex",
            "description": "<p>用户性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diamondRankList.user.userHeadImg",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "diamondRankList.user.userLevel",
            "description": "<p>用户等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "diamondRankList.user.giftRankNo1",
            "description": "<p>当前送礼排行</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "diamondRankList.user.diamondGiftUserTotal",
            "description": "<p>当前用户在当前房间累计送礼总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "userLevelRankList",
            "description": "<p>userLevelRankList-&gt;user（用户等级排行）</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userLevelRankList.user.userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userLevelRankList.user.nickName",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userLevelRankList.user.sex",
            "description": "<p>用户性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userLevelRankList.user.userHeadImg",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userLevelRankList.user.userLevel",
            "description": "<p>用户等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media.type",
            "description": "<p>视频流类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.url",
            "description": "<p>视频流地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "im",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "im.type",
            "description": "<p>即时通讯类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "im.url",
            "description": "<p>即时通讯地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "im.port",
            "description": "<p>即时通讯端口</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IRoomService.java",
    "groupTitle": "房间API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/room/{roomId}/enterRoom"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "room",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/room/{roomType}/getRoomSet",
    "title": "获取房间属性设置(暂时废弃)",
    "name": "getRoomSet",
    "description": "<blockquote> <p>进入主播开播界面，动态展示开播前的房间设置参数</br> （1）房间有参数的类型roomType=ticket，time，personal</br></p> </blockquote>",
    "success": {
      "fields": {
        "ticket Success 200": [
          {
            "group": "ticket Success 200",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "String",
            "optional": false,
            "field": "activityTime",
            "description": "<p>继续时间=[30,60,90,120]</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>每分钟单价=[1,2,5,10]</p>"
          }
        ],
        "time Success 200": [
          {
            "group": "time Success 200",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "time Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "time Success 200",
            "type": "String",
            "optional": false,
            "field": "activityTime",
            "description": "<p>继续时间=[30,60,90,120]</p>"
          },
          {
            "group": "time Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>门票单价=[20,50,100,120]</p>"
          }
        ],
        "personal Success 200": [
          {
            "group": "personal Success 200",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "personal Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "personal Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activityTime",
            "description": "<p>继续时间=[30,60,90,120]</p>"
          },
          {
            "group": "personal Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>贵宾的用户id=1</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IRoomService.java",
    "groupTitle": "房间API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/room/{roomType}/getRoomSet"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "room",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/room/getRoomWaterMarkImg",
    "title": "获取房间水印",
    "name": "getRoomWaterMarkImg",
    "description": "<blockquote> <p>进入直播间，开播的过程中获取房间水印</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>水印地址</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IRoomService.java",
    "groupTitle": "房间API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/room/getRoomWaterMarkImg"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "room",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/room/{roomId}/isCharged",
    "title": "房间是否收费",
    "name": "isCharged",
    "description": "<blockquote> <p>判断房间是否收费，获取收费条件等信息</br> （1）房间收费类型roomType=ticket，time，personal</br></p> </blockquote>",
    "success": {
      "fields": {
        "ticket Success 200": [
          {
            "group": "ticket Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间ID</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Integer",
            "optional": false,
            "field": "zbId",
            "description": "<p>主播ID</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ticketStatus",
            "description": "<p>0=未购买，1=购买</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Integer",
            "optional": false,
            "field": "selectPrice",
            "description": "<p>门票单价</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>试看用户ID</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Integer",
            "optional": false,
            "field": "isTrySee",
            "description": "<p>0=未试看，1=已试看</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "String",
            "optional": false,
            "field": "allowTime",
            "description": "<p>允许试看时间</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Long",
            "optional": false,
            "field": "usedTime",
            "description": "<p>已播时长</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Long",
            "optional": false,
            "field": "remainTime",
            "description": "<p>剩余时长</p>"
          }
        ],
        "time Success 200": [
          {
            "group": "time Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间ID</p>"
          },
          {
            "group": "time Success 200",
            "type": "Integer",
            "optional": false,
            "field": "zbId",
            "description": "<p>主播ID</p>"
          },
          {
            "group": "time Success 200",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "time Success 200",
            "type": "Integer",
            "optional": false,
            "field": "selectPrice",
            "description": "<p>时长单价</p>"
          },
          {
            "group": "time Success 200",
            "type": "Integer",
            "optional": false,
            "field": "timeInterval",
            "description": "<p>时常间隔（收费间隔）</p>"
          },
          {
            "group": "time Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>试看用户ID</p>"
          },
          {
            "group": "time Success 200",
            "type": "Integer",
            "optional": false,
            "field": "isTrySee",
            "description": "<p>0=未试看，1=已试看</p>"
          },
          {
            "group": "time Success 200",
            "type": "String",
            "optional": false,
            "field": "allowTime",
            "description": "<p>允许试看时间</p>"
          },
          {
            "group": "time Success 200",
            "type": "Long",
            "optional": false,
            "field": "usedTime",
            "description": "<p>已播时长</p>"
          },
          {
            "group": "time Success 200",
            "type": "Long",
            "optional": false,
            "field": "remainTime",
            "description": "<p>剩余时长</p>"
          }
        ],
        "personal Success 200": [
          {
            "group": "personal Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间ID</p>"
          },
          {
            "group": "personal Success 200",
            "type": "Integer",
            "optional": false,
            "field": "zbId",
            "description": "<p>主播ID</p>"
          },
          {
            "group": "personal Success 200",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "personal Success 200",
            "type": "Integer",
            "optional": false,
            "field": "personalStatus",
            "description": "<p>0=未预约，1=已预约</p>"
          },
          {
            "group": "personal Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>试看用户ID</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IRoomService.java",
    "groupTitle": "房间API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/room/{roomId}/isCharged"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "room",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "POST",
    "url": "/room/{roomId}/setRoomBackgroundImg",
    "title": "设置房间直播封面",
    "name": "setRoomBackgroundImg",
    "description": "<blockquote> <p>进入主播开播界面，设置直播房间封面</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "byte[]",
            "optional": false,
            "field": "roomBackgroundImg",
            "description": "<p>房间背景图</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>上传地址</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IRoomService.java",
    "groupTitle": "房间API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/room/{roomId}/setRoomBackgroundImg"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "task",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/task/resetTrySee",
    "title": "重置试看时间",
    "name": "resetTrySee",
    "description": "<blockquote> <p>每天凌晨4点，重置试看</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>重置成功或者失败</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/ITaskService.java",
    "groupTitle": "任务API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/task/resetTrySee"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/user/getDetail/{userId}",
    "title": "用户详情",
    "name": "getDetail",
    "description": "<blockquote> <p>用户迷你卡~用户详情</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickName",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>用户签名</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sex",
            "description": "<p>用户性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userHeadImg",
            "description": "<p>主播头像</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userLevel",
            "description": "<p>用户等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "vipLevel",
            "description": "<p>用户VIP等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "isAttention",
            "description": "<p>用户是否关注（0=未关注，1=已关注）</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "attentionUserTotal",
            "description": "<p>粉丝</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "diamondGiftZBTotal",
            "description": "<p>收礼</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/user/getDetail/{userId}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/user/{channel}/isAttention/{userIds}/{isAttention}",
    "title": "关注/取消关注",
    "name": "isAttention",
    "description": "<blockquote> <p>用户关注主播，或者用户关注用户，关注与未关注来回切换</br> isAttention=true,false </br> channel= (1=房间、2=个人中心、3=私信、4=收藏推荐)</br> 支持一键关注格式：userIds=1,2,3 用英文逗号,隔开 </br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>关注成功或者失败消息</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/user/{channel}/isAttention/{userIds}/{isAttention}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/user/{channel}/isBlack/{userIds}/{isBlack}",
    "title": "拉黑/取消拉黑",
    "name": "isBlack",
    "description": "<blockquote> <p>用户拉黑主播，或者用户拉黑用户，拉黑与未拉黑来回切换</br> isBlack=true,false </br> ture 代表 拉黑用户，userIds是用户id false 代表 取消拉黑，userIds是用户id channel= (1=房间、2=个人中心、3=私信、4=收藏推荐)</br> 支持一键关注格式：userIds=1,2,3 用英文逗号,隔开</p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>四种情况：拉黑成功，已经拉黑，取消成功，并未拉黑</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/user/{channel}/isBlack/{userIds}/{isBlack}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/user/isBook/{zbId}/{isBook}",
    "title": "预约/取消预约",
    "name": "isBook",
    "description": "<blockquote> <p>用户提前预约主播，进行私密userId传递，主播可以根据userId进行私密直播</br> isBook=true,false </br> true代表 需要预约，zbId是主播id false代表 取消预约，zbId是主播id</p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>四种情况：预约成功，已经预约，取消成功，并未预约</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/user/isBook/{zbId}/{isBook}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/user/isTrySee/{roomId}/{isTrySee}",
    "title": "开始/结束试看",
    "name": "isTrySee",
    "description": "<blockquote> <p>判断当前VIP用户是否能试看，如果可以开始试看</br> isTrySee=true,false</br> ture是开始试看，就等同于你点击开始试看的按钮，返给你isTrysee=0代表能够试看，1代表不能试看 </br> false是结束试看，就等同于你点击结束试看的按钮，表示你试看时间已经全部看完了 </br> 并不是你点击试看，就代表试看结束的；你需要调用结束试看的这个动作，服务器才知道已经试看结束了 </br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "isTrySee",
            "description": "<p>0=未试看，1=已试看</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userLevel",
            "description": "<p>用户等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "allowTime",
            "description": "<p>允许试看时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "overTime",
            "description": "<p>试看结束时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/user/isTrySee/{roomId}/{isTrySee}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "zhubo",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/zhubo/apply",
    "title": "主播申请",
    "name": "apply",
    "description": "<blockquote> <p>点击用户中心，进行主播申请</br> 使用条件，请先登陆</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>申请成功或者失败</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IZhuboService.java",
    "groupTitle": "主播API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/zhubo/apply"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "zhubo",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/zhubo/{zbId}/getAttentionUserList",
    "title": "主播获取关注用户列表",
    "name": "getAttentionUserList",
    "description": "<blockquote> <p>点击主播粉丝用户列表，获取用户列表</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "userList",
            "description": "<p>userList-&gt;user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userList.user.userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userList.user.nickName",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userList.user.sex",
            "description": "<p>用户性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userList.user.userHeadImg",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userList.user.userLevel",
            "description": "<p>用户等级</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IZhuboService.java",
    "groupTitle": "主播API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/zhubo/{zbId}/getAttentionUserList"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "zhubo",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/zhubo/{zbId}/getGiftUserList/{category}",
    "title": "主播收礼排行用户列表",
    "name": "getGiftUserList",
    "description": "<blockquote> <p>点击钻石礼物，弹出礼物排行对话框</br> category =today，history</br> （1）点击当日，获取当日送礼排行</br> （2）点击全部，获取历史送礼排行</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "userList",
            "description": "<p>userList-&gt;user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userList.user.userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userList.user.nickName",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userList.user.sex",
            "description": "<p>用户性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userList.user.userHeadImg",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userList.user.userLevel",
            "description": "<p>用户等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userList.user.giftRankNo1",
            "description": "<p>当前送礼排行</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userList.user.diamondGiftUserTotal",
            "description": "<p>当前用户在当前房间累计送礼总数</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IZhuboService.java",
    "groupTitle": "主播API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/zhubo/{zbId}/getGiftUserList/{category}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "zhubo",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/zhubo/getReadyPlayInfo",
    "title": "获取开播信息",
    "name": "getReadyPlayInfo",
    "description": "<blockquote> <p>主播API - 获取开播信息</br> 进入主播开播界面业务流程</br> （1）验证参数：是否合法</br> （2）获取IM与Madia地址：</br> A.如果拿不到地址，IM=null或者Media=null接口正常返回，不中断</br> B.如果拿到地址，不存入缓存，下一次直接重新拿</br> （3）验证房间状态：</br> A.未开播（=2）继续（3-7）</br> B.直播中（=1）直接进入直播间，返回上一次的房间配置信息</br> //C.回访中（=3）UI弹出对话框是否结束回放？？？如果是结束回放，更新房间状态3（回访中）-2（未开播）重新设置房间，UI重启API，继续（1-7）？？？待确定？？？</br> （4）获取主播权限：</br> A.判断主播是否被禁播；UI弹出提示框</br> B.判断是否拥有 时常房间、门票房间、私密房间、游戏房间的开播权限</br> （5）获取房间属性：</br> A.查库—动态配置开播时间、持续时间、门票价格数据等</br> B.配置UI—根据允许的类型从后台拉对应的房间配置数据，动态配置开播时间、持续时间、门票价格UI显示</br> （6）维护表：qvod_zb_t_room</br> A.如果无房间，创建房间，status=0（创建中）初始化房间zbId,status,createTime</br> B.如果有房间，</br> (a)房间未直播，更新房间，status=2（未开播）-0（创建中）</br> (b)房间在直播，直接返回，status=1（直播中）</br> （7）组建返回值：</br> A.如果有房间，返回上一次的房间配置信息（roomId,roomTitle,status,roomBackgroundImg），返回开房权限属性配置组装UI（Map）</br> B.如果无房间，返回当前的房间配置信息（roomId,status,roomTitle=null,roomBackgroundImg=null），返回开房权限属性配置组装UI（Map）</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roomId",
            "description": "<p>房间id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "roomStatus",
            "description": "<p>房间状态(0=创建，1=直播中，2=未开播，3=回放中)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomTitle",
            "description": "<p>房间标题=直播标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomBackgroundImg",
            "description": "<p>房间背景图</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "download_url",
            "description": "<p>下载地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media.type",
            "description": "<p>视频流类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.url",
            "description": "<p>视频流地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "im",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "im.type",
            "description": "<p>即时通讯类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "im.url",
            "description": "<p>即时通讯地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "im.port",
            "description": "<p>即时通讯端口</p>"
          }
        ],
        "ticket Success 200": [
          {
            "group": "ticket Success 200",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "String",
            "optional": false,
            "field": "activityTimeList",
            "description": "<p>继续时间=[30,60,90,120]</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "String",
            "optional": false,
            "field": "priceList",
            "description": "<p>门票单价列表=[20,50,100,120]</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Integer",
            "optional": false,
            "field": "selectActivityTime",
            "description": "<p>当前选择持续时间</p>"
          },
          {
            "group": "ticket Success 200",
            "type": "Integer",
            "optional": false,
            "field": "selectPrice",
            "description": "<p>当前选择门票价格</p>"
          }
        ],
        "time Success 200": [
          {
            "group": "time Success 200",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "time Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "time Success 200",
            "type": "String",
            "optional": false,
            "field": "activityTimeList",
            "description": "<p>继续时间=[30,60,90,120]</p>"
          },
          {
            "group": "time Success 200",
            "type": "String",
            "optional": false,
            "field": "priceList",
            "description": "<p>每分钟单价列表=[1,2,5,10]</p>"
          },
          {
            "group": "time Success 200",
            "type": "Integer",
            "optional": false,
            "field": "selectActivityTime",
            "description": "<p>当前选择持续时间</p>"
          },
          {
            "group": "time Success 200",
            "type": "Integer",
            "optional": false,
            "field": "selectPrice",
            "description": "<p>当前选择时常价格</p>"
          },
          {
            "group": "time Success 200",
            "type": "Integer",
            "optional": false,
            "field": "timeInterval",
            "description": "<p>收费间隔</p>"
          }
        ],
        "personal Success 200": [
          {
            "group": "personal Success 200",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "personal Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "personal Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activityTimeList",
            "description": "<p>继续时间=[30,60,90,120]</p>"
          },
          {
            "group": "personal Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>贵宾的用户id=1</p>"
          },
          {
            "group": "personal Success 200",
            "type": "Integer",
            "optional": false,
            "field": "selectActivityTime",
            "description": "<p>当前选择持续时间</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IZhuboService.java",
    "groupTitle": "主播API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/zhubo/getReadyPlayInfo"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "zhubo",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/zhubo/getStat/{planId}",
    "title": "获取直播收益",
    "name": "getStat",
    "description": "<blockquote> <p>房间API - 获取直播收益</br> 主播主动结束退出直播，获取当前直播的收益数据</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>退房成功或者失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statId",
            "description": "<p>记录统计ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "planId",
            "description": "<p>本场次ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "activityTime",
            "description": "<p>直播时长</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "onlineUser",
            "description": "<p>房间当前在线用户</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "machineUser",
            "description": "<p>房间机器人用户</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "incomeAmount",
            "description": "<p>累计收益</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "attentionCount",
            "description": "<p>累计粉丝</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "viewCount",
            "description": "<p>累计观看次数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "giftCount",
            "description": "<p>累计收礼数</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bombScreenCount",
            "description": "<p>累计飞屏数</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IZhuboService.java",
    "groupTitle": "主播API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/zhubo/getStat/{planId}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "zhubo",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/zhubo/getZbDetail/{zbId}",
    "title": "主播详情",
    "name": "getZbDetail",
    "description": "<blockquote> <p>点击主播头像，进入主播迷你卡，获取主播详情</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zbNickname",
            "description": "<p>主播昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>用户签名</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sex",
            "description": "<p>用户性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userHeadImg",
            "description": "<p>主播头像</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "zbLevel",
            "description": "<p>主播等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userLevel",
            "description": "<p>用户等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "vipLevel",
            "description": "<p>用户VIP等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "isAttention",
            "description": "<p>用户是否关注（0=未关注，1=已关注）</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "attentionUserTotal",
            "description": "<p>粉丝</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "diamondGiftZBTotal",
            "description": "<p>收礼</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IZhuboService.java",
    "groupTitle": "主播API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/zhubo/getZbDetail/{zbId}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "zhubo",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/zhubo/getZhuboList/{num}",
    "title": "主播推荐列表",
    "name": "getZhuboList",
    "description": "<blockquote> <p>点击收藏，没有关注列表，显示热门推荐主播</br> 如果没有登陆，显示热门推荐主播</br> 如果有登陆，显示已关注的主播</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "zbId",
            "description": "<p>主播ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zbNickname",
            "description": "<p>主播昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zbLevel",
            "description": "<p>主播等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zbHeadImg",
            "description": "<p>主播头像</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "isAttention",
            "description": "<p>用户是否关注 0 =未关注，1=已关注</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IZhuboService.java",
    "groupTitle": "主播API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/zhubo/getZhuboList/{num}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "zhubo",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/zhubo/overPlay/{planId}",
    "title": "结束直播",
    "name": "overPlay",
    "description": "<blockquote> <p>点击确认退出，结束直播</br> （1）记录直播视频状态is_video=0</br> （2）调Medie接口删除视频</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>退出成功或者失败</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IZhuboService.java",
    "groupTitle": "主播API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/zhubo/overPlay/{planId}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "zhubo",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "GET",
    "url": "/zhubo/saveVideo/{planId}",
    "title": "保存回放",
    "name": "saveVideo",
    "description": "<blockquote> <p>点击是否保存回放，结束直播</br> （1）记录直播视频状态is_video=1，保持回放</br></p> </blockquote>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>退出成功或者失败</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IZhuboService.java",
    "groupTitle": "主播API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/zhubo/saveVideo/{planId}"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "zhubo",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "POST",
    "url": "/zhubo/startPlay",
    "title": "开始直播",
    "name": "startPlay",
    "description": "<blockquote> <p>主播API - 开始直播</br> 选择房间类型，点击开始直播：</br> （1）验证参数：是否合法</br> （2）验证房间状态：</br> A.未开播（=2）重新设置房间</br> B.直播中（=1）直接进入直播间，更新DB+缓存直播标题 等数据</br> //C.回访中（=3）UI弹出对话框是否结束回放？？？如果是结束回放，更新房间状态3（回访中）-2（未开播）重新设置房间，UI重启API，继续（1-7）？？？待确定？？？</br> （3）维护表：zb_t_room与zb_t_room_plan</br> A. 先更新房间表，roomTitle，status=1（直播中）</br> B.查询当前房间场次，确保缓存中没场次（用户没有直播），在进行场次的创建，场次status=房间status</br> C.创建场次，存储到缓存 房间信息，主播信息（主播昵称、等级、主播头像等），房间属性配置信息，场次信息</br> D.如果是私密房间，更新用户预约表zb_t_user_personal的邀请时间，已经房间预约信息</br> （4）开播消息推送：</br> A.关注粉丝用户的消息推送，并且粉丝已开启了主播消息提醒（勾选了的主播才能进行消息推送）</br> B.对接IM的消息推送接口（多用户发送），接口异常处理，不中断</br> （5）组件返回值：</br> A.planId,status,result</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "ticket": [
          {
            "group": "ticket",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "ticket",
            "type": "String",
            "size": "0..10",
            "optional": false,
            "field": "roomTitle",
            "description": "<p>房间标题</p>"
          },
          {
            "group": "ticket",
            "type": "Long",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间（时间戳）</p>"
          },
          {
            "group": "ticket",
            "type": "Integer",
            "optional": false,
            "field": "activityTime",
            "description": "<p>继续时间=30,60,90,120  其中选择值</p>"
          },
          {
            "group": "ticket",
            "type": "Integer",
            "optional": false,
            "field": "price",
            "description": "<p>门票单价=20,50,100,120  其中选择值</p>"
          }
        ],
        "time": [
          {
            "group": "time",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "time",
            "type": "String",
            "size": "0..10",
            "optional": false,
            "field": "roomTitle",
            "description": "<p>房间标题</p>"
          },
          {
            "group": "time",
            "type": "Long",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间（时间戳）</p>"
          },
          {
            "group": "time",
            "type": "Integer",
            "optional": false,
            "field": "activityTime",
            "description": "<p>继续时间=30,60,90,120  其中选择值</p>"
          },
          {
            "group": "time",
            "type": "Integer",
            "optional": false,
            "field": "price",
            "description": "<p>每分钟单价=1,2,5,10  其中选择值</p>"
          }
        ],
        "personal": [
          {
            "group": "personal",
            "type": "String",
            "allowedValues": [
              "\"normal\"",
              "\"ticket\"",
              "\"time\"",
              "\"personal\"",
              "\"game\""
            ],
            "optional": false,
            "field": "roomType",
            "description": "<p>房间类型</p>"
          },
          {
            "group": "personal",
            "type": "String",
            "size": "0..10",
            "optional": false,
            "field": "roomTitle",
            "description": "<p>房间标题</p>"
          },
          {
            "group": "personal",
            "type": "Long",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间（时间戳）</p>"
          },
          {
            "group": "personal",
            "type": "Integer",
            "optional": false,
            "field": "activityTime",
            "description": "<p>继续时间=30,60,90,120  其中选择值</p>"
          },
          {
            "group": "personal",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>贵宾的用户id=1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "planId",
            "description": "<p>场次Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roomStatus",
            "description": "<p>0=创建，1=直播中，2=未开播，3=回放中</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>开播成功或失败</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/api/zb/IZhuboService.java",
    "groupTitle": "主播API",
    "sampleRequest": [
      {
        "url": "http://192.168.0.138:8769/api/zhubo/startPlay"
      }
    ]
  }
] });
