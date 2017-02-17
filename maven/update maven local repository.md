 【自学maven系列】修改eclipse的maven默认仓库路径

**现象描述**：本地eclipse版本为mars1、和neon2,创建maven项目(new --> maven project)后、在pom.xml中Add Dependency后、
Maven Dependencies里jar包的默认保存在了`${user}/.m2/repository/`路径下、且在eclipse的Windows -> Preferences -> Build path ->  Classpath Variables下无法更改

如果想要自定义其路径方法如下：
1.  安装配置maven：
Q1：有同学说劳资本地的eclipse版本很高、可以直接创建maven项目、不想安装怎么办？
A1：博主就是这种情况、本打算偷懒下不安装maven、但是后面无奈在更改settings.xml的时候更改不了（本地根本没有啊- -）、而且这让我想到了tomcat、我们大部分同学都是在apache下载一个之后在eclipse中配置。

1.1、  下载maven

最新下载地址（Apache Maven 3.3.9）：
http://maven.apache.org/download.cgi

找到`Binary zip archive`点击apache-maven-3.3.9-bin.zip链接下载

如：C:\ExtendVolume\099_backup\090_source\maven2\repository；
在windows的环境变量中增加了新的用户变量M2_REPO，其对应的值为D:\Java\m2\repository（Maven仓库的本地存放路径），同时把这个变量增加到path变量中；
修改Maven安装目录下的 conf/文件夹内的setting.xml文件，新增一行：<localRepository>D:\Java\m2\repository</localRepository>（表示本地仓库的地址为：D:\Java\m2\repository）；
将上一步修改好的setting.xml文件复制到D:\Java\m2\repository目录下一份；

修改MyEclipse中Maven的配置信息。

1.打开myeclipse点击windows->preferences->maven->installations下add一个已经安装到D:\Java目录下的maven，如：D:\Java\maven-3.0.4，并勾选此新加项。并点击下面的browse按钮打开maven的全局配置文件,如：D:\Java\maven-3.0.4\conf\setting.xml。

2.打开myeclipse点击windows->preferences->maven->User setting下修改user setting选项为：D:\Java\m2\repository\settings.xml，并点击update settings。并点击下面的reindex按钮更新索引。

3.点击配置窗口的apply按钮，突出配置窗口。

最后打开CMD，执行mvn help:system会发现Maven从远程库下载的jar包都会放到新修改后的路径D:\Java\m2\repository中了。
