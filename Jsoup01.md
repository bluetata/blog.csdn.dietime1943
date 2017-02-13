

![``](http://img.my.csdn.net/uploads/201702/13/1486978877_1685.jpg)

##### Jsoup 简介

**背景**：我第一次接触`Jsoup`的时候是在11年、相信做过一些数据挖掘的同学都听说过几种爬虫框架、比如当时风靡的`htmlParser`。Jsoup的创始人[`Jonathan Hedley`](https://jhy.io/)在2009年正式推出了基于`java`语言的开源框架`Jsoup`。Jsoup相对htmlParser入手简单、在操作DOM上尤其是在操作DOM的特定数据上尤为突出。jsoup相对`httpclient`在模拟模拟浏览器方面较弱。

`Jsoup` 来自官方的解释：是一款Java的HTML解析器，可直接解析某个URL地址、HTML文本内容。它提供了一套非常省力的API，可通过DOM，CSS以及类似于jQuery的操作方法来取出和操作数据。

<img style="float:right;" width="50%"  src="http://img.my.csdn.net/uploads/201702/13/1486964715_4746.JPG">

`Jonathan Hedley` [*Web scale*](http://www.webopedia.com/TERM/W/web-scale-it.html)工程师、Technology Leader。
美国亚马逊公司技术主管、location位于西雅图、华盛顿。
Jonathan Hedley的个人站：[`https://jhy.io/`](https://jhy.io/)

**官网**：[http://jsoup.org/](http://jsoup.org/)
**Github地址**：[https://github.com/jhy/jsoup](https://github.com/jhy/jsoup)
**最新release版本**：`1.10.2`<font color=#006600 size=1>(2017-Jan-02)</font>
**jar包下载**：[https://jsoup.org/download](https://jsoup.org/download)


**Jsoup中类的层次结构**

<font color=#993366 face='Consolas' size=3>
*java.lang.**<font color=#000000>Object</font>***
&nbsp;&nbsp;&nbsp;&nbsp;*org.jsoup.nodes.**<font color=#000000>Node</font>***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*org.jsoup.nodes.**<font color=#000000>Element</font>***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*org.jsoup.nodes.**<font color=#000000>Document</font>** *</font>
