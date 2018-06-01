import React, { Component } from 'react';
import { ItemList } from 'components';
import './index.css';

class Home extends Component {
    render() {
        return (
            <section className="container">
                <main className="row">
                    <ItemList ids={[1,3,4,5,6,7]} />
                </main>
            </section>
        )
    }
}

export default Home;
