import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
    render() {
        return (
            <div className="text-center m-3" style={{margin: "40px, 0px"}}>
                <img src={loading} alt="" />
            </div>
        )
    }
}

export default Spinner
