　　程序中记录日志一般目的：
* Troubleshooting（故障定位）：向文件或控制台打印代码的调试信息
* 显示程序运行状态：周期性的记录到文件中供其他应用进行统计分析工作
* 跟踪代码运行时轨迹：作为日后审计的依据

我相信Java中你所了解的第一个日志组件很有可能就是`log4j`、当然日志组件不止一家、常用的日志组件还有：,`common-logging`,`slf4j`等、在hibernate中`slf4j`是默认的输出组件。本文章记录分为两篇

* log4j.properties配置详解
* log4简单使用实例及其再次封装

First、在程序代码中怎样使用Log4j。

1、读取log4j的配置文件

BasicConfigurator.configure ()： 自动快速地使用缺省Log4j环境。
PropertyConfigurator.configure ( String configFilename) ：读取使用Java的特性文件编写的配置文件。
DOMConfigurator.configure ( String filename ) ：读取XML形式的配置文件。

>PropertyConfigurator.configure("log4j.properties");

对于一般的java project 可以不使用上面的语句初始化log4j、log4j会自动在classpath下、找到配置文件并初始化。如果log4j不能自动初始化配置文件、那么就需要用上面的方法进行初始化。

2、获取记录器Logger
   在需要使用log4j的地方获取Logger实例。

 > private static Logger log = Logger.getLogger("Log4jInActonTest.class");

3、插入日志记录信息
   使用Logger实例的debug,info,fatal...方法打印log

> logger.debug("Debug info Message.");

代码中使用log4的小栗子：

    import org.apache.log4j.Logger;

    public class Log4jInActonTest {
        private static Logger logger = Logger.getLogger(Test.class);
        public void logicMethod(){
           logger.debug("Debug info Message.");
        }
    }

掌握了最基本的log4j用法后、你也许会认为log4j的应用如此简单、但是你有没有意识到这样做存在这两个问题：

 * 1 每个需要输出日志信息的类里、都要引入log4j的包、且都要定义一个Logger实例。

 * 2 如果一旦系统变更日志的输出方式、比如将`log4j`改为：commons-logging或者slf4j、程序内则要修改N多个类的代码。

　　以上两点、使得业务代码和log4j的耦合太大。所以，如果我们能将日志输出定义为一个静态工具方法、改变这种情况。

定义一个静态工具类：


    // import org.apache.commons.logging.Log;
    // import org.apache.commons.logging.LogFactory;
    import org.apache.log4j.Logger;
    // import org.apache.log4j.PropertyConfigurator;

    /**
     * 记录日志的工具类 主要输出字符串 </br>
     *
     * @version 1.0
     * @since 2017/03/08</br>
     * @author bluetata
     */
    public class Log4jUtil {
        // log4j配置文件
        // private static final String PROPERTIES_FILE_NAME = "log4j.properties";
        private static Log4jUtil instance = null;
        private static Logger logger = null;
        // 利用JCL(commons-logging)组件
        // private static Log jclLogger = null;

        static {
            // PropertyConfigurator.configure(PROPERTIES_FILE_NAME);
            // logger = Logger.getRootLogger();
            // jclLogger = LogFactory.getLog(Log4jUtil.class); // 创建JCL的Log实例
            logger = Logger.getLogger(Log4jUtil.class);
        }

        private Log4jUtil() {
        }

        public static Log4jUtil getInstance() {
            synchronized (Log4jUtil.class) {
                if (instance == null) {
                    instance = new Log4jUtil();
                }
            }
            return instance;
        }

        public static void debug(String str) {
            logger.debug(str);
         // jclLogger.debug(str);
        }

        public static void debug(String str, Exception e) {
            logger.debug(str, e);
        }

        public static void info(String str) {
            logger.info(str);
         // jclLogger.info(str);
        }

        public static void info(String str, Exception e) {
            logger.info(str, e);
        }

        public static void warn(String str) {
            logger.warn(str);
         // jclLogger.warn(str);
        }

        public static void warn(String str, Exception e) {
            logger.warn(str, e);
        }

        public static void error(String str) {
            logger.error(str);
         // jclLogger.error(str);
        }

        public static void error(String str, Exception e) {
            logger.error(str, e);
        }

        public static void fatal(String str) {
            logger.fatal(str);
         // jclLogger.fatal(str);
        }

        public static void fatal(String str, Exception e) {
            logger.fatal(str, e);
        }
    }
