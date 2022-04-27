# v2board-akass
## v2board前端页面模板（首页）

### 部署方法：
进入v2Board的运行目录：

``` 
cd /usr/share/nginx/html/v2board/public/
``` 

> 宝塔：cd /www/wwwroot/网站目录/public/

下载本页面文件：

手动拉取下载模板文件到本机，修改完之后再上传到宝塔文件

注意V2board本身就有assets文件夹，如果出错就把下载的assets里面的文件一个一个复制到v2board的assets文件夹下


修改Nginx运行的index优先级：

``` 
index index.html index.htm index.php;
``` 

> 若是宝塔搭建的，自行修改配置文件，将index.html放在第一，其他往后移。
> 宝塔修改可参考：https://jingyan.baidu.com/article/7e440953f70e516ec0e2efc0.html

## 记得修改你自己的站点名称和导航栏连接和你的套餐详情

### 演示

![_2022-04-26T02-50-29.568Z.png](https://s3.maocdn.cn/img/2022/04/26/_2022-04-26T02-50-29.568Z.png)
