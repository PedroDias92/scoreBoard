const players=[
    {
        name: "Guil",
        score: 50
      },
      {
        name: "Treasure",
        score: 85
      },
      {
        name: "Ashley",
        score: 95
      },
      {
        name: "James",
        score: 80
      }
]

function Header (props){
    console.log(props)
    return(
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return(
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter score={props.score}/>
        </div>
    );
}

class Counter extends React.Component{
    /* constructor(){
        super(); //calls the React.Component methods and variables
        this.state ={   //is part of React.Component
            score:0
        };
    } */
    //or
    state={
        score:0
    };

    incrementScore(){
        //console.log("hi, increment");
        this.setState({
            score: this.state.score + 1
        });
    }
    decrementScore(){
        //console.log("hi, decrement");
        this.setState({
            score: this.state.score - 1
        });
    }

    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
            </div>
        );
    }
}


const App = (props) =>{
    //console.log(props.initialPlayers)
    return(
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={props.initialPlayers.length}

            />
            {/* Players List */}
            {/* <Player name="pedro" score={2}/> */}
            {props.initialPlayers.map((player,index) =>{
                return(
                <Player 
                    name={player.name} 
                    key={index.toString()}   //need to had a key because react needs to know what element to rende
                />
            )})}
        </div>
    )
}

ReactDOM.render(
    
    <App initialPlayers={players}/>,  
    document.getElementById('root')
)