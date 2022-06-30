import React from "react";
import { NavLink } from "react-router-dom";

function BooksList({card}){
    return(
        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">

                            {card && card.map((item)=>(
                                <div className="col-md-4 mb-5 myColImg" key={item.id} >
                                    <img src={item.volumeInfo.imageLinks.thumbnail} 
                                    className="bookImg"/>
                                    <div className="card-body bg-warning">
                                        <p className="text-title">{item.volumeInfo.title}</p>
                                        <div className="d-flex justify-content-between">
                                            
                                            <pre>Published Date:
                                            <p>{item.volumeInfo.publishedDate}</p>
                                            </pre>
                                        </div>
                                        
                                        
                                        <NavLink to={`/bookInfo/${item.id}`}> 
                                        <button  className="btn btn-dark">More Info</button>
                                        </NavLink>
                                        

                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BooksList