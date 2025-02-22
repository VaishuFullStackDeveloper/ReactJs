import React from "react";
import "./player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // Button function to display player image and name
  button = (playerImage, playerName) => {
    return (
      <div className="player-card">
        <div>
          <img src={playerImage} alt={playerName} style={{ width: 100, height: 100 }} />
          <p>{playerName}</p>
        </div>
        <button
          className="player-button"
          style={this.props.style}
          onClick={() => console.log(`${playerName} button clicked`)}
        >
        </button>
      </div>
    );
  };

  render() {
    return (

      <div className="team">
        {/* Team-Two */}
        <div className="playersOne">
          <h2>India</h2>

          {this.button(
            "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
            "Virat Kohli"
          )}
          {this.button(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5IMvU5mzUNUAVtUPVexkzgt3cDPUE6113Q&s",
            "Rohit Sharma"
          )}
          {this.button(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTOrxNuvbfIegOS-NrnhAEyFrP_oLB2UrOg&s",
            "Jasprit Bumrah"
          )}
          {this.button(
            "https://api.bdcrictime.com/Profile/kl-rahul-14_10_2023.jpg",
            "K L Rahul"
          )}
          {this.button(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGl9Jw5PJiIdgKtGk0g-UaEvDCkoAxWf9kA&s",
            "Shubman Gill"
          )}
          {this.button(
            "https://upload.wikimedia.org/wikipedia/commons/6/67/Rishabh_Pant_in_PMO_New_Delhi.jpg",
            "Rishbh Pant"
          )}
          {this.button(
            "https://static.india.com/wp-content/uploads/2024/01/siraj1.jpg?impolicy=Medium_Widthonly&w=400&h=800",
            "Mohammad Siraj"
          )}
          {this.button(
            "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTV75mCnfzODQLzEY10b2Gi0-eXvcxmL27iNNlTuFmbSAifHDDng6cN0MbIsdrOTSmiq6bWFZ4U&s=19",
            "shreyas Iyer"
          )}
          {this.button(
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaknkwtT1ndg_r33JROtzOJmO7gqtPPmDK5v7rIlHRP28ohTAG_WhAR6Vs8sFwPlyPkhmtH693Oa4p4Lr2VRirBkl9Tof8qSbaWizZmzR1mg",
            "suryakumar Yadav"
          )}
          {this.button(
            " https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbFiQkfUe_1O69pFXeJZoSIhueXttORMVt3adqMARvyb8FKDKQ9AfTRlJcPk8_gyUspr9iz9tKfvoEZPcodv20o0A194UuQAjU6zYV4m4",
            "Ishan Kisan"
          )}
          {this.button(
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhX7IHVLo6SmDNOEbVaNgcNKncI9lkKuFp0TOBykTvu4OBlV_CYHNwaxcEiflKPPWrA-zxwGg_foMK2tn4wJCG5ntQrl3dU71EWIwdt_uC",
            "Shardul Thakur"


          )}
        </div>
        {/* Team-One */}

        <div className="playersTwo">
          <h2>Australia</h2>

          {this.button(
            "https://opt.toiimg.com/recuperator/img/toi/m-69415515/69415515.jpg",
            "Steve Smith"
          )}
          {this.button(
            "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/travis-head.png",
            "Travis Head"
          )}
          {this.button(
            "https://sportsmatik.com/uploads/world-events/players/pat-cummins_1580467882.jpg",
            "Pat Cummins"
          )}

          {this.button(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMRLwwq4wM5Rrd1nyszAT5SRyKQAYbfMlCn4-PBqVmy67VVhooaFg0xc2zYKiP9gwc9c&usqp=CAU",
            "Glenn Maxwell"
          )}
          {this.button(
            "https://m.media-amazon.com/images/M/MV5BNzQzOTk1MTktYTExNC00NGU0LTllYzAtYzVkZjJjM2EzNmY4XkEyXkFqcGc@._V1_.jpg",
            "Mitchell Marsh"
          )}
          {this.button(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrN3XuJExbOV3AC5H2PGUWlLsLUGqWR7RYqiYp6AOvZVIRcDS8gidPvut6R1ERctS0h1OCj0TC3qKDXXTRKS5V5qX3jxKsozmH_FaJVDD7w",
            "David Warner"
          )}
          {this.button(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8n0-O9VlOnuO-pIaD9uA49D9hZP_AaJvH3qDbc0rlczMIKBjcr2tuu8APl6hh6-YknxE&usqp=CAU",
            "Josh Inglis"
          )}
          {this.button(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToG865AQ87c3ytRhEENz6Qyf2K2cQ-I1FKXv58VtMJ3v2gtTiVOMEtCQIMsj3mEz4ep4Y&usqp=CAU",
            "Cameron Green"
          )}
          {this.button(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQi8o6Z3g-_YvTzuyqv_e4FO1BAfCsIWBt55l8_HMXAjpaQzhkhi96WRLr-KrGPWMu8c&usqp=CAU",
            "Marcus Stoinis"
          )}
          {this.button(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2pk1L19l8aR_LpHLnyqsZGqQKYvAHq4ZERIsZgmpJlS2Jp0oqu2YqUjWAcO4_TecWNA&usqp=CAU",
            "Cooper Connolly"
          )}
          {this.button(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkN9-6Wn4vVI_5foOOe4DoUHV55jsSj4tM9oKYP1lxkxKa3vy0Y1SNWR5M1JaQuOJQ2Fs&usqp=CAU",
            "Alex Carey"

          )}
        </div>

      </div>
    )
  }
}

export default Player;


