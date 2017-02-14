### eclipse中创建userlibrary及其使用
在之前项目中你的做法可能是这样、将所需的jar包放在项目的lib目录下、之后在build path中引入所需jar包。这样一来你点开某一项目的时候、可能会看到长长的jar list。

通过使用user library 来创建类似`JRE System Libary`的类库，在该库中可以添加所需jar包或者自己的jar包，这样在使用的时候就只需要导入该库即可。也可以将该userlibrary导出成`.userlibraries`文件、这样其他同学也可以很容易的使用该类库。不需要每次都麻烦的导入所有需要的jar包



**在eclispe创建user Library的步骤**：
步骤如下：
1、点击eclipse的window菜单、选择"Preferences"。
2、在Preferences窗口中选择Java --> User Libraries、然后点击窗口右边的New...按钮、在弹出的子窗口中输入user library的名称、此时在user libraries窗口中会出现新加的 library名称。（如下图所示）
![](http://img.my.csdn.net/uploads/201702/14/1487058973_8255.png)


3、向该user library中添加jar包。选中JC_Reptile_Library、然后点击Add JARs...按钮、选择你要添加的jar后，点OK，则JC_Reptile_Library库中就会出现你刚添加的jar文件信息。



**项目中导入userlibrary**

1、右键项目名称 --> Build Path --> Add Library... 然后选择User Library，然后就会看到自己创建的library库，选择就可以了。


**导出userlibrary**
1、点击eclipse的window菜单、选择"Preferences"。
2、在Preferences窗口中选择Java --> User Libraries、选择所要导出的userlibrary、右侧点击`Export...`、Browse...选择所要导出的位置、输入所要定义的类库名、点击OK。你可以在刚才所导出的位置中找到`xxx.userlibrary`文件
