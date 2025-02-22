import React, { useState } from "react";
import "./Actors.css";

class Actor extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the actor list
    this.actors = [
      {
        name: "Amitabh Bachchan",
        image:"https://m.media-amazon.com/images/M/MV5BNTk1OTUxMzIzMV5BMl5BanBnXkFtZTcwMzMxMjI0Nw@@._V1_FMjpg_UX1000_.jpg",
        movies:[ 
       "Sholay (1975)",
       "Deewar (1975)",
       " Zanjeer (1973)",
       " Amar Akbar Anthony (1977)",
       "Agneepath (1990)",
       "Black (2005)",
       " Paa (2009)",
       " Don (1978)",
       " Pink (2016)",
       " Baghban (2003)",
       ],
      },
      {
        name: "Shah Rukh Khan",
        image:"https://images.moneycontrol.com/static-mcnews/2024/05/20240522135516_WhatsApp-Image-2024-05-22-at-7.21.46-PM.jpg?impolicy=website&width=770&height=431",
        movies:[
        "Dilwale Dulhania Le Jayenge (1995)",
        "Kuch Kuch Hota Hai (1998)",
       " My Name is Khan (2010)",
       " Swades (2004)",
        "Chak De! India (2007)",
       " Devdas (2002)",
        "Kabhi Khushi Kabhie Gham (2001)",
        "Kal Ho Naa Ho (2003)",
        "Pathaan (2023)",
       " Om Shanti Om (2007)",
        ],
      },
      {
        name: "Salman Khan ",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzo9zR25Ltx-rC12Cg2fG_0CDQ2peYHyomqAz9r3KYVAQaUVUZ79jg1QtfzJvRO2qVX4&usqp=CAU",
        movies:[
       " Maine Pyar Kiya (1989)",
        "Hum Aapke Hain Koun..! (1994)",
       " Tere Naam (2003)",
        "Bajrangi Bhaijaan (2015)",
        "Sultan (2016)",
        "Kick (2014)",
        "Dabangg (2010)",
       " Ek Tha Tiger (2012)",
        "Tiger Zinda Hai (2017)",
        "Bodyguard (2011)",
        ],
      },
      {
        name:" Hrithik Roshan ",
        image:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/238324_v9_bb.jpg",
        movies:[
        "Kaho Naa... Pyaar Hai (2000)",
       " Kabhi Khushi Kabhie Gham (2001)",
       " Koi... Mil Gaya (2003)",
        "Dhoom 2 (2006)",
       " Jodhaa Akbar (2008)",
       " Zindagi Na Milegi Dobara (2011)",
        "Agneepath (2012)",
        "Super 30 (2019)",
       " War (2019)",
       " Vikram Vedha (2022)",
        ],
      },
      
      {
        name: "Akshay Kumar",
        image:"https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/09/image-334.png?size=*:900",
        movies:[
        "Hera Pheri (2000)",
       " Khiladi Series (1992–2000)",
       " Bhool Bhulaiyaa (2007)",
       " Special 26 (2013)",
        "Rowdy Rathore (2012)",
       " Baby (2015)",
       " Airlift (2016)",
        "Kesari (2019)",
        "Toilet: Ek Prem Katha (2017)",
       " OMG: Oh My God! (2012)",
        ],
      },
      {
        name: "Ranbir Kapoor ",
        image:"https://media.themoviedb.org/t/p/w500/ymYNHV9luwgyrw17NXHqbOWTQkg.jpg",
        movies:[
       " Rockstar (2011)",
        "Barfi! (2012)",
        "Wake Up Sid (2009)",
        "Yeh Jawaani Hai Deewani (2013)",
        "Tamasha (2015)",
        "Sanju (2018)",
        "Ae Dil Hai Mushkil (2016)",
       " Brahmāstra: Part One – Shiva (2022)",
       " Rocket Singh: Salesman of the Year (2009)",
       " Raajneeti (2010)",
        
          
        ],
      },
      {
        name: "Deepika Padukone ",
        image:"https://img.indiaforums.com/person/480x360/0/2576-deepika-padukone.jpg?c=7rPD3F",
        movies:[
       " Om Shanti Om (2007)",
       "Chennai Express (2013)",
        "Yeh Jawaani Hai Deewani (2013)",
       "Bajirao Mastani (2015)",
       " Padmaavat (2018)",
       " Piku (2015)",
       " Cocktail (2012)",
       "Chhapaak (2020)",
      "Gehraiyaan (2022)",
       "Pathaan (2023)",
    ],
      },
      {
        name:" Priyanka Chopra",
        image:"https://m.media-amazon.com/images/M/MV5BMjAxNzUwNjExOV5BMl5BanBnXkFtZTcwNDUyMTUxNw@@._V1_.jpg",
        movies:[
       " Fashion (2008)",
       " Barfi! (2012)",
       " Mary Kom (2014)",
        "Bajirao Mastani (2015)",
      "  Don (2006)",
        "Dostana (2008)",
       " The White Tiger (2021)",
       " Krrish (2006)",
        "Aitraaz (2004)",
       " Agneepath (2012)",
        ] ,
      },
      {
        name:" Alia Bhatt ",
        image:"https://m.media-amazon.com/images/M/MV5BNTQ2MDBlMzYtMGQxYy00NzUwLTlkYTUtNDkzOWM0ZDJmYjQyXkEyXkFqcGc@._V1_.jpg",
        movies:[
       " Raazi (2018)",
       " Highway (2014)",
       " Gully Boy (2019)",
      "Gangubai Kathiawadi (2022)",
      "Brahmāstra",
       "Udta Punjab (2016)",
       " 2 States (2014)",
       "Kapoor & Sons (2016)",
       " Dear Zindagi (2016)",
       " RRR (2022)",
        
        ],
      },
      {
        name: "Shraddha Kapoor",
        image:"https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/400x300/202410233248019_202410.jpg",
        movies:[
        "Aashiqui 2 (2013)",
       " Ek Villain (2014)",
       " Haider (2014)",
       " ABCD 2 (2015)",
       " Stree (2018)",
       " Chhichhore (2019)",
       " Saaho (2019)",
       " Baaghi (2016)",
        "Baaghi 3 (2020)",
       " Tu Jhoothi Main Makkaar (2023)",
        
],
      },
    ];
  }

  render() {
    return <ActorApp actors={this.actors} />;
  }
}

const ActorApp = ({ actors }) => {
  const [selectedActor, setSelectedActor] = useState(null);

  return (
    <div className="app-container">
      <h1>  10 Famous Indian Actors</h1>
      <div
        className="actor-grid"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {actors.map((actor, index) => (
          <div
            key={index}
            className="actor-card"
            onClick={() => setSelectedActor(actor)}
          >
            <img
              src={actor.image}
              alt={actor.name}
              className="actor-image"
              style={{ height: "200px", width: "200px" }}
            />
            <p className="actor-name">{actor.name}</p>
          </div>
        ))}
      </div>

      {selectedActor && (
        <div className="movie-modal">
          <div className="modal-content">
            <h2>Top 10 Movies of {selectedActor.name}</h2>
            <ol>
              {selectedActor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ol>
            <button
              className="close-button"
              onClick={() => setSelectedActor(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Actor;