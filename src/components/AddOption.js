import React from 'react';

export default class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    onFormSubmit(e) {
        e.preventDefault();
        //all elements index by name.
        console.log('testing');
        const option = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(option);

        this.setState(() => ({error: error}));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}