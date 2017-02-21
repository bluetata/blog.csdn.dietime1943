**【自学maven系列】之创建普通maven项目（simple project）**

１．　　在eclipse的菜单栏选择File->New->Other->Maven->Maven Project或者按Ctrl+N的热键进入新建选项、->点击next

2．　　（如图1）勾选`Create a simple project(skip archetype selection)`后->点击next

![](http://olo4ewtc9.bkt.clouddn.com/01.png)图1

3．　　（如图2）输入Group Id、Archive Id、Packaging后点击Finish。

![](http://olo4ewtc9.bkt.clouddn.com/02.png)（图2）
    * Group Id          // 类似java的 package机制
    * Archive Id        // 在Package Explorer中显示的名字、类似project name、但不是真正的project name
    * Packaging         // 如果是web pro选择war、如果是 java pro选择jar
    * Name              // 真正的project name 在pom.xml会找到（如图4）
    * Description       // 项目描述（如图4）
    * Parent Project    // 关联项目的父项目



4．　　1-3操作完后会在`Package Explorer`中创建出maven项目。解释下其结构（如图3）

![](http://olo4ewtc9.bkt.clouddn.com/03.png)

    * src/main/java         // java 目录
    * src/main/resources    // 配置文件目录、xml properties等
    * src/test/java         // testing source 目录
    * src/test/resources    // 测试配置文件目录
    * pom.xml               // maven的核心文件 pom.xml


　　　pom.xml中的Overview tab 可以看到在No.3(图2)中的配置均在此处有体现
![](http://olo4ewtc9.bkt.clouddn.com/04.png)
