/*
JavaScript 的能力很大程度上取决于它运行的环境。
例如，Node.js 支持允许 JavaScript 读取/写入任意文件，执行网络请求等的函数。
浏览器中的 JavaScript 可以做与网页操作、用户交互和 Web 服务器相关的所有事情。
*/

/*
因此，最近出现了许多新语言，这些语言在浏览器中执行之前，都会被 编译（转化）成 JavaScript。
TypeScript 专注于添加“严格的数据类型”以简化开发，以更好地支持复杂系统的开发。由微软开发
*/

/*
是什么使得 JavaScript 与众不同？
1.与 HTML/CSS 完全集成。 
2.被所有的主流浏览器支持，并且默认开启。
*/

/* IDE: VS Code  */


网页引入javascript的两种方法, 二者不通用：

1. <script>
       alert("Hello!");
   </script>

2. <script src = "hello.js"></script>


严格代码模式：

"use strict"           /* first line in javascript file  OR  within <script>*/



变量赋值：

let      const       var




数据类型：

javascript 包括 8 种数据类型，7种原始数据类型 + 1种引用数据类型

number   bigint(后缀 + n)   string   boolean   null（赋值为null）  undefined（没有赋值）symbol
object

typeof(a);

原始数据类型转换：

String()
Boolean()
Number()

object向原始数据的转换:

object 到 boolean的转换：所有的对象（包括数组和函数）都转换为true
这就是为什么Boolean("0") ==> true

对象转为字符串的步骤：
1，对象的toString()方法;
2，对象的valueOf()方法；
3，抛出异常；

对象转为数字的步骤：
1，对象的valueOf()方法;
2，对象的toString()方法；
3，抛出异常；



浏览器的交互函数：

1. alert("Hello");

2. let answer = prompt("How old are you?", 100);
   alert(`Your age is ${answer} years old`);

   /* prompt 是一个input对话框，对话框显示 “How old are you？”， 默认填写信息为100（可以没有默认信息）
      如果点击确定，则 answer 传入填入的数据，如果点击取消，则返回null
   */

3. let answer = confirm("Are you a boy?");
   alert(`${answer}`);
   /* 点击yes， 传入 true； 点击 no， 传入 false  */


运算：

+  -  *  /  ^^  %  

比较：

==  >  <    <=  >=  !=   === (严格相等，不会做出数据类型转换)


逻辑运算符

&&  ||  ！  ？？



funcion(函数)

function showNumber(count){
   alert(count ?? "unknown");
}


function showMessage(message){
  return message ?? "unknown";
}
alert(showMessage(123));


let result = showMessage(message){
  return message ?? "unknown";
}
alert(result(12));

let result = (message) => message ?? "unknown";
alert(result());




其他：

1.字符串的引用

let a = "abc"

alert(`This is ${a}`);                         /* 没有引号 */

2. undefined == null                           true
   undefined === null                          false

   null 和 undefined 与其他任意值比较结果都是 false

3. 字符串之间比较：两个字符转会按照字典序列依次比较
   字符串和数字间比较：字符串会转化为数字比较


4. 区分

   let a = alert(firstname || lasrname || nickname || "anonymous");
   let b = alert(firstname ?? lasrname ?? nickname ?? "anonymous");