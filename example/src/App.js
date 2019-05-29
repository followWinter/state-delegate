import React from 'react';
import StateDelegate from 'state-delegate'

class App extends React.Component {
    componentDidMount() {
        const {loading} = this.props
        loading.show()
        setTimeout(() => {
            loading.hide()
        }, 3000)
    }

    render() {
        const {loading} = this.props
        return <div>{
            loading.value ? '加载中' : '加载完成'
        }</div>
    }
}

export default StateDelegate({
    loading: {
        show: true,
        hide: false
    }
})(App);
