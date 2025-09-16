import React, { useContext } from 'react'
import { MovieContext } from '../context/GlobalState'

const WatchList = () => {
    const {state,handleRemoveFromWatchlist,moveToWatched}=useContext(MovieContext);
  return (
    <div>
      <h1>WatchList</h1>
      <div className="WatchListContainer">
          {state.watchlist && state.watchlist.length>0?
          state.watchlist.map((item) => (
            <div className="watchlist" key={item.id}>
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
              </div >
              <div className='btn' style={{display:'flex', marginBottom: '15px', gap:'10px'}}>
              <button onClick={()=>handleRemoveFromWatchlist(item.id)}> Remove from Watchlist</button>
              <button onClick={()=>moveToWatched(item)}> Move to Watched</button>
            </div>
            </div>
          ))  : 'NO Movie in watchlist'}
        </div>
    </div>
  )
}

export default WatchList
