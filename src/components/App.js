import React from "react"
import {Menu} from "./Menu"
import {Detail} from "./Detail"
import axios from "axios"

class App extends React.Component {


    state = {
        people : [],
        title : "Home",
    }

    handleClick = (title) => {
       if( title === "People"){    
        axios.get("https://swapi.co/api/people")
        .then(response => this.setState({
            people : response.data.results,
            title
        }))

       }else{
            this.setState({
                people : [],
                title 
            })
       }
    }
    render(){

        return(
            <div style={{ display: "flex" , textAlign:"center"}}>
                <Menu click={this.handleClick}/>
                <Detail detail={this.state}/>
            </div>
           
        )
    }

}

export default App