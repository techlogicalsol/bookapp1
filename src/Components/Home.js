import axios from "axios";
import React, { useEffect, useState } from "react";
import BooksList from "./BooksList";
import Search from "./Search";

function Home(){

    const [query, setQuery] = useState('');
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
        )
        //if(response.data.items.length > 0){
            
            console.log(response)
            setCard(response.data.items)
        }        
    

    return(
        <>

<div class="jumbotron jumbotron-fluid">
  <div class="container">
            <Search 
                query={query}
                setQuery={setQuery}
                handleSubmit={handleSubmit}
            />
  </div>
</div>
           


            <BooksList card={card}/>

            

        </>
    )
}

export default Home