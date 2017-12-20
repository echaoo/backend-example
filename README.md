# backend-example
本项目使用express框架，配合mysql数据库，实现了简单的增删改查功能，用来nodejs入门参考。

### 功能

简易留言板：留言的创建、查看、删除等功能

### 使用
说明：大部分接口需要操作数据库，为了保证接口正常工作，你可以选择以下两种方法中的一种：

1.更改dbConfig.js中的数据库配置信息，连接到你的数据库

2.保证你的电脑上有docker

 如果你已经修改了数据库配置，成功的连接到了新建的与本例相同名字数据库，保证表名，字段名等与本例相同(文章末会列出)。此时，你需要npm install一下，然后输入node index.js就可以了。此时，打开localhost:3000查看。

 如果你的电脑上有docker，直接输入命令docker-compose up 就OK啦

### 接口

- `/api/add` POST 创建留言信息

| 参数        | 名称           | 必填  | 默认 |
| ------------- |:-------------:| -----:| -----:|
| title     | 留言名称 | 否 | - |
| content      | 留言内容      | 否 | - |
| time | 留言时间   | 否 | - |
| author | 留言作者   | 否 | - |


- `/api/comments` GET 获取留言信息

| 参数        | 名称           | 必填  | 默认 |
| ------------- |:-------------:| -----:| -----:|
| title     | 索要查询留言的关键字 | 否 | '' |
| order      | 获取留言的排序      | 否 | 'id ASC' |
| limit | 分页所需，每次获取多少条内容   | 否 | 10 |
| offset | 分页所需， 相对于第一条内容的偏移量   | 否 | 0 |

- `/api/comments/count` GET 获取总留言信息数量

- `/api/delete` POST 删除一条留言信息

| 参数        | 名称           | 必填  | 默认 |
| ------------- |:-------------:| -----:| -----:|
| id     | 留言id | 是 | - |


### 参考资料
如果你想学习更多：

http://expressjs.com/zh-cn/

https://www.npmjs.com/package/mysql

最后，如果你想了解docker：

https://www.gitbook.com/book/yeasy/docker_practice/details