# 简希项目开发文档

### 目录

- 项目说明
- 功能概述
- 数据对照表


---
**1\. 项目说明**

&emsp;&emsp;1. 公众号项目，主要用户分为平台、代理、普通用户
&emsp;&emsp;2. 项目特殊需求：商品二维码批量打印与积分获取

---
**2\. 数据对照表**

通用字段说明

| 字段 | 类型 | 说明 |
| ------    | ------  | ------ | 
| id | int(11)| 主键：该数据ID|
| listorder | int(11) |自定义排序 |
| create_time | int(11) |创建时间 |
| update_time | int(11) |更新时间 |
| delete_time | bigint(13) |删除时间 |
| thirdapp_id | int(11) |关联thirdapp |
| user_no | varchar(255) |关联创建人user_no |
| user_type | tinyint(2) | 用户类型:1.平台管理员;2.员工;3.用户 |
| status | tinyint(2) |状态:1正常；-1删除 |



user表

| 字段 | 类型 | 说明 |
| ------    | ------  | ------ | 
| nickname | varchar(255) | 微信昵称 |
| openid | varchar(255)| 微信openid |
| headImgUrl | varchar(9999) |  微信头像 |
| primary_scope | int(255) | 权限级别：90平台管理员;60超级管理员;30管理员;10用户 |
| user_no | varchar(255)|用户编号 |



user_info表
| 字段 | 类型 | 说明 |
| ------    | ------  | ------ | 
| name | varchar(255) | 姓名 |
| phone | varchar(255) | 手机号 |
| balance | decimal(10,2) | 余额 |
| deposit | int(11) | 保证金 |
| reward | int(11) | 业绩奖励 |
| province | varchar(50) | 省份 |
| email | varchar(255) | 邮箱 |
| level | varchar(30) | 等级：1.大区,2.总代,3.省代,4.市代,5.经销商 |
| wechat | varchar(50) | 我的微信号 |
| parent_wechat | varchar(50) | 上级微信号 |
| idCard | varchar(60) | 证件号码 |
| birth | varchar(30) | 生日 |
| behavior | tinyint(2) | 状态：1.待审核,2.通过,3.未通过 |
| start_time | bigint(13) | 授权起始日 |
| end_time | bigint(13) | 授权截止日 |
| agent_no | varchar(255) | 代理编号 |



user_address表
| 字段 | 类型 | 说明 |
| ------    | ------  | ------ | 
| name | varchar(100) | 姓名 |
| phone | varchar(20) | 手机号 |
| province | varchar(20) | 省 |
| city | varchar(20) | 市 |
| country | varchar(20) | 区 |
| detail | varchar(255) | 详细地址 |
| longitude | varchar(255) | 经度 |
| latitude | varchar(255) | 纬度 |
| isdefault | tinyint(2) | 1.默认,0.非默认 |



label表

| 字段 | 类型 | 说明 |
| ------    | ------  | ------  | 
| title | varchar(40) | 菜单名称 |
| description| varchar(255) | 描述 |
| parentid| int(11) | 父级菜单ID |
| type | tinyint(2) |  1,menu;2,menu_item; |



article表（图文信息：包括简希简介、申请协议）

| 字段 | 类型 | 说明 |
| ------    |  :------:  | ------  | 
| title | varchar(100) | 文章标题 |
| small_title | varchar(100) | 文章副标题 |
| menu_id | int(11) | 文章类别 |
| content | text | 文章内容 |
| mainImg | varchar(9999) | 文章主图 |



product表
| 字段 | 类型 | 说明 |
| ------    |  :------:  | ------  | 
| title | varchar(255) | 商品名称 |
| mainImg | text | 商品主图 |
| bannerImg | text | 商品轮播图 |
| price | decimal(10, 2) | 商品价格 |
| price_one | decimal(10, 2) | 大区价格 |
| price_two | decimal(10, 2) | 总代价格 |
| price_three | decimal(10, 2) | 省代价格 |
| price_four | decimal(10, 2) | 市代价格 |
| price_five | decimal(10, 2) | 经销商价格 |
| stock | int(255) | 商品库存 |



order表
| 字段 | 类型 | 说明 |
| ------    |  :------:  | ------  | 
| order_no | varchar(255) | 订单号 |
| pay | varchar(255) | pay方式详情 |
| price | decimal(10, 2) | 订单金额 |
| snap_address | varchar(999) | 地址快照 |
| pay_status | tinyint(2) | 0.未支付;1.已支付;3,已退款 |
| type | tinyint(2) | 1.普通商品 |
| prepay_id | varchar(255) | 订单微信支付的预订单id |
| wx_prepay_info | varchar(999) | 储存微信预支付信息，再次调起支付使用 |
| order_step | tinyint(2) | 0.正常下单,1.申请撤单,2.完成撤单,3.完结 |
| transport_status | tinyint(2) | 0.未发货；1.配送中；2.已收货 |
| transaction_id | varchar(255) | 微信交易id |
| refund_no | varchar(255) | 退单号 |
| pay_no | varchar(255) | 支付单号 |
| agent_no | varchar(255) | 代理编号 |



order_item表
| 字段 | 类型 | 说明 |
| ------    |  :------:  | ------  | 
| order_no | varchar(255) | 订单号 |
| product_id | int(11) | 外键，关联具体商品 |
| sku_id | int(11) | 外键，关联sku表 |
| pay_status | tinyint(2) | 0.未支付;1.已支付;3,已退款 |
| transport_status | tinyint(2) | 0.未发货；1.配送中；2.已收货 |
| agent_no | varchar(255) | 代理编号 |
| deliver_type | tinyint(2) | 1.代理发货,2.平台发货 |



qrcode表
| 字段 | 类型 | 说明 |
| ------    |  :------:  | ------  | 
| qrurl | varchar(255) | 二维码路径 |
| product_id | int(11) | 关联product表 |
| check_code | varchar(255) | 校验码 |
| behavior | tinyint(2) | 1.未核销2.已核销 |
| score | int(11) | 奖励积分值 |

---