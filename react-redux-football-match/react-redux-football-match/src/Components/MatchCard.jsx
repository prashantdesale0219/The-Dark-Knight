import React from "react";

export const MatchCard = ({match}) => {
  return (
    <div className="match-card" style={{display:"grid",gridTemplateColumns:"3 1fr",border:"1px solid black"}}>

<img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" height={200} width={200} alt="" />
<h3>{match.competition}</h3>
<p>{match.year}</p>
<h4>{match.team1}</h4>
<h4>{match.team2}</h4>
<button>Watchlist</button>

      {/* show the match details   */}
      {/* use any static image, its not provided in server data  */}
    </div>
  );
};
