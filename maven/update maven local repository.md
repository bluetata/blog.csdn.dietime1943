 【自学maven系列】修改eclipse的maven默认仓库路径

**现象描述**：本地eclipse版本为mars1、和neon2,创建maven项目(new --> maven project)后、在pom.xml中Add Dependency后、
Maven Dependencies里jar包的默认保存在了`${user}/.m2/repository/`路径下、且在eclipse的Windows -> Preferences -> Build path ->  Classpath Variables下无法更改

如果想要自定义其路径方法如下：
步骤1．　　　下载安装maven：
Q1：有同学说劳资本地的eclipse版本很高、可以直接创建maven项目、不想安装怎么办？
A1：博主就是这种情况、本打算偷懒下不安装maven、但是后面无奈在更改settings.xml的时候更改不了（本地根本没有啊- -）、而且这让我想到了tomcat、我们大部分同学都是在apache下载一个之后在eclipse中配置。

1.1、　　下载maven

最新下载地址（Apache Maven 3.3.9）：
[http://maven.apache.org/download.cgi](http://maven.apache.org/download.cgi)

找到`Binary zip archive`点击apache-maven-3.3.9-bin.zip链接下载

1.2、　　配置`PATH`环境变量

将maven解压后的bin目录配置到`PATH`环境变量中，如下所示：

##图1

配置完成、可打开命令行、输入`mvn -v`、如下图所示（出现版本信息，即表示配置成功）：

##图2

步骤2．　　　配置修改maven仓库路径

2.1、手动创建本地仓库的地址：

C:\ExtendVolume\099_backup\090_source\maven2\repository

2.2、从windows的环境变量中增加了：M2_REPO = C:\ExtendVolume\099_backup\090_source\maven2\repository，同时把这个变量增加到path变量中。

2.3、修改settings.xml文件
修改Maven安装目录下的 ${mavn path}/conf/文件夹内的settings.xml文件、增加如下配置节点
>   <localRepository>
>   	C:\ExtendVolume\099_backup\090_source\maven2\repository
>   </localRepository>

步骤3．　　　修改eclipse中Maven的配置信息

1.打开eclipse点击Windows->Preferences->Maven->Installations点击add后点击Directory...指定所安装maven的地址如：C:\Program Files\apache-maven-3.3.9。

2.打开eclipse点击Windows->Preferences->Maven->User Setting下修改Global Settings和User Settings选项为：C:\Program Files\apache-maven-3.3.9\conf\settings.xml、并点击update settings。再点击下面的reindex按钮更新索引。

3.查看maven的console：
点击Windows->Show View->Console、显示Console后切换到maven的console
