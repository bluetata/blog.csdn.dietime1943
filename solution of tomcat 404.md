###### eclipse中tomcat启动后、访问localhost报404错误

问题描述：tomcat安装完、在eclipse中配置完后、可以正常启动、网页访问 `http://localhost:8080/`
手动通过startup.bat启动tomcat服务器、访问`htt://localhost:8080/`能正常访问tomcat管理页面。

问题原因：tomcat默认successfully installed Tomcat页面（`http://localhost:8080/`）所存在的物理路径和eclipse中配置的tomcat的server locations 不一致

解决办法：
　　**①**双击eclipse中tomcat server、在`Server Locations`选项中设置`Use Tomcat installation`后、重新访问`http://localhost:8080/`
　　如果设置过程中出现server location灰色无更改情况
　　1、右键tomcat server停止
　　2、删除所加载的所有项目（右键add and remove...）
　　3、右键tomcat server 选择点击clean...选项
　　**说明**：此种直接访问tomcat安装路径下的部署C:\Program Files\apache-tomcat-8.0.41\\**webapps**
　　目录结构：
　　webapps
　　　　|--docs
　　　　|--examples
　　　　|--host-manager
　　　　|--manager
　　　　|--ROOT

　　**补足**：有的同学在选择这种启动的时候、tomcat启动的时候会出现`无法访问`的情况、可能原因、该同学的PC的tomcat上述路径需要管理者权限方可访问、造成读写权限不足

　　**②**双击eclipse中tomcat server、在`Server Locations`选项中设置`Use workspace metadata`后、将上述**①**的解决办法中的路径文件（`C:\Program Files\apache-tomcat-8.0.41\webapps`）拷贝到自己的workspace下的`\eclipse\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0`中的`wtpwebapps`文件夹下、重新访问`http://localhost:8080/`
　　**说明**：此种设置部署后会直接访问上述路径的`wtpwebapps`文件夹的部署、但是默认此文件夹下只有`ROOT`文件夹、启动server直接访问的时候会报`404`错误。
　　**补足**：如果tomcat存在多个实例的时候、会在上述路径中依次出现`tmp0`、`tmp1`、`tmp2`的文件夹











　
