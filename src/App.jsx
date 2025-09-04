import "./App.css"
import { useState } from 'react';

const Game = () => {
    const propriétés = [
        { id: 1, name: "Boulevard de Belleville", style: { top: "86%", left: "79%", width: "8.5%", height: "13%" } },
        { id: 2, name: "Caissecom1", style: { top: "20%", left: "20%", width: "10%", height: "10%" } },
      ];
    return (
            <div className="Plat0">
                <audio autoPlay loop>
                    <source src="/OST_Maunopoly.mp3" type="audio/mpeg" />
                </audio>
                <img className="plateau" src="plateau.jpg"/>
                {propriétés.map((p) => (
                    <div key={p.id} className="zone-propriétés" style={p.style} onClick={()=> alert(`You clicked on ${p.name}`)} />
                ))}
            </div>
    );
}
export default Game;




