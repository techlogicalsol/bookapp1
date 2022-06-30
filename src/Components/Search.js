import React from "react";

function Search({query, setQuery, handleSubmit}){
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h1 className="display-2 text-center mb-4">Digital Books</h1>
                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="search......"
                                className="form-control"
                                value={query}
                                onChange={e=> setQuery(e.target.value)}
                                />
                        </div>
                        <button className="btn btn-dark">Search</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Search