import React from 'react';

class ConvertIntoUpper extends React.Component{
    constructor(props){
        super(props);
        this.state={text:"This is Default Text"};
        this.OnChangeHandler=this.OnChangeHandler.bind(this);
        this.onClickHander=this.onClickHander.bind(this);
    }
    OnChangeHandler(event)
    {
        this.setState({text:event.target.value});
    }
    onClickHander(){
        this.setState({text:this.state.text.toUpperCase()});
    }
    render(){
        return(
            <>
            <h1>Write Code to Convert into Upper Case </h1>
            <div className="container">
                <textarea name="" value={this.state.text} onChange={this.OnChangeHandler} id="" cols="100" rows="10"></textarea>
            </div>
            <button onClick={this.onClickHander} className="btn btn-primary"> Convert Into Upper Case </button>
            </>
        );
    }
}
export default ConvertIntoUpper;