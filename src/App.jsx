import "./App.css"
import { useState } from 'react';

const Game = () => {
    const properties = [
        { id: 1, name: "Boulevard de Belleville", style: { top: "X%", left: "X%", width: "X%", height: "X%" } },
      ];
    return (
        <>
            <div >
                <audio autoPlay loop>
                    <source src="/OST_Maunopoly.mp3" type="audio/mpeg" />
                </audio>
                <img className="plateau" src="plateau.jpg"/>
            </div>
        </>
    );
}
export default Game;



