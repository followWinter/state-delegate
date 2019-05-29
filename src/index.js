import React from 'react'

const StateDelegete = (config = {}) => (WrappedComponent) => class WrapperComponent extends React.Component {
    state = Object.keys(config)
        .map(key => ({[key]: config[key]['_']}))
        .reduce((o1, o2) => ({...o1, ...o2}), {})

    setValue = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        const delegates = Object.keys(config)
            .map(key => ({
                [key]: {
                    setState: (state) => this.setValue(key, state),
                    ...Object.keys(config[key])
                        .map((k) => ({
                            [k]: () => this.setState(key, config[key][k])
                        }))
                        .reduce((o1, o2) => ({...o1, ...o2}), {})
                }
            }))
        return (<WrappedComponent {...this.props} {...delegates}/>)
    }
}
export default StateDelegete
