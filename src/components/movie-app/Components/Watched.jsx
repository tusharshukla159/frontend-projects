import React, { useContext } from 'react'
import { MovieContext } from '../context/GlobalState'

const Watched = () => {
    const {state,handleRemoveFromWatched}=useContext(MovieContext);
  return (
    <div>
      <h1>Watched</h1>
      <div className="WatchedContainer">
          {state.watched && state.watched.length>0?
          state.watched.map((item) => (
            <div className="watched" key={item.id}>
              <div className="img ">
                {item.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  />
                ) : (
                  <div className="fill-img"> No Image Available</div>
                )}
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.release_date}</p>
                <p>{item.original_title}</p>
              </div>
              <button style={{ marginBottom: '15px'}} onClick={()=>handleRemoveFromWatched(item.id)}> Remove from Watched</button>
            </div>
          ))  : 'NO Movie in watched'}
        </div>
    </div>
  )
}

export default Watched
