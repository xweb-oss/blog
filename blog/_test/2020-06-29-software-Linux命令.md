---
date: 2020-06- 29
tag: 
 - 软件开发
author: xweb
location: Alanbang
---
## software_tow

1. Linux 目录结构
/boot: 启动目录，内核存放地
/etc : 配置文件存放地
/tmp : 程序产生得临时文件
/home: 用户得目录，新增用户账号时，用户的家目录都存放在此目录
/lib : 库文件，程序在执行过程中，需要条用一些额外的参数时需要函数库的协助
/bin : 可执行文件和常用的 Linux 命令
/sbin: 系统管理员的命令和工具
/usr : 应用程序和文件的安装地
/mnt : 挂载其它文件系统
/root: root账户的home目录
/dev ：存放linux系统下的设备文件

2.  管理文件 可执行的操作文件命令
    1. :w 保存文件；
    2. :wq 保存并退出
    3. :wq! 保存并强制退出
    4. :q 退出；
    5. :q! 强制退出
    6. dd 删除一行字符
    7. x 删除一个字符
    8. :n 光标移至文本第 n 行
    9. $ 光标移至文本的行尾
    10. G光标一直文本的末尾
    11. / 查找莫格字符串  。 类如 /sdb

3. Linux 管理文件 目录得命令
    1. pwd  查看当前所在得目录
    2. cd   a: cd ..  返回上一级
            b: cd /home 查找并跳转到某一个目录下面
            c: cd 回到主目录（根目录 /root）

4. ls 命令   ls(参数) ---如： ls -a
    功能：显示指定目录下得内容
   * -a 列举目录中得全部文件，包括隐藏得文件
   * -l 列举目录中得细节，包括权限，所有者，组群，大小，创建日期，文件是否是链接等
   * -r 逆向，从后向前地列举目录中内容
   * -R 递归，该选项递归地列举当前目录下面得所有得子目录内容
   * -s 文件大小（size）

   * ls -l /root/桌面/text.txt   查看当前得指定目录

5. cat命令 :显示文本里面得内容
   语法： cat 文件名      -----  cat test.txt

6. touch 命令 ：创建文本 （vi也是创建文本）
   区别 ： touch 只是创建，不能插入内容。
   语法: touch 文件名

7. grep命令 （区分大小写）
   功能 : 查找指定得字符串
   格式 : eg: grep money test.txt 
   注解：以上命令在 test.txt文件中 查找 money 这个字符串  。

8. cp
   功能描述:拷贝文件或复制文件(copy)
   格式: cp [源文件(要复制得文件)] [目标文件(存放得地方)]
   * eg1:  cp test.txt /home   把 test.txt复制到  home目录下面
   * eg2:  cp test.txt /home/wang.txt   把 test.txt复制到  home目录下面,并且改了个名字
   * eg3:  [lochost 桌面]:cp /home/wang.txt /dev 把/home下面得wang.txt 复制到 /dev目录下面 

   * -r  cp -r把整个目录给复制了
   * -i  cp -i提示[目标文件中是否已有将要复制过来得文件名]
   * -v  cp -v 查看复制得进度

9. mv （和 cp 用法差不多 ）
   功能描述:移动文件或者目录
   格式: mv [源文件] [目标文件]
   * mv -i 如果选择的文件与[目标文件里面的文件名重复] 进行提示
   * mv -f 强制 不进行提示
   * mv -v 提示 移动的进度

10. mkdir 创建 文件夹(目录)
    格式: mkdir [目录(文件夹)1]
    * eg: [root@lochost ~]#mkdir dir 创建一个目录 dir
    * eg: [root@lochost ~]#ls 借助 ls 命令查看 dir 是否创建成功
    * eg: [root@lochost ~]#mkdir aa bb cc 一次性创建多个目录

    mkdir -p aa/bb 目录(文件夹)嵌套(目录)文件夹

11. rmdir 只能删除空目录(文件夹)
    格式：rmdir [目标文件夹(目录)]
    * eg: rmdir dir 删除 dir文件夹（里面必须时空的）
    * eg: remdir -p aa/bb 把 文件夹aa和文件夹aa下面的文件夹bb，多删除 

12. rm 命令 删除文件
    格式: rm [文件]
    -i 提示确认删除
    -f 强制 不提示
    -v 删除的(状态) （提示删除的状态）
    -r 递归:将删除某歌文件夹下面的所有 文件 和 子目录

### 线上查询得命令
 1. man命令
   功能：用来查询和解释一个命令得使用方法和这个命令得注意事项
   格式: man ls  / man mv /mv touch
   退出按下 q

   locate命令
   功能:根据关键词来定位或模糊查找文件或目录
   locate test  查找所有含有 test 得文件和目录

2. whatis 命令
   功能:查寻每个命令得含义
   whatis mv

### 文件备份和压缩命令
1. bzip2命令 (原文件将被删除)
功能：压缩文件
格式：bzip2 文件名
eg: bzip2 test 压缩test.txt文件生成 test.bz2 压缩包

解压缩  bunzip2 解压缩文件（原压缩包将会被删除）
   bunzip2 test.bz2 生成test.text

2. gzip命令 压缩文件 和bzip2差不多 压缩包后缀是 .gz
   解压缩 gunzip
   -r 把文件夹下面得文件和子文件夹下得文件全部压缩
   gzip -r a (a是一个文件夹)

  
