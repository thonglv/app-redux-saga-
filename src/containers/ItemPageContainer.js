import React, { Component } from 'react';
import Items from '../components/Items';
import * as actions from '../actions/ItemPageActions';
import {connect} from 'react-redux';
import Input from '../containers/Input';
class ItemPageContainer extends Component {
    componentDidMount() {
        this.props.initLoad();
    }
    render() {
        console.log("CONTAINER LOG PROPS: ", this.props);
        
        return (
            <div>
               <Items {...this.props} /> 
               <Input />    
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items.listItem
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: ()=> {
            dispatch(actions.getListItem());
        },
        delete: data => {
            //alert(data)
            dispatch(actions.deleteItem(data));
        },
        update: data => {
            dispatch(actions.updateItem(data));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ItemPageContainer);