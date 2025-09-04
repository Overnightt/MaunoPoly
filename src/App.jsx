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
        { id: 7, name: "Chance1", style: { top: "86%", left: "29%", width: "8.4%", height: "13%" } },
        { id: 8, name: "Rue de Courcelles", style: { top: "86%", left: "21.3%", width: "8.4%", height: "13%" } },
        { id: 9, name: "Avenue de la Republique", style: { top: "86%", left: "13%", width: "8.4%", height: "13%" } },
        { id: 10, name: "Boulevard de la Villette", style: { top: "78%", left: "0%", width: "13%", height: "8%" } },
        { id: 11, name: "Compagnie de Distribution d'Électricité", style: { top: "70%", left: "0%", width: "13%", height: "8%" } },
        { id: 12, name: "Avenue de Neuilly", style: { top: "62%", left: "0%", width: "13%", height: "8%" } },
        { id: 13, name: "Rue de Paradis", style: { top: "54%", left: "0%", width: "13%", height: "8%" } },
        { id: 14, name: "Gare de Lyon", style: { top: "45.5%", left: "0%", width: "13%", height: "8%" } },
        { id: 15, name: "Avenue Mozart", style: { top: "37%", left: "0%", width: "13%", height: "8%" } },
        { id: 16, name: "Caissecom2", style: { top: "29%", left: "0%", width: "13%", height: "8%" } },
        { id: 17, name: "Boulevard Saint-Michel", style: { top: "21%", left: "0%", width: "13%", height: "8%" } },
        { id: 18, name: "Place Pigalle", style: { top: "13%", left: "0%", width: "13%", height: "8%" } },
        { id: 19, name: "Avenue Matignon", style: { top: "0%", left: "13%", width: "8%", height: "13%" } },
        { id: 20, name: "Chance2", style: { top: "0%", left: "21%", width: "8%", height: "13%" } },
        { id: 21, name: "Boulevard Malsherbes", style: { top: "0%", left: "29.5%", width: "8%", height: "13%" } },
        { id: 22, name: "Boulevard Henri-Martin", style: { top: "0%", left: "38%", width: "8%", height: "13%" } },
        { id: 23, name: "Gare du Nord", style: { top: "0%", left: "46%", width: "8%", height: "13%" } },
        { id: 24, name: "Faubourg Saint-Honoré", style: { top: "0%", left: "54%", width: "8%", height: "13%" } },
        { id: 25, name: "Place de la Bourse", style: { top: "0%", left: "62.5%", width: "8%", height: "13%" } },
        { id: 26, name: "Compagnie de Distribution des Eaux", style: { top: "0%", left: "71%", width: "8%", height: "13%" } },
        { id: 27, name: "Rue La Fayette", style: { top: "0%", left: "79%", width: "8%", height: "13%" } },
        { id: 28, name: "Avenue de Breteuil", style: { top: "13%", left: "87%", width: "13%", height: "8%" } },
        { id: 29, name: "Avenue Foch", style: { top: "21%", left: "87%", width: "13%", height: "8%" } },
        { id: 30, name: "Caissecom3", style: { top: "29%", left: "87%", width: "13%", height: "8%" } },
        { id: 31, name: "Boulevard des Capucines", style: { top: "37%", left: "87%", width: "13%", height: "8%" } },
        { id: 32, name: "Gare Saint-Lazare", style: { top: "45.5%", left: "87%", width: "13%", height: "8%" } },
        { id: 33, name: "Chance3", style: { top: "53.5%", left: "87%", width: "13%", height: "8%" } },
        { id: 34, name: "Avenue des Champs-Élysées", style: { top: "62%", left: "87%", width: "13%", height: "8%" } },
        { id: 35, name: "Taxe de luxe", style: { top: "70%", left: "87%", width: "13%", height: "8%" } },
        { id: 36, name: "Rue de la Paix", style: { top: "78.5%", left: "87%", width: "13%", height: "8%" } },
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









