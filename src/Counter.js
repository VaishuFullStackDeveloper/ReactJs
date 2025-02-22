import React from "react";
import "./Counter.css"
class Counter extends React.Component{
    constructor(props){
     super(props);
     this.state = {
      count:0
     };   
};

render(){
 return (
    <div className="counterButton">
<button style={this.props.buttonstyle} className="buttonIncre" onClick={()=>this.setState({count:this.state.count+1})}>
   <p className="counter-display">num:{this.state.count}</p>
</button>
   </div>
)  
}
};
export default Counter;