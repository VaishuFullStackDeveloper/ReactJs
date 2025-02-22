// import React from "react";
// import "./MyComponent.css";


// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
// this.state = {
//             lastClicked: null,
//             counterOne: 0,
//             counterTwo: 0,

//         };
//     }
// counterIncre = (buttonClicked) => {
//         console.log(buttonClicked);
//         this.setState({ lastClicked: buttonClicked });
//         this.setState({ counter: ++this.state.counterOne });
// };
//     renderScore = () => {
//         let textStyle = { color: "black", fontsize: "14px" };
//         if (this.state.lastClicked == "PlayerOne") {
//             textStyle = { color: "purple", fontsize: "14px", };
//         }
//         else if (this.state.lastClicked == "PlayerTwo") {
//             textStyle = { color: "green", fontsize: "14px" };
//         }
//         else if (this.state.lastClicked == "PlayerThree") {
//             textStyle = { color: "red", fontsize: "14px" };
//         }
//         return <text style={textStyle}>{this.state.counterOne}</text>
// };
//     renderButtons = (playerName) => {
//         let buttonstyle = { backgroundColor: "lightblue", fontsize: "20px" };
//         if (this.state.lastClicked === playerName) {
//             buttonstyle = { backgroundColor: "green", fontsize: "20px" };
//         }
//         return (
//             <button className="button"
//                 style={buttonstyle}
//                 onClick={() => this.counterIncre(playerName)}
            
//             >
// {playerName}

//             </button>
//         );
//     };
//  render() { 

//      return (
//             <div className="team">
//                 {this.renderScore()}
//                 {this.renderButtons("PlayerOne")}
//                 {this.renderButtons("PlayerTwo")}
//                 {this.renderButtons("PlayerThree")}
//             </div>

//         );
//     }
// }
// export default MyComponent;




// import React from "react";
// import "./MyComponent.css";


// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
// this.state = {
//             lastClicked: null,
//             counterOne: 0,
//             counterTwo: 0,
//             buttonA:true,
//             buttonB:true,
//             buttonC:true,

//         };
//     }
//     counterIncre = (buttonClicked) => {
//         console.log(buttonClicked);
       
//         if(buttonClicked === "PlayerOne"){
//           this.setState({ buttonA: false });
//         }else if( buttonClicked==="PlayerTwo"){
//          this.setState({buttonB:false});
//         }else if( buttonClicked==="PlayerThree"){
//           this.setState({buttonC:false});
//         }else if( buttonClicked==="PlayerFour"){
//             this.setState({buttonD:false});
//           } else if( buttonClicked==="PlayerFive"){
//             this.setState({buttonE:false});
//           }else if( buttonClicked==="PlayerSix"){
//             this.setState({buttonF:false});
//           }else if( buttonClicked==="PlayerSeven"){
//             this.setState({buttonG:false});
//           }else if( buttonClicked==="PlayerEight"){
//             this.setState({buttonH:false});
//           }else if( buttonClicked==="PlayerNine"){
//             this.setState({buttonI:false});
//           }else if( buttonClicked==="PlayerTen"){
//             this.setState({buttonJ:false});
//           }else if( buttonClicked==="PlayerEleven"){
//             this.setState({buttonK:false});
//           }
//             this.setState({lastClicked: buttonClicked});
//             this.setState({ counter: ++this.state.counterOne });
//      };

//     renderScore = () => {
//         let textStyle = { color: "black", fontsize: "14px" };
//         if (this.state.lastClicked === "PlayerOne") {
//             textStyle = { color: "purple", fontsize: "14px", };
//         }
//         else if (this.state.lastClicked === "PlayerTwo") {
//             textStyle = { color: "green", fontsize: "14px" };
//         }
//         else if (this.state.lastClicked === "PlayerThree") {
//             textStyle = { color: "red", fontsize: "14px" };
//         }
//         return <text style={textStyle}>{this.state.counterOne}</text>
// };
//     renderButtons = (playerName) => {
//         let buttonstyle = { backgroundColor: "lightblue", fontsize: "20px" };
//         // if (this.state.lastClicked === playerName) {
//         //     buttonstyle = { backgroundColor: "green", fontsize: "20px" };
//         // }
//         return (
//             <button className="button"
//                 style={buttonstyle}
//                 onClick={() => this.counterIncre(playerName)}
            
//             >
// {playerName}

//             </button>
//         );
//     };
//  render() { 

//      return (
//             <div className="team">
//                 {this.renderScore()}
//                 {this.state.buttonA ? this.renderButtons("PlayerOne"):null}
//                 {this.state.buttonB ? this.renderButtons("PlayerTwo"):null}
//                 {this.state.buttonC ? this.renderButtons("PlayerThree"):null}
//                 {this.state.buttonD ? this.renderButtons("PlayerFour"):null}
//                 {this.state.buttonE ? this.renderButtons("PlayerFive"):null}
//                 {this.state.buttonF ? this.renderButtons("PlayerSix"):null}
//                 {this.state.buttonG ? this.renderButtons("PlayerSeven"):null}
//                 {this.state.buttonH ? this.renderButtons("PlayerEight"):null}
//                 {this.state.buttonI ? this.renderButtons("PlayerNine"):null}
//                 {this.state.buttonJ ? this.renderButtons("PlayerTen"):null}
//                 {this.state.buttonK ? this.renderButtons("PlayerEleven"):null}
//             </div>

//         );
//     }
// }
// export default MyComponent;


// import React from "react";
// import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//         lastClicked: null,
//         changeButton: null,
//         counterone: 0,
//         countertwo: 0,
//         buttonA: true,
//         buttonB: true,
//         buttonC: true,
//         buttonF: true,
//         buttonE: true,
//         buttonF: true,
//         buttonG: true,
//         buttonH: true,
//         buttonI: true,
//         buttonJ: true,
//         buttonK: true,
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     if(buttonClicked === "player one"){
//       this.setState({ buttonA: false });
//     }else if( buttonClicked==="player two"){
//      this.setState({buttonB:false})
//     }else if( buttonClicked==="player three"){
//       this.setState({buttonC:false}) 
//     }else if( buttonClicked==="player four"){
//       this.setState({buttonD:false}) 
//     }else if( buttonClicked==="player five"){
//       this.setState({buttonE:false}) 
//     }else if( buttonClicked==="player six"){
//       this.setState({buttonF:false}) 
//     }else if( buttonClicked==="player seven"){
//       this.setState({buttonG:false}) 
//     }else if( buttonClicked==="player eight"){
//       this.setState({buttonH:false}) 
//     }else if( buttonClicked==="player nine"){
//       this.setState({buttonI:false}) 
//     }else if( buttonClicked==="player ten"){
//       this.setState({buttonJ:false}) 
//     }else if( buttonClicked==="player eleven"){
//       this.setState({buttonK:false}) 
//     }
//         this.setState({lastClicked: buttonClicked});
//         this.setState({ counter: ++this.state.counterone });
//       };
   

//   renderScore = () => {
//     return<text>{this.props.teamName}</text>
//     let textStyle ={color:"black",fontSize:"20px"}
//     if(this.state.lastClicked ==="player one"){
//         textStyle={color:"yellow",fontSize:"20px"}
//     } else if(this.state.lastClicked ==="player two"){
//         textStyle={color:"green",fontSize:"20px"}
//     } else if(this.state.lastClicked ==="player three"){
//         textStyle={color:"purple",fontSize:"20px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName) => {
//     // const isSelected = this.state.changeButton === playerName; // Check if the button is selected
//     // const btnStyle = isSelected
//     //   ? { backgroundColor: "green", fontSize: "20px" } // Green for the selected button
//     //   : { backgroundColor: "lightcoral", fontSize: "20px" }; // Default style

//     // let btnstyle = { backgroundColor: "lightcoral", fontSize: "20px"}
//     // if (this.state.lastClicked == playerName){
//     //   btnstyle = { backgroundColor: "green", fontSize: "20px"};
//     // }
//     // let ispresent = this.state.lastClicked.indexOf.(playerName) > -1;
//     let buttonStyle = this.props.buttonStyle;

//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)}
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {
     
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.state.buttonA ? this.renderButton("player one"): null }
//         {this.state.buttonB ?  this.renderButton("player two" ): null }
//         {this.state.buttonC ? this.renderButton("player three"): null }
//         {this.state.buttonD ? this.renderButton("player four"): null }
//         {this.state.buttonE ?  this.renderButton("player five" ): null }
//         {this.state.buttonF ? this.renderButton("player six"): null }
//         {this.state.buttonG ? this.renderButton("player seven"): null }
//         {this.state.buttonH ?  this.renderButton("player eight" ): null }
//         {this.state.buttonI ? this.renderButton("player nine"): null }
//         {this.state.buttonJ ? this.renderButton("player ten"): null }
//         {this.state.buttonK ?  this.renderButton("player eleven" ): null }
      
//       </div>
//     );
//   }
// }
// export default MyComponent;



import React from "react";
import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// import { CAlert } from '@coreui/react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
        lastClicked: null,
      counterone: 0,
      countertwo: 0,
      buttonArray:[true,true,true,true,true,true,true,true,true,true,true],
       
    };
  }
  counterIncr = (index, buttonClicked) => {
    
    let copiedArray ={...this.state.buttonArray};
    copiedArray[index]= false;
    this.setState({buttonArray : copiedArray})
 
    // this.setState({lastClicked: buttonClicked});
    this.setState({ counter: ++this.state.counterone });
  };
  renderScore = () => {
    return <text>{this.props.teamName}</text>;
  };

  renderButton = (index,playerName) => {
     // const isSelected = this.state.changeButton === playerName; // Check if the button is selected
    // const btnStyle = isSelected
    //   ? { backgroundColor: "green", fontSize: "20px" } // Green for the selected button
    //   : { backgroundColor: "lightcoral", fontSize: "20px" }; // Default style

    // let btnstyle = { backgroundColor: "lightcoral", fontSize: "20px"}
    // if (this.state.lastClicked == playerName){
    //   btnstyle = { backgroundColor: "green", fontSize: "20px"};
    // }
    // let ispresent = this.state.lastClicked.indexOf.(playerName) > -1;
    let buttonStyle = this.props.buttonStyle;
    return (
      <button
        className="button"
        style={buttonStyle}
        onClick={()=>this.counterIncr(index,playerName)  }
      >
        {playerName}
      </button>
    );
  };
  render() {
    return (
      <div className="team">
        {this.renderScore()}
        {this.state.buttonArray[0] ? this.renderButton(0,"player one"):null}
        {this.state.buttonArray[1] ? this.renderButton(1,"player two"):null}
        {this.state.buttonArray[2] ? this.renderButton(2,"player three"):null}
        {this.state.buttonArray[3] ? this.renderButton(3,"player four"):null}
        {this.state.buttonArray[4] ? this.renderButton(4,"player five"):null}
        {this.state.buttonArray[5] ? this.renderButton(5,"player six"):null}
        {this.state.buttonArray[6] ? this.renderButton(6,"player seven"):null}
        {this.state.buttonArray[7] ? this.renderButton(7,"player eight"):null}
        {this.state.buttonArray[8] ? this.renderButton(8,"player nine"):null}
        {this.state.buttonArray[9] ? this.renderButton(9,"player ten"):null}
        {this.state.buttonArray[10]? this.renderButton(10,"player eleven"):null}
      </div>
    );
  }
}
export default MyComponent;