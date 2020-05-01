import React, { Component } from 'react';

class Counter extends Component {
   /*  state={
        counter:this.props.value,
        //imageurl:"http://picsum.photos/200"
        //tagsarray:[],
    }; */

    styles={
       fontSize:50,
       fontWeight:'bold'
    };

   /*  constructor() {
        super();
        this.incrementCount=this.incrementCount.bind(this);
    }  
    incrementCount=()=>{
         
        //console.log('hii'+this.state.counter);

        this.setState({counter : this.state.counter+1});
    }*/
    render() { 
        return(
        <div>{/* You can use here <React.Fragment> but that will create everything in a single line 
         <img src={this.state.imageurl} alt="sorry"/>  */}     
        <span className={this.badgeClass()} style={ this.styles }>{this.formatCount()}</span> 
        <button onClick={()=>this.props.onIncrement(this.props.id)} className="btn btn-secondary btn-sm" >increment</button>
        <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button> 
         {/*<div>{this.renderTags()}</div>      {/*default is unordered list
        <div>{this.state.tagsarray.length===0 && "Enter array"}</div>*/}
        </div>
        );
    }
  
    badgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        return this.props.value===0?"zero":this.props.value
    } 
    
    renderTags(){
        return this.state.tagsarray.length===0 ? "no tags array...." : this.state.tagsarray.map(tag => <li key={tag} >{tag}</li>)
    }
}
 
export default Counter;