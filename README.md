# state-delegate
> 将状态委托给一个HOC，摆脱重复的状态维护

### 使用场景
- loading、modal 元素的隐藏和显示
- 常量状态的切换

### 使用方法
- 安装
```shell
$ npm install --save @followwinter/state-delegate
// 或者
$ yarn add  @followwinter/state-delegate
```
- 引入
```javascript
import StateDelegate from 'state-delegate'
```
- 使用
```javascript
import React from 'react';
import StateDelegate from 'state-delegate'

class App extends React.Component {
    componentDidMount() {
        // 改变状态
        const {loading} = this.props
        loading.show()
        setTimeout(() => {
            loading.hide()
        }, 3000)
    }

    render() {
        绑定状态
        const {loading} = this.props
        return <div>{
            loading.value ? '加载中' : '加载完成'
        }</div>
    }
}
// 声明状态
export default StateDelegate({
    loading: {
        show: true,
        hide: false
    }
})(App);

```
### API
```javascript
StateDelegate({
    [state]:{
        [action_name]:[value]
        ///...
    }
})(WrappedComponent)
```
- state: 状态的名称，`WrappedComponent`可以通过 `this.props[state]`来访问
- action_name: 动作的名称，每一个动作对应一个函数，`WrappedComponent`中可以通过`this.props[state][action_name]()`来执行动作，执行之后，该`state`就会变成`action_name`对应的值
- value：执行动作之后，`state`的值

### 栗子：
- 有如下定义
```javascript
export default StateDelegate({
    loading: {
        show: true,
        hide: false
    }
})(App);
```
- 则在`APP`中
```javascript
const {loading} = this.props
console.log(loading) //{value:false,show:()=>,hide:()=>,setState:(value)=>{}}
console.log(loading.value) // false
loading.show()
console.log(loading.value) // true
loading.hide()
console.log(loading.value) // false
```


### 开发
- 启动库
```shell
$ yarn install
$ npm link
$ npm run start
```
- 启动demo
```shell
$ cd example
$ yarn install
$ npm link @followwinter/state-delegate
$ npm start
```
