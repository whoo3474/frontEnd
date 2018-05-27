import React, {Component} from 'react';

class Form extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(this.form);
        let json = {};
        for(let data of formData.entries()){
            json[data[0]] = data[1];
        }
        console.log(json)

        fetch('http://localhost:3001/item', {
            method:'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(json)
        })
        .then(httpResult => {
            return httpResult.json();
        })
        .then(result => {
            console.log(result)
        }) 
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <form
                ref={(comp) => {this.form = comp}}
                onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="상품명" />
                <input 
                    type="number" 
                    name="price"
                    placeholder="가격" />
                <input 
                    type="number" 
                    name="inventory"
                    placeholder="재고" />
                <input 
                    type="text" 
                    name="photoURL"
                    placeholder="사진경로" />
                <button>제출</button>
            </form>
        );
    }
}

export default Form;