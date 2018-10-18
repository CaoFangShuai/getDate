

# 纯粹的ES6获取日期时间方法

你好！ 

## 重点知识
*数组的map方法*
	map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
	map() 方法按照原始数组元素顺序依次处理元素。
*es6箭头函数*
	箭头函数就是函数的一种简写形式，使用括号包裹参数，跟随一个 =>，紧接着是函数体
	代码如下：
```javascript
	var getPrice = function() {
  return 4.55;
};
 
// 箭头函数的形式
var getPrice = () => 4.55;
```
## 废话不多说具体代码
```javascript
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
```
