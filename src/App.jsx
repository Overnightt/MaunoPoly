import "./App.css"
import { useState } from 'react';

const Game = () => {
    const propriétés = [
        { id: 1, name: "Boulevard de Belleville", style: { top: "86%", left: "79%", width: "8.4%", height: "13%" } },
        { id: 2, name: "Caissecom1", style: { top: "86%", left: "70.5%", width: "8.4%", height: "13%" } },
        { id: 3, name: "Rue Lecourbe", style: { top: "86%", left: "62%", width: "8.4%", height: "13%" } },
        { id: 4, name: "Impot sur le revenu", style: { top: "86%", left: "54%", width: "8.4%", height: "13%" } },
        { id: 5, name: "Gare Montparnasse", style: { top: "86%", left: "46%", width: "8.4%", height: "13%" } },
        { id: 6, name: "Rue de Vaugirard", style: { top: "86%", left: "37.5%", width: "8.4%", height: "13%" } },
        { id: 7, name: "Chance1", style: { top: "86%", left: "29,6%", width: "8.4%", height: "13%" } },
        { id: 8, name: "Rue de Courcelles", style: { top: "86%", left: "21.3%", width: "8.4%", height: "13%" } },
        { id: 9, name: "Avenue de la Republique", style: { top: "86%", left: "13%", width: "8.4%", height: "13%" } },
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





