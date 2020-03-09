import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <h1>Trang chủ</h1>
                <a href="/items">Chuyển sang trang items</a>
            </div>
        );
    }
}

export default HomePage;