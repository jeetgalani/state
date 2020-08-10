import React, {Component} from 'react';
import App from '../App';


class Counter extends Component {

    state = {count: 0, greeting: "hi ", currentItem: null, groceries: ["almonds", "oranges"]};

    componentDidMount() {
        this.setState({count: this.state.count + 1})
        //Changes the state whenever the program starts up
        this.counter()       
    }


    counter = () => {
        setInterval(() => {this.setState({count: this.state.count + 1})}, 1000); 
        //This is a counter that starts when you run the app
    }

    updateItem = (e) => {
        e.preventDefault();
        this.setState({currentItem: e.target.value});
        //Still do not understand how this works...wtf is e? target.value?? e.preventDefaults importance???
    }

    addToList = () => {
        const newList = this.state.groceries.concat(this.state.currentItem);
        this.setState({groceries: newList});
    }

 
    render () {
        return (
             
             <div>
             
            
             Here is the count: {this.state.count} 
             <button onClick={console.log(this.state.greeting)}>Calculate </button>

             <p> 
                 <input onChange={this.updateItem}/>
                 Current item on deck is: {this.state.currentItem}
             </p>
             
             <p>
                  <button onClick={this.addToList}> Add to list  </button>
                  { this.state.groceries.map(groceryItem => <div>{groceryItem}</div> ) }
             </p>

             <p>
                 <div> new grocery list is: {this.state.groceries}</div>
             </p>

             </div>
        
       )
    }

}


export default Counter;