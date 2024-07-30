# directus_demo1
directus测试代码

# 安装 
npm init directus-project example-project

# 启动
 cd /example-project
 npx directus start


# 测试账号
管理员
test@qq.com
密码
123456

test角色
test2@qq.com
密码
123456

# 数据库mysql
数据库名directus_db
端口 3306

# 访问地址
http://127.0.0.1:8055



# docker启动方式
1. 直接docker-compose up -d 
2. 控制台会输出对应的管理员账号和密码
3. 直接访问http://127.0.0.1:8055
4. 进入docker 容器一样可以执行 npx directus start 等命令

如果启动异常，数据库文件需要调整 权限 chmod -R 777 ./data