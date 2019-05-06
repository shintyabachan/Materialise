import React, {Component} from 'react';
import './App.css';
import Navbar from "./PrimarySearchAppBar";
import FoodCard from "./FoodCard";

import Smap from './SampleMap';

class App extends Component {
    state = {
        open: false,
        foods: [
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
        ]
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState({foods : this.state.foods});
    }

    render() {
        return (
            <div className="row">
                <div className="col m12">
                    <Navbar/>
                    <Smap/>
                    <br/>
                    <div className="row">
                        <div className="col m5">
                            {this.state.foods.map((data, key) => {
                                return (
                                    <div key={key}>
                                        <FoodCard title={data.nama} tanggal={data.tanggal} deskripsi={data.deskrpsi}/>
                                        <br/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col m6">
                            <h1>MAPS HERE</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
