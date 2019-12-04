define({ "api": [
  {
    "version": "1.0.0",
    "group": "1user",
    "type": "POST",
    "url": "/user/login",
    "title": "（1）用户登录",
    "name": "login",
    "description": "<blockquote> <p>登录流程： </br> （1）校验登录参数</br> （2）验证用户权限</br> （3）登录第三方接口</br> （4）登录成功，初始化本地用户</br> （5）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1000=宏发,1020=星空\""
            ],
            "optional": false,
            "field": "siteId",
            "description": "<p>站点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"LC\""
            ],
            "optional": false,
            "field": "loginType",
            "description": "<p>平台类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "allowedValues": [
              "\"0=大厅\"",
              "\"220=炸金花\"",
              "\"620=德州扑克\"",
              "\"720=二八杠\"",
              "\"*编号*=*游戏*\""
            ],
            "optional": false,
            "field": "gameType",
            "description": "<p>游戏类型</p>"
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
            "field": "result",
            "description": "<p>登录结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>跳转页面</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"successCount\": 1,\n   \"errorCount\": 0,\n   \"errInfoList\": null,\n   \"exception\": null,\n   \"result\": \"登录成功\",\n   \"url\": \"https://68lc.lc6689.com/index.html?account=91208_eason&token=eyJkYXRhIjoiOTEyMDhfZWFzb24iLCJjcmVhdGVkIjoxNTc0MDU4NzAzLCJleHAiOjE1MH0=.PiCifqQNwAUAixZhk6SZN/tyLJpKkfZ8gQ3VV/okMP8=&lang=zh-CN&route=68lcws.lc6689.com&loudou=https://cont.lc6689.com/statisticsHandle&gameId=0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/chess/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/login"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "1user",
    "type": "POST",
    "url": "/user/queryBalance",
    "title": "（4）查询余额",
    "name": "queryBalance",
    "description": "<blockquote> <p>查询余额流程： </br> （1）校验转出参数</br> （2）验证用户权限</br> （3）第三方查询余额接口</br> （4）记录转出日志，返回结果</br> *</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1000=宏发,1020=星空\""
            ],
            "optional": false,
            "field": "siteId",
            "description": "<p>站点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"LC\""
            ],
            "optional": false,
            "field": "loginType",
            "description": "<p>平台类型 *</p>"
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
            "field": "result",
            "description": "<p>转出结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   {\n    \"successCount\": 1,\n    \"errorCount\": 0,\n    \"errInfoList\": null,\n    \"money\": 100,\n    \"result\": \"查询余额成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/chess/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/queryBalance"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "1user",
    "type": "POST",
    "url": "/user/queryOrderStatus",
    "title": "（5）查询订单状态",
    "name": "queryOrderStatus",
    "description": "<blockquote> <p>查询订单状态流程： </br> （1）校验转出参数</br> （2）验证用户权限</br> （3）第三方查询订单接口</br> （4）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1000=宏发,1020=星空\""
            ],
            "optional": false,
            "field": "siteId",
            "description": "<p>站点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"LC\""
            ],
            "optional": false,
            "field": "loginType",
            "description": "<p>平台类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单号</p>"
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
            "field": "result",
            "description": "<p>转出结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "allowedValues": [
              "\"1=正在处理中、2=成功、3=失败\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "money",
            "description": "<p>金额</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   {\n    \"successCount\": 1,\n    \"errorCount\": 0,\n    \"errInfoList\": null,\n    \"exception\": null,\n    \"status\": 0,\n    \"money\": 1,\n    \"result\": \"查询订单成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/chess/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/queryOrderStatus"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "1user",
    "type": "POST",
    "url": "/user/queryPlayerStatus",
    "title": "（6）查询玩家在线状态",
    "name": "queryPlayerStatus",
    "description": "<blockquote> <p>查询玩家状态流程： </br> （1）校验转出参数</br> （2）验证用户权限</br> （3）第三方查询玩家状态接口</br> （4）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1000=宏发,1020=星空\""
            ],
            "optional": false,
            "field": "siteId",
            "description": "<p>站点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"LC\""
            ],
            "optional": false,
            "field": "loginType",
            "description": "<p>平台类型</p>"
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
            "field": "result",
            "description": "<p>转出结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "allowedValues": [
              "\"-1=不存在,0=存在,1=在线\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"successCount\": 1,\n    \"errorCount\": 0,\n    \"errInfoList\": null,\n    \"exception\": null,\n    \"status\": 0,\n    \"result\": \"玩家状态返回成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/chess/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/queryPlayerStatus"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "1user",
    "type": "POST",
    "url": "/user/transferIn",
    "title": "（2）转入上分",
    "name": "transferIn",
    "description": "<blockquote> <p>转入上分流程： </br> （1）校验转入参数</br> （2）验证用户权限</br> （3）钱包转出接口</br> （4）第三方上分接口</br> （5）记录转入日志，返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1000=宏发,1020=星空\""
            ],
            "optional": false,
            "field": "siteId",
            "description": "<p>站点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"LC\""
            ],
            "optional": false,
            "field": "loginType",
            "description": "<p>平台类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "money",
            "description": "<p>金额</p>"
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
            "field": "result",
            "description": "<p>转入结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   {\n    \"successCount\": 1,\n    \"errorCount\": 0,\n    \"errInfoList\": null,\n    \"exception\": null,\n    \"result\": \"上分成功，可用余额306.65\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/chess/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/transferIn"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "1user",
    "type": "POST",
    "url": "/user/transferOut",
    "title": "（3）转出下分",
    "name": "transferOut",
    "description": "<blockquote> <p>转出下分流程： </br> （1）校验转出参数</br> （2）验证用户权限</br> （3）第三方下分接口</br> （4）钱包转出接口</br> （5）记录转出日志，返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1000=宏发,1020=星空\""
            ],
            "optional": false,
            "field": "siteId",
            "description": "<p>站点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"LC\""
            ],
            "optional": false,
            "field": "loginType",
            "description": "<p>平台类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "money",
            "description": "<p>金额</p>"
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
            "field": "result",
            "description": "<p>转出结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   {\n    \"successCount\": 1,\n    \"errorCount\": 0,\n    \"errInfoList\": null,\n    \"exception\": null,\n    \"result\": \"下分成功，可用余额305.65\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/chess/IUserService.java",
    "groupTitle": "用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/transferOut"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "2report",
    "type": "POST",
    "url": "/user/getBetRecordList",
    "title": "（1）投注明细记录",
    "name": "getBetRecordList",
    "description": "<blockquote> <p>投注明细记录流程： </br> （1）前提条件，平台注单拉取完成</br> （2）校验查询参数</br> （3）返回查询结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>用户名(=eason查询单个用户，=null查询所有用户)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1000=宏发,1020=星空\""
            ],
            "optional": false,
            "field": "siteId",
            "description": "<p>站点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"LC\""
            ],
            "optional": false,
            "field": "loginType",
            "description": "<p>平台类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>投注开始日期(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>投注结束日期(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>第几页(0=第一页，1=第二页)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示多少行</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "rows",
            "description": "<p>rows-&gt;row</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.gameId",
            "description": "<p>游戏编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.kindName",
            "description": "<p>游戏名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.roomName",
            "description": "<p>房间号</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.betAmount",
            "description": "<p>投注金额</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.winAmount",
            "description": "<p>输赢</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.revenue",
            "description": "<p>抽水</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.betTime",
            "description": "<p>投注时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"successCount\": 1,\n    \"errorCount\": 0,\n    \"errInfoList\": null,\n    \"exception\": null,\n    \"total\": 15,\n    \"list\": [\n        {\n            \"gameId\": \"50-1574227923-475016658-3\",\n            \"username\": \"eason\",\n            \"gameName\": \"看四张抢庄牛新手房\",\n            \"roomName\": \"看四张抢庄牛\",\n            \"betAmount\": 1,\n            \"winAmount\": 0.95,\n            \"revenue\": 0.05,\n            \"betTime\": \"2019-11-20 13:32:28\"\n        },\n        {\n            \"gameId\": \"50-1574227974-475018277-4\",\n            \"username\": \"eason\",\n            \"gameName\": \"抢庄牛牛新手房\",\n            \"roomName\": \"抢庄牛牛\",\n            \"betAmount\": 2,\n            \"winAmount\": -2,\n            \"revenue\": 0,\n            \"betTime\": \"2019-11-20 13:33:22\"\n        },\n        {\n            \"gameId\": \"50-1574228027-475019921-4\",\n            \"username\": \"eason\",\n            \"gameName\": \"炸金花新手房\",\n            \"roomName\": \"炸金花\",\n            \"betAmount\": 1,\n            \"winAmount\": -1,\n            \"revenue\": 0,\n            \"betTime\": \"2019-11-20 13:34:15\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/chess/IUserService.java",
    "groupTitle": "报表API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/getBetRecordList"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "2report",
    "type": "POST",
    "url": "/report/getUserGameKindReport",
    "title": "（4）平台汇总报表",
    "name": "getUserGameKindReport",
    "description": "<blockquote> <p>按天统计用户输赢报表： </br> （1）平台类型投注详情</br> （2）按游戏类型分组统计输赢、投注额</br> （3）以天为单位，定时刷新平台汇总统计</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1000=宏发,1020=星空\""
            ],
            "optional": false,
            "field": "siteId",
            "description": "<p>站点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"LC\""
            ],
            "optional": true,
            "field": "loginType",
            "description": "<p>平台类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>投注开始日期(yyyy-MM-dd)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>投注结束日期(yyyy-MM-dd)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>第几页(0=第一页，1=第二页)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示多少行</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "rows",
            "description": "<p>rows-&gt;row</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.username",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.kindName",
            "description": "<p>平台名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.betCounts",
            "description": "<p>总投注数</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.betAmounts",
            "description": "<p>总投注金额</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.validAmounts",
            "description": "<p>总有效投注金额</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.payAmounts",
            "description": "<p>总输赢金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.betTime",
            "description": "<p>投注时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"successCount\": 1,\n    \"errorCount\": 0,\n    \"errInfoList\": null,\n    \"exception\": null,\n    \"total\": 15,\n    \"list\": [\n        {\n            \"id\": 1,\n            \"username\": \"eason\",\n            \"gameKind\": \"LC\",\n            \"betCounts\": 35,\n            \"betAmounts\": 144,\n            \"validAmounts\": 142,\n            \"payAmounts\": -2.05,\n            \"betTime\": \"2019-11-27\"\n        },\n        {\n            \"id\": 3,\n            \"username\": \"jarvis\",\n            \"gameKind\": \"LC\",\n            \"betCounts\": 14,\n            \"betAmounts\": 86.54,\n            \"validAmounts\": 84.04,\n            \"payAmounts\": -23.11,\n            \"betTime\": \"2019-11-27\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/chess/IReportService.java",
    "groupTitle": "报表API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/report/getUserGameKindReport"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "2report",
    "type": "POST",
    "url": "/report/getUserGameTypeReport",
    "title": "（3）用户游戏报表",
    "name": "getUserGameTypeReport",
    "description": "<blockquote> <p>按每个用户的投注记录汇总输赢数据： </br> （1）游戏类型投注详情</br> （2）按房间分组统计输赢、投注额</br> （3）以天为单位，定时刷新游戏汇总统计</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1000=宏发,1020=星空\""
            ],
            "optional": false,
            "field": "siteId",
            "description": "<p>站点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"LC\""
            ],
            "optional": true,
            "field": "loginType",
            "description": "<p>平台类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>投注开始日期(yyyy-MM-dd)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>投注结束日期(yyyy-MM-dd)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>第几页(0=第一页，1=第二页)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示多少行</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "rows",
            "description": "<p>rows-&gt;row</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.username",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.kindName",
            "description": "<p>平台名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.typeName",
            "description": "<p>游戏名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.roomName",
            "description": "<p>房间号</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.betCount",
            "description": "<p>投注数</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.betAmount",
            "description": "<p>投注金额</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.validAmount",
            "description": "<p>有效投注金额</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.payAmount",
            "description": "<p>输赢金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.betTime",
            "description": "<p>投注时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"successCount\": 1,\n    \"errorCount\": 0,\n    \"errInfoList\": null,\n    \"exception\": null,\n    \"total\": 15,\n    \"list\": [\n        {\n            \"id\": 1,\n            \"username\": \"eason\",\n            \"gameKind\": \"LC\",\n            \"gameType\": \"220\",\n            \"gameRoom\": \"2201\",\n            \"betCount\": 4,\n            \"betAmount\": 35,\n            \"validAmount\": 35,\n            \"payAmount\": 32,\n            \"betTime\": \"2019-11-27\"\n        },\n        {\n            \"id\": 2,\n            \"username\": \"eason\",\n            \"gameKind\": \"LC\",\n            \"gameType\": \"890\",\n            \"gameRoom\": \"8901\",\n            \"betCount\": 6,\n            \"betAmount\": 21,\n            \"validAmount\": 21,\n            \"payAmount\": -21,\n            \"betTime\": \"2019-11-27\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/chess/IReportService.java",
    "groupTitle": "报表API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/report/getUserGameTypeReport"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "2report",
    "type": "POST",
    "url": "/user/getWalletList",
    "title": "（2）用户账户流水",
    "name": "getWalletList",
    "description": "<blockquote> <p>用户账户流水流程： </br> （1）平台转入IN棋牌记录</br> （2）平台转出OUT棋牌记录</br> （3）IN=平台-&gt;棋牌，OUT=平台&lt;-棋牌</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>用户名(=eason查询单个用户，=null查询所有用户)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1000=宏发,1020=星空\""
            ],
            "optional": false,
            "field": "siteId",
            "description": "<p>站点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"LC\""
            ],
            "optional": false,
            "field": "loginType",
            "description": "<p>平台类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>查询开始日期(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>查询结束日期(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>第几页(0=第一页，1=第二页)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示多少行</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "rows",
            "description": "<p>rows-&gt;row</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.recordId",
            "description": "<p>游戏编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.account",
            "description": "<p>账户</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.gameKindA",
            "description": "<p>平台A</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.optType",
            "description": "<p>操作类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.gameKindB",
            "description": "<p>棋牌B</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.optAmount",
            "description": "<p>操作金额</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "row.balance",
            "description": "<p>账户余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "allowedValues": [
              "\"1=正在处理中、2=成功、3=失败\""
            ],
            "optional": false,
            "field": "row.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "row.createTime",
            "description": "<p>创建时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"successCount\": 1,\n    \"errorCount\": 0,\n    \"errInfoList\": null,\n    \"exception\": null,\n    \"total\": 1,\n    \"list\": [\n        {\n            \"recordId\": \"9120820191127110507590eason\",\n            \"account\": \"eason\",\n            \"gameKindA\": \"主账户\",\n            \"optType\": \"IN\",\n            \"gameKindB\": \"LC\",\n            \"optAmount\": \"+100.0\",\n            \"balance\": 100,\n            \"status\": 2,\n            \"createTime\": \"2019-11-27 11:05:07\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/chess/IUserService.java",
    "groupTitle": "报表API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/getWalletList"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "3index",
    "type": "POST",
    "url": "/index/user/getBalance",
    "title": "（7）查询余额",
    "name": "getBalance",
    "description": "<blockquote> <p>查询余额流程： </br> （1）校验参数</br> （2）查询余额</br> （3）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"2,16等\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>平台编码</p>"
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
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>用户余额</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"errInfoList\": [],\n    \"errorCount\": 0,\n    \"exception\": \"\",\n    \"money\": \"0.80\",\n    \"successCount\": 1,\n    \"userId\": 1,\n    \"username\": \"eason\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/index/user/IUserService.java",
    "groupTitle": "首页API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/index/user/getBalance"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "3index",
    "type": "POST",
    "url": "/index/getImgSwiper",
    "title": "（1）首页图片轮播",
    "name": "getImgSwiper",
    "description": "<blockquote> <p>首页图片轮播流程： </br> （1）校验参数</br> （2）获取轮播图片</br> （3）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"index=首页\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgSrc",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgLink",
            "description": "<p>点击链接</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"errInfoList\": [],\n    \"errorCount\": 0,\n    \"exception\": \"\",\n    \"list\": [\n        {\n            \"id\": 2,\n            \"imgLink\": \"\",\n            \"imgSrc\": \"http://47.52.140.84:801/appKey00001/index/swiper/562c4d0d306e7837e53701839e0cd3da.png\",\n            \"title\": \"标题二\"\n        },\n        {\n            \"id\": 1,\n            \"imgLink\": \"\",\n            \"imgSrc\": \"http://47.52.140.84:801/appKey00001/index/swiper/0b539b4b77e2ef83f1ef1b07baa8b58b.png\",\n            \"title\": \"标题一\"\n        }\n    ],\n    \"successCount\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/index/swiper/ISwiperService.java",
    "groupTitle": "首页API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/index/getImgSwiper"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "3index",
    "type": "POST",
    "url": "/index/img/getIndexSwiper",
    "title": "（2）首页消息轮播",
    "name": "getIndexSwiper",
    "description": "<blockquote> <p>首页消息轮播流程： </br> （1）校验参数</br> （2）获取轮播消息</br> （3）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"index=首页\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "context",
            "description": "<p>内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"errInfoList\": [],\n    \"errorCount\": 0,\n    \"exception\": \"\",\n    \"list\": [\n        {\n            \"context\": \"多年来深受众多客户及玩家的信任，现诚邀与您携手并进，共赢未来！\",\n            \"id\": 1,\n            \"title\": \"消息一\"\n        },\n        {\n            \"context\": \"真人视讯、棋牌视讯欢迎体验\",\n            \"id\": 2,\n            \"title\": \"消息二\"\n        }\n    ],\n    \"successCount\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/index/swiper/ISwiperService.java",
    "groupTitle": "首页API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/index/img/getIndexSwiper"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "3index",
    "type": "POST",
    "url": "/index/user/getUserInfo",
    "title": "（5）用户详情",
    "name": "getUserInfo",
    "description": "<blockquote> <p>用户查询流程： </br> （1）校验参数</br> （2）查询用户</br> （3）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "mainMoney",
            "description": "<p>主余额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realName",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNum",
            "description": "<p>电话号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wechat",
            "description": "<p>微信号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite",
            "description": "<p>推荐人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"createBy\": \"\",\n    \"createTime\": \"2019-10-09 12:25:42\",\n    \"email\": \"myeasonhost@gmail.com\",\n    \"errInfoList\": [],\n    \"errorCount\": 0,\n    \"exception\": \"\",\n    \"invite\": \"1234\",\n    \"mainMoney\": 31495.746,\n    \"phoneNum\": \"18672117311\",\n    \"realName\": \"eason\",\n    \"status\": 0,\n    \"successCount\": 1,\n    \"token\": \"56619e408dae12a60356d3b91a67068e\",\n    \"updateBy\": \"\",\n    \"updateTime\": \"\",\n    \"userId\": 1,\n    \"username\": \"eason\",\n    \"wechat\": \"ludan\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/index/user/IUserService.java",
    "groupTitle": "首页API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/index/user/getUserInfo"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "3index",
    "type": "POST",
    "url": "/index/user/login",
    "title": "（4）用户登录",
    "name": "login",
    "description": "<blockquote> <p>用户登录流程： </br> （1）校验参数</br> （2）登录用户</br> （3）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"errInfoList\": [],\n    \"errorCount\": 0,\n    \"exception\": \"\",\n    \"result\": \"用户登录成功\",\n    \"successCount\": 1,\n    \"token\": \"56619e408dae12a60356d3b91a67068e\",\n    \"userId\": 1,\n    \"username\": \"eason\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/index/user/IUserService.java",
    "groupTitle": "首页API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/index/user/login"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "3index",
    "type": "POST",
    "url": "/index/user/playGame",
    "title": "（6）进入游戏",
    "name": "playGame",
    "description": "<blockquote> <p>进入游戏流程： </br> （1）校验参数</br> （2）进入游戏</br> （3）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>操作</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live",
            "description": "<p>操作</p>"
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
            "field": "result",
            "description": "<p>结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"errInfoList\": [],\n    \"errorCount\": 0,\n    \"exception\": \"\",\n    \"result\": \"http://gci.xiaoyugongsi.com:81/forwardGame.do?params=cLZAuRYrVQe/1sCtGPXJFdKysMGmKdLte7DHl4u0OhgzQu1xpptPQEjZUMJWu5hMMYAg4EmNW1vAbNUDr4GY4bjZU+70nfO2axBdvUlmNR1iIoT7cudXbSqsvskQEJb5ymJOpvsboUqSocwcAVsCz8BvMFwBBudyaZiVaGBGe1Argjyb3IDPPpjmOCyK7n98DQ7uW/CQ5YfThzaA4pkIbQ==&key=4bdaf894c68f96e31d90fabd77dc0c51\",\n    \"status\": \"10000\",\n    \"successCount\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/index/user/IUserService.java",
    "groupTitle": "首页API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/index/user/playGame"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "3index",
    "type": "POST",
    "url": "/index/user/register",
    "title": "（3）用户注册",
    "name": "register",
    "description": "<blockquote> <p>用户注册流程： </br> （1）校验参数</br> （2）注册用户</br> （3）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surePassword",
            "description": "<p>确认密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "realName",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNum",
            "description": "<p>电话号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wechat",
            "description": "<p>微信号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "invite",
            "description": "<p>推荐人</p>"
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
            "field": "result",
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"errInfoList\": [],\n    \"errorCount\": 0,\n    \"exception\": \"\",\n    \"result\": \"注册成功\",\n    \"successCount\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/index/user/IUserService.java",
    "groupTitle": "首页API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/index/user/register"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "3index",
    "type": "POST",
    "url": "/index/user/transfer",
    "title": "（8）用户转账",
    "name": "transfer",
    "description": "<blockquote> <p>用户转账流程： </br> （1）校验参数</br> （2）用户转账</br> （3）返回结果</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ag_99999,99999_ag\""
            ],
            "optional": false,
            "field": "action",
            "description": "<p>平台类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"main_ag,ag_main\""
            ],
            "optional": false,
            "field": "transMethod",
            "description": "<p>转账类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "credit",
            "description": "<p>金额</p>"
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
            "field": "result",
            "description": "<p>结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"successCount\": 1,\n   \"errorCount\": 0,\n   \"errInfoList\": null,\n   \"exception\": null,\n   \"result\": \"登录成功\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/index/user/IUserService.java",
    "groupTitle": "首页API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/index/user/transfer"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "4user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "POST",
    "url": "/user/edit?token=xxxxxx",
    "title": "（5）用户信息更新",
    "name": "edit",
    "description": "<blockquote> <p>用户信息更新接口</br> （1）验证参数：是否合法</br> （2）支持昵称更新</br> （3）支持性别更新</br> （4）支持生日更新</br> （5）支持个性签名更新</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称（可选）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别（可选）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日（可选）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>签名（可选）</p>"
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
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>更新信息</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/user/IUserService.java",
    "groupTitle": "app用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/edit?token=xxxxxx"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "4user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "POST",
    "url": "/user/getDetail?token=xxxxxx",
    "title": "（7）获取用户详情",
    "name": "getDetail",
    "description": "<blockquote> <p>获取用户详情接口</br> （1）个人中心—用户详情/br&gt;</p> </blockquote>",
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
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "deposit",
            "description": "<p>存款（星钻 ）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>个性签名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>位置</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "level",
            "description": "<p>用户等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sex",
            "description": "<p>性别 0  未知  1 男  2 女</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "vip",
            "description": "<p>vip等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>用户状态 -1=封号 0=删除 1=已注册</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "created_at",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>渠道标识</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/user/IUserService.java",
    "groupTitle": "app用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/getDetail?token=xxxxxx"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "4user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "POST",
    "url": "/user/getValidateCode",
    "title": "（3）获取用户验证码",
    "name": "getValidateCode",
    "description": "<blockquote> <p>获取验证码接口</br> （1）验证参数：是否合法</br> A .  验证phone是否注册</br> （2）生成验证码逻辑</br> （3）实现验证码-消息推送（短信实现）</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codeType",
            "description": "<p>验证码类型1为注册 2为忘记密码</p>"
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
            "field": "code",
            "description": "<p>用户验证码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>注册信息</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/user/IUserService.java",
    "groupTitle": "app用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/getValidateCode"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "4user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "POST",
    "url": "/user/login",
    "title": "（1）用户登陆",
    "name": "login",
    "description": "<blockquote> <p>用户登陆接口</br> （1）验证参数：是否合法</br> A .  验证username是否存在</br> B .  验证password是否错误</br> （2）登陆逻辑判断</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
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
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登陆用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/user/IUserService.java",
    "groupTitle": "app用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/login"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "4user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "POST",
    "url": "/user/register",
    "title": "（2）用户注册",
    "name": "register",
    "description": "<blockquote> <p>用户注册接口</br> （1）验证参数：是否合法</br> A .  验证phone是否注册</br> B .  验证validateCode错误次数限制、验证码重试次数、是否正确等</br> （2）注册逻辑</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "validateCode",
            "description": "<p>验证码</p>"
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
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>注册信息</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/user/IUserService.java",
    "groupTitle": "app用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/register"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "4user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "POST",
    "url": "/user/reset",
    "title": "（4）用户密码重置",
    "name": "reset",
    "description": "<blockquote> <p>用户密码重置接口</br> （1）验证参数：是否合法</br> A .  验证phone是否注册</br> B .  验证validateCode错误次数限制、验证码重试次数、是否正确等</br> （2）注册逻辑</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "validateCode",
            "description": "<p>验证码</p>"
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
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>注册信息</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/user/IUserService.java",
    "groupTitle": "app用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/reset"
      }
    ]
  },
  {
    "version": "1.0.0",
    "group": "4user",
    "permission": [
      {
        "name": "Android/IOS"
      }
    ],
    "type": "POST",
    "url": "/user/uploadAvatar?token=xxxxxx",
    "title": "（6）上传用户头像",
    "name": "uploadAvatar",
    "description": "<blockquote> <p>进入主播开播界面，设置直播房间封面</br> 使用postman的选项的form-data的key=avatar 文件类型 可以测试</br></p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "byte[]",
            "optional": false,
            "field": "avatar",
            "description": "<p>用户头像</p>"
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
    "filename": "src/main/java/com/eason/transfer/openapi/core/sdk/user/IUserService.java",
    "groupTitle": "app用户API",
    "sampleRequest": [
      {
        "url": "http://10.28.10.230:8082/ws/chess/user/uploadAvatar?token=xxxxxx"
      }
    ]
  }
] });
