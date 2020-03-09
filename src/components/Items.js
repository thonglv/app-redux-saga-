import React, { Component } from 'react';
class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            visible: false
        }
    }
    handleClick = ()=> {
        this.props.update(this.state.data);
        this.setState({
            data: '',
            visible: false
        });
    }
    render() {
        let listData = [];
        if (this.props.items) {
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th><button type="text" onClick={() => {
                            this.setState({
                                data: item,
                                visible: true
                            })
                        }}>Update</button></th>
                        <th><button type="text" onClick={() => this.props.delete(item.id)}>Delete</button></th>
                    </tr>
                )
            })
        }
        return (
            <div className="">
                <div>
                    <table className="list-item">
                        <tbody>
                            <tr>
                                <th className="id">ID của dữ liệu</th>
                                <th className="name">Tên của dữ liệu</th>
                            </tr>
                            {listData}

                        </tbody>
                    </table>
                    {
                        (this.state.visible) ? (
                            <div className="">
                            <label>id: {this.state.data.id}</label>
                            <input type="text" onChange={(event) => {
                                this.setState({
                                    data: {name: event.target.value, id: this.state.data.id}
                                })
                            }} value={this.state.data.name} />
                            <button className="" onClick={this.handleClick}>Update</button>
                        </div>
                        ) : null
                    }
                  
                </div>
            </div>
        );
    }
}
export default Items