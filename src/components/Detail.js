import React from "react"


export const Detail = (props) => {
    
    const {title , people } = props.detail

    const data = [].concat(people)
        .sort( (curr , prev) => prev.mass - curr.mass )
        .map( (item , i ) => <h4 key={i}>name : {item.name} , mass : {item.mass}</h4>)
           
    return(
        <div style={{width:"80%" , height:"100vh" , background:"yellow"}}>
            <h1>{title}</h1>
            {
                data
            }

        </div>
    )

}