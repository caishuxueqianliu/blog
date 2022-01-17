---
title: Sequelize操作mysql
date: 2021-08-30
tags:
 - mysql
categories:
 -  node
---
#  Sequelize操作mysql
## mysql.js
``` js
const {
	Sequelize
} = require('sequelize');

// // 方法 1: 传递一个连接 URI
// // const sequelize = new Sequelize('sqlite::memory:') // Sqlite 示例
// // const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Postgres 示例
// //
// // // 方法 2: 分别传递参数 (sqlite)
// // const sequelize = new Sequelize({
// //   dialect: 'sqlite',
// //   storage: 'path/to/database.sqlite'
// // });
//
// // 方法 2: 分别传递参数 (其它数据库)
const sequelize = new Sequelize('vite', 'root', '11111111', {
	host: 'localhost',
	timezone: '+08:00',
	dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
});
//
// // try {
// //    sequelize.authenticate();
// //   console.log('Connection has been established successfully.');
// // } catch (error) {
// //   console.error('Unable to connect to the database:', error);
// // }

module.exports = sequelize

```
## model/user.js
```js
const {
	DataTypes
} = require("sequelize");
const sequelize = require('../mysql/mysql')
const User = sequelize.define("user", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	role: {
		type: DataTypes.ENUM("0", "1"),
		defaultValue: "0"
	},
	gold: {
		type: DataTypes.BIGINT,
		defaultValue: 100
	},
	avatar: {
        type: DataTypes.STRING,
        defaultValue: 'http://106.14.40.150:4001/assets/1629356191516.gif'
    },
	gender: {
		type: DataTypes.ENUM('0', '1', '2'), // 0 男 1 女 2 人妖
		defaultValue: '0'
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	ownBooks: {
		type: DataTypes.STRING
	},
	nickname: {
		type: DataTypes.STRING
	},
	phone: DataTypes.BIGINT
});

// (async () => {
//     await User.sync();
//     // 这里是代码
//     console.log("用户模型表刚刚(重新)创建！");
// })();
(async () => {
	await User.sync();
	// 这里是代码
})();
module.exports = User

```
## 使用 增删改查 分页
官方文档 
https://www.sequelize.com.cn/core-concepts/model-querying-basics
::: tip 增
```js
await User.create({
			username,
			password: md5(password),
			gender
		})
```
:::
::: tip 删
```js
// 删除所有名为 "Jane" 的人 
await User.destroy({
  where: {
    firstName: "Jane"
  }
});
// 截断表格
await User.destroy({
  truncate: true
});
```
:::

::: tip 改
```js
await User.update({nickname, avatar}, {
			where: {
				username: datas
			}
		})
```
:::

::: tip 查
```js
await  User.findOne({
        where:{
            username:datas
        }
    })
await  User.findAll()
```
:::

::: tip 分页
```js
// 获取所有小说
router.post('/getAllBooks',async(req,res)=>{
	const { pageNo= 1,pageSize=10 } = req.body
	let offset = (pageNo - 1) * pageSize;
	try {
		let {count,rows} = await Book.findAndCountAll({
			//offet去掉前多少个数据
			offset,
			//limit每页数据数量
			limit: pageSize
		})
		rows.forEach(item=>{
			item.chapterInfo = ''
		})
		let data = {pageNo,pageSize,record:rows}
		data.total = rows.length
		res.send({code:0,msg:'获取所有小说成功!',data})
	}
	catch (e) {
		res.send({code:1,err:e})
	}

})

```
:::