import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";



function BookInfo(){
   

    const {id} = useParams()

    let history = useHistory();

    const handleClick = ()=>{
        history.push("/")
        history.replace();
    }


    const [query, setQuery] = useState('')
    const [bookCard, setBookCard] = useState([])

    const handleSubmit = async () =>{
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${id}`
        )
         console.log(response)
        if(response.data.items.length > 0){
        setBookCard(response.data.items)

        }
    }

    const detailInfo = bookCard.filter((product, index)=>{
        return product.id == id;
    })

    useEffect(()=>{
        handleSubmit()
    },[])

    return(
        <>
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-12">

                <button onClick={handleClick} 
                    className="btn btn-outline-secondary">
                        Go Home
                    </button>


                    {detailInfo && detailInfo.map((item)=>(
                    <div className="row">
                        
                        <div className="col-md-4 mt-5" key={item.id}>
                            <img src={item.volumeInfo.imageLinks.thumbnail}  className="infoImg"/>
                            
                            <p className="mt-3">
                                Title: 
                            {item.volumeInfo.title ? 
                            `${item.volumeInfo.title}` : "Not Given"}
                            </p>

                            <p>Subtitle: {item.volumeInfo.subtitle ? 
                            `${item.volumeInfo.subtitle}` : "Not Given"}
                            </p>
                        </div>

                        <div className="col-md-8 mt-5">
                            <div className="abc">
                            <h1>Title: {item.volumeInfo.title ? `${item.volumeInfo.title}` : "Not Given"}</h1>
                            <p>Page Count: {item.volumeInfo.pageCount}</p>
                            <p>Language: {item.volumeInfo.language}</p>
                            <p>Authors: {item.volumeInfo.authors}</p>
                            <p>Publisher: {item.volumeInfo.publisher}</p>
                            <p>Rating: {item.volumeInfo.ratingsCount}</p>
                            <p>Category: {item.volumeInfo.categories}</p>
                            </div>

                            <div className="d-flex mt-5 mb-5 mylinks">
                                <a 
                                    href={item.volumeInfo.previewLink}
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    color="default"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Preview Link
                                </a>

                                <a 
                                    href={item.volumeInfo.infoLink}
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    color="default"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Info Link
                                </a>
                            </div>

                          
                            
                        </div>

                        <div className="col-md-10 mx-auto">
                           <h3> Description </h3>
                            
                            {item.volumeInfo.description}
                        </div>
                    
                    </div>
                    ))}
                </div>
                  
                        
                </div>
             
            </div>
                
          
      
    
        

        </>
    )
}

export default BookInfo