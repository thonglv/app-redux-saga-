import React, { Component } from 'react';
import * as actions from '../actions/ItemPageActions';
import {connect} from 'react-redux';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state= {
            data: []
        }
    }
    getText = (event)=> {
        this.setState({
            data: event.target.value
        })
    }
    handleClick = ()=> {
        const {data} = this.state;
        this.props.addData(data);
        this.setState({
            data: ''
        });
    }
    render() {
        return (
            <div>

            
            <div className="">
                <input type="text" onChange= {this.getText} value={this.state.data}/>
                <button className="" onClick={this.handleClick}>Add</button>
            </div>
            {/* <div>
                <button className="">Update</button>
                <button className="">Cannel</button>
            </div> */}
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        addData: data => {
            return dispatch(actions.addItem(data));
        }
    }
}

export default connect(null,mapDispatchToProps) (Input);