

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
    //console.log(props.removePlayer)  //to check if function has been called
    //console.log(props.id) //to check if id has been called
    return(
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>
            <Counter/>
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
        this.setState( prevState =>{
            return{
                score: prevState.score + 1
            };
        });
    }
    decrementScore(){
        //console.log("hi, increment");
        this.setState( prevState =>{
            return{
                score: prevState.score - 1
            };
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


class App extends React.Component{
    //console.log(props.initialPlayers)
    state={
        players:[
            {
                name: "Guil",
                id:1
            },
            {
                name: "Treasure",
                id:2
            },
            {
                name: "Ashley",  
                id:3
            },
            {
                name: "James",
                id:4
            }
        ]
    }

    handleRemovePlayer(id){
        this.setState(prevState => {
            return{
                players: prevState.players.filter(p => p.id !== id)
            }
        });
    }

    render(){
        return(
            <div className="scoreboard">
                <Header 
                    title="Scoreboard" 
                    totalPlayers={this.state.players.length}
    
                />
                {/* Players List */}
                {/* <Player name="pedro" score={2}/> */}
                {this.state.players.map((player,index) =>{
                    return(
                    <Player 
                        name={player.name} 
                        id={player.id}
                        key={index.toString()}   //need to had a key because react needs to know what element to render
                        removePlayer={this.handleRemovePlayer.bind(this)}
                    />
                )})}
            </div>
        )
    } 
}

ReactDOM.render(
    
    <App />,  
    document.getElementById('root')
)