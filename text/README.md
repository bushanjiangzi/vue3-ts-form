平时在写项目的时候经常要写一些README等等的说明性文件，但是这样的文件一般都是.md的文件，编写的语法自然跟其他格式的文件有所区别，至于为什么要用这种格式的文件，鬼知道，大家都这么用，跟着用就对了。

以下介绍一些常用的markdown语法，我也就知道这么多，而且，实现同样样式的不同标记，我也不做介绍，我认为最好的使用方案是，不需要知道每一种标记，同一种样式我们只约定使用一种标记格式即可，一点是写出来的代码更加规范，二者就是学习记忆的时候减轻压力。

其实markdown文档中的这些语法会被解释成HTML代码，所以如果你的HTML很好，完全可以在里面写HTML和css的代码，完全会显示出相应的样式。

markdown这个标记语言有意思的是在不同的解释器中看到的样子还有些不同，所以在学习的时候不要太过在意所显示的样式的细节，这些东西取决于解释器。

正文
markdown的正文内容很好写，就按照一篇HTML文档写就可以了；但是不需要写那些样板代码，直接写普通文字或者我们想要嵌入的HTML标签和css样式即可。

markdown文档的换行也和HTML是类似的，你敲一个换行符他会当做什么都没发生，想要换行你可以使用HTML的<br>标签或者是两段文字中间空一行。

标题
使用n个#加一个空格表示n级标题。

例如：

# 一级标题
## 二级标题
### 三级标题

列表
无序列表
使用*加一个空格表示，还可以使用 + - 表示，和 * 是一样的。建议在文档中使用自己喜欢的一种，而且在一组列表中不要混用多种标签，这样在不同的解释器中可能会被解释成不同的列表组。

有序列表
使用正常的数字加一个.和空格表示。有序列表的序号有些解释器会根据第一行列表的数字顺序来递增的，还有一种会默认从1开始递增。
markdown解释器样式：

image
区块引用
区块引用使用>表示，为了代码的美观性，我们也在后面加一个空格表示。

代码：

> 这是一个区块引用

> 这是另一个区块引用
>> 这是一个二级嵌套引用
>>> 这是一个三级嵌套引用
博客中样式：

这是一个区块引用

这是一个区块引用

这是一个二级嵌套引用

这是一个三级嵌套引用

markdown解释器样式：

...
参数式
链接还可以带title属性，好像也只能带title，带不了其他属性，注意，是链接地址后面空一格，然后用引号引起来。

代码：

[blog]: https://my.oschina.net/epoch/home "我的博客"

这是我的[blog],我想看到我的中文提示[我的博客](https://my.oschina.net/epoch/home "KevinBruce的博客")
样式：

这是我的blog,我想看到我的中文提示我的博客

如果我们在文中可能会多次使用这个链接，我们可以单独拆分出来定义标签名称；如果只是使用一次直接使用行内式即可。

图片
用法跟链接的基本一样，唯一的不同就是，图片前面要写一个!（这是必须的），没什么好说的。

行内式
代码：

![我的图片](https://static.oschina.net/uploads/user/1808/3617290_100.jpeg?t=1523231638000 "我的开源中国博客logo")
样式：


参数式
代码：

[我的logo]: https://static.oschina.net/uploads/user/1808/3617290_100.jpeg?t=1523231638000 "我的开源中国博客logo"

这是参数式的引用![我的logo]
样式：

logo
代码块
单行代码块
如果代码量比较少，只有单行的话，可以用单反引号包起来。反引号是键盘esc键下方的那个按键。

代码：

`<p>这是一个代码块</p>`
样式：

<p>这是一个代码块</p>

多行代码块
如果代码比较多，用单行写不完，那么可以使用三个反引号来引用代码块。也可以使用一个tab或者是四个空格来表示 。在上方的```后可以添加代码语言，可以对关键字进行不同颜色的显示。

代码:

"```java
class Test {
  public static void main(String[] args) {
      System.out.println("Hello  World!");
  }
}
```"
*** 为了避免解析器解析出问题，我将样例代码用双引号引起来，实际代码是没有双引号的。
样式：

class Test {
  public static void main(String[] args) {
      System.out.println("Hello  World!");
  }
}
表格
表格的格式不一定要对的非常齐，但是为了好看，对齐肯定是最好的，分割线后面的冒号表示对齐方式，写在左边表示左对齐，右边为右对齐，两边都写表示居中，还是有点意思的。

代码：

|  姓名 | 年龄 |  性别 |
|:-----|-----:|:-----:|
|Kevin |  18  |   男  |
|Jack  |  17  |   女  |
|Bruce |  19  |   男  |
样式：

姓名	年龄	性别
Kevin	18	男
Jack	17	女
Bruce	19	男
分隔线
分割线可以由* - _（星号，减号，底线）这3个符号的至少3个符号表示，注意至少要3个，且不需要连续，有空格也可以,但是两个符号之间最多只能有一个空格。建议使用减号-表示

代码：

---
_ _ _
* **

样式：

084706_mhlI_3617290.png
删除线
代码：

~~删除我吧~~
样式：

删除我吧

转义
转义就是将一些特殊字符转换成正常显示的样子，和大多数编程语言相同使用反斜杠(\)表示。下面简单列举几个。

代码：

* \\
* \`
* \*
* \!
样式：

\
`
!
强调
一个星号或者是一个下划线包起来，会转换为<em>倾斜，如果是2个，会转换为<strong>加粗

代码：

*字体倾斜*
_字体倾斜_

**字体加粗**
__字体加粗__
样式：

字体倾斜 字体倾斜

字体加粗 字体加粗

Markdown数学公式语法
行内与独行
行内公式：将公式插入到本行内，符号：$公式内容$，如：$xyz$ ，

效果：

独行公式：将公式插入到新的一行内，并且居中，符号：$$公式内容$$，如：$$xyz$$，

效果：

上标、下标与组合
名称	符号	示例	效果
上标符号	^	$x^4$	
下标符号	_	$x_1$	
组合符号	{}	${16}_{8}O{2+}_{2}$	
汉字、字体与格式
名称	符号	示例	效果
汉字形式	\mbox{}	$V_{\mbox{初始}}$	
字体控制	\displaystyle	$\displaystyle \frac{x+y}{y+z}$	
下划线符号	\underline	$\underline{x+y}$	
标签	\tag{数字}	$\tag{11}$	
上大括号	\overbrace{算式}	$\overbrace{a+b+c+d}^{2.0}$	
下大括号	\underbrace{算式}	$a+\underbrace{b+c}_{1.0}+d$	
上位符号	\stacrel{上位符号}{基位符号}	$\vec{x}\stackrel{\mathrm{def}}{=}{x_1,\dots,x_n}$	
占位符
名称	符号	示例	效果
两个quad空格	\qquad	$x \qquad y$	
quad空格	\quad	$x \quad y$	
大空格	\	$x \ y$	
中空格	\:	$x : y$	
小空格	\,	$x , y$	
没有空格		$xy$	
紧贴	\!	$x ! y$	
定界符与组合
名称	符号	示例	效果
括号	（）\big(\big) \Big(\Big) \bigg(\bigg) \Bigg(\Bigg)	$（）\big(\big) \Big(\Big) \bigg(\bigg) \Bigg(\Bigg)$	
中括号	[]	$[x+y]$	
大括号	\{ \}	$\{x+y\}$	
自适应括号	\left \right	$\left(x\right)$，$\left(x{yz}\right)$	，
组合公式	{上位公式 \choose 下位公式}	${n+1 \choose k}={n \choose k}+{n \choose k-1}$	
组合公式	{上位公式 \atop 下位公式}	$\sum_{k_0,k_1,\ldots>0 \atop k_0+k_1+\cdots=n}A_{k_0}A_{k_1}\cdots$	
四则运算
名称	符号	示例	效果
加法运算	+	$x+y=z$	
减法运算	-	$x-y=z$	
加减运算	\pm	$x \pm y=z$	
减甲运算	\mp	$x \mp y=z$	
乘法运算	\times	$x \times y=z$	
点乘运算	\cdot	$x \cdot y=z$	
星乘运算	\ast	$x \ast y=z$	
除法运算	\div	$x \div y=z$	
斜法运算	/	$x/y=z$	
分式表示	\frac{分子}{分母}	$\frac{x+y}{y+z}$	
分式表示	{分子} \voer {分母}	${x+y} \over {y+z}$	
绝对值表示	\|\|	$\|x+y\|$	
高级运算
名称	符号	示例	效果
平均数运算	\overline{算式}	$\overline{xyz}$	
开二次方运算	\sqrt	$\sqrt x$	
开方运算	\sqrt[开方数]{被开方数}	$\sqrt[3]{x+y}$	
对数运算	\log	$\log(x)$	
极限运算	\lim	$\lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$	
极限运算	\displaystyle \lim	$\displaystyle \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$	
求和运算	\sum	$\sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$	
求和运算	\displaystyle \sum	$\displaystyle \sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$	
积分运算	\int	$\int^{\infty}_{0}{xdx}$	
积分运算	\displaystyle \int	$\displaystyle \int^{\infty}_{0}{xdx}$	
微分运算	\partial	$\frac{\partial x}{\partial y}$	
矩阵表示
符号：\begin{matrix} \end{matrix}

画普通矩阵，不带括号的
$$
 \begin{matrix}
   a & b & c & d & e\\
   f & g & h & i & j \\
   k & l & m & n & o \\
   p & q & r & s & t
  \end{matrix} 
$$


画带中括号的矩阵
$$
\left[
 \begin{matrix}
   a & b & c & d & e\\
   f & g & h & i & j \\
   k & l & m & n & o \\
   p & q & r & s & t
  \end{matrix} 
\right]
$$


画带大括号的矩阵
$$
\left\{
 \begin{matrix}
   a & b & c & d & e\\
   f & g & h & i & j \\
   k & l & m & n & o \\
   p & q & r & s & t
  \end{matrix} 
\right\}
$$


矩阵前加个参数
$$
A=\left\{
 \begin{matrix}
   a & b & c & d & e\\
   f & g & h & i & j \\
   k & l & m & n & o \\
   p & q & r & s & t
  \end{matrix} 
\right\}
$$


矩阵中间有省略号
//\cdots为水平方向的省略号
//\vdots为竖直方向的省略号
//\ddots为斜线方向的省略号

$$
A=\left\{
 \begin{matrix}
   a & b & \cdots & e\\
   f & g & \cdots & j \\
   \vdots & \vdots & \ddots & \vdots \\
   p & q & \cdots & t
  \end{matrix} 
\right\}
$$


增广矩阵
//array必须为array
//{cccc|c}中的c表示矩阵元素，可以控制|的位置
$$
A=\left\{
 \begin{array}{cccc|c}
     a & b & c & d & e\\
     f & g & h & i & j \\
     k & l & m & n & o \\
     p & q & r & s & t
  \end{array} 
\right\}
$$


逻辑运算
名称	符号	示例	效果
等于运算	=	$x+y=z$	
大于运算	>	$x+y>z$	
小于运算	<	$x+y<z$	
大于等于运算	\geq	$x+y \geq z$	
小于等于运算	\leq	$x+y \leq z$	
不等于运算	\neq	$x+y \neq z$	
不大于等于运算	\ngeq	$x+y \ngeq z$	
不大于等于运算	\not\geq	$x+y \not\geq z$	
不小于等于运算	\nleq	$x+y \nleq z$	
不小于等于运算	\not\leq	$x+y \not\leq z$	
约等于运算	\approx	$x+y \approx z$	
恒定等于运算	\equiv	$x+y \equiv z$	
集合运算
名称	符号	示例	效果
属于运算	\in	$x \in y$	
不属于运算	\notin	$x \notin y$	
不属于运算	\not\in	$x \not\in y$	
子集运算	\subset	$x \subset y$	
子集运算	\supset	$x \supset y$	
真子集运算	\subseteq	$x \subseteq y$	
非真子集运算	\supsetneq	$x \subsetneq y$	
真子集运算	\subsetneq	$x \supseteq y$	
非真子集运算	\supsetneq	$x \supsetneq y$	
非子集运算	\not\subset	$x \not\subset y$	
非子集运算	\not\supset	$x \not\supset y$	
并集运算	\cup	$x \cup y$	
交集运算	\cap	$x \cap y$	
差集运算	\setminus	$x \setminus y$	
同或运算	\odot	$x \odot y$	
同与运算	\otimes	$x \otimes y$	
实数集合	\mathbb{R}	$\mathbb{R}$	
自然数集合	\mathbb{Z}	$\mathbb{Z}$	
空集	\emptyset	$\emptyset$	
数学符号
名称	符号	示例	效果
无穷	\infty	$\infty$	
虚数	\imath	$\imath$	
虚数	\jmath	$\jmath$	
数学符号	\hat{a}	$\hat{a}$	
数学符号	\check{a}	$\check{a}$	
数学符号	\breve{a}	$\breve{a}$	
数学符号	\tilde{a}	$\tilde{a}$	
数学符号	\bar{a}	$\bar{a}$	
矢量符号	\vec{a}	$\vec{a}$	
数学符号	\acute{a}	$\acute{a}$	
数学符号	\grave{a}	$\grave{a}$	
数学符号	\mathring{a}	$\mathring{a}$	
一阶导数符号	\dot{a}	$\dot{a}$	
二阶导数符号	\ddot{a}	$\ddot{a}$	
上箭头	\uparrow	$\uparrow$	
上箭头	\Uparrow	$\Uparrow$	
下箭头	\downarrow	$\downarrow$	
下箭头	\Downarrow	$\Downarrow$	
左箭头	\leftarrow	$\leftarrow$	
左箭头	\Leftarrow	$\Leftarrow$	
右箭头	\rightarrow	$\rightarrow$	
右箭头	\Rightarrow	$\Rightarrow$	
底端对齐的省略号	\ldots	$1,2,\ldots,n$	
中线对齐的省略号	\cdots	$x_1^2 + x_2^2 + \cdots + x_n^2$	
竖直对齐的省略号	\vdots	$\vdots$	
斜对齐的省略号	\ddots	$\ddots$	
等价	\iff	$x \iff y$	
希腊字母
大写	实现	小写	实现
	$A$		$\alpha$
	$B$		$\beta$
	$\Gamma$		$\gamma$
	$\Delta$		$\delta$
	$E$		$\epsilon$
	$Z$		$\zeta$
	$H$		$\eta$
	$\Theta$		$ \theta$
	$I$		$\iota$
	$K$		$\kappa$
	$\Lambda$		$\lambda$
	$M$		$\mu$
	$N$		$\nu$
	$\Xi$		$\xi$
	$O$		$\omicron$
	$\Pi$		$\pi$
	$P$		$\rho$
	$\Sigma$		$\sigma$
	$T$		$\tau$
	$\Upsilon$		$\upsilon$
	$\Phi$		$\phi$
	$X$		$\chi$
	$\Psi$		$\psi$
	$\Omega$		$\omega$

$\ast $

```
作者：义焃
链接：点击[链接](https://www.jianshu.com/p/61e02a55f2a6 "作者链接")
来源：简书
```
