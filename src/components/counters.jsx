import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        countersarray:[
            {
                id:1, value:4
            },
            {
                id:2, value:0
            },
            {
                id:3, value:0
            }
        ]
     };
    handleReset=()=>{
        const countersarray= this.state.countersarray.map(c=>
            {c.value =0
            return c
            });
            this.setState({countersarray})
    }; 
    handleIncrement= cId =>{
        const counters=[...this.state.countersarray]
        const index=cId
        
        counters[index] = {...counters[index]}
        counters[index-1].value=counters[index-1].value+1;
        console.log(cId,index)
        console.log(counters[index-1].value)
        this.setState({ countersarray:counters })
    }

    handleDelete= cId =>{
        const countersarray=this.state.countersarray.filter(c=>c.id!==cId)
        this.setState({countersarray:countersarray})
        console.log('deleted');
    }; 
    render() { 
        return ( 
            <div>
                <button className="btn btn-primary " onClick={this.handleReset}>Reset</button>
                {this.state.countersarray.map( a=> 
                (<Counter 
                    key={a.id} 
                    value={a.value}
                    onDelete={this.handleDelete} 
                    id={a.id}
                    onIncrement={this.handleIncrement}
                    >
               
                </Counter>
                ))}
            </div>
         );
    }
}
 
export default Counters;