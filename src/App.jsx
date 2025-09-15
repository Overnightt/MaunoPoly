import "./App.css"
import { useState } from 'react';

const Game = () => {
    const [Carte_selec, setCarte_selec] = useState(null);
    const propriétés = [
        { id: 1, name: "Boulevard de Belleville", style: { top: "86%", left: "79%", width: "8%", height: "13%" }, img: "/Propriétés/Boulevard_de_belleville.png" },
        { id: 2, name: "Caissecom1", style: { top: "86%", left: "70.5%", width: "8%", height: "13%" } },
        { id: 3, name: "Rue Lecourbe", style: { top: "86%", left: "62%", width: "8%", height: "13%" } , img: "/Propriétés/Rue_lecourbe.png" },
        { id: 4, name: "Impot sur le revenu", style: { top: "86%", left: "54%", width: "8%", height: "13%" } },
        { id: 5, name: "Gare Montparnasse", style: { top: "86%", left: "46%", width: "8%", height: "13%" }, img: "/Propriétés/Gare_montparnasse.png" },
        { id: 6, name: "Rue de Vaugirard", style: { top: "86%", left: "37.5%", width: "8%", height: "13%" }, img: "/Propriétés/Rue_de_vaugirard.png" },
        { id: 7, name: "Chance1", style: { top: "86%", left: "29%", width: "8%", height: "13%" } },
        { id: 8, name: "Rue de Courcelles", style: { top: "86%", left: "21.3%", width: "8%", height: "13%" }, img: "/Propriétés/Rue_de_courcelles.png" },
        { id: 9, name: "Avenue de la Republique", style: { top: "86%", left: "13%", width: "8%", height: "13%" }, img: "/Propriétés/Avenue_de_la_republique.png" },
        { id: 10, name: "Boulevard de la Villette", style: { top: "78%", left: "0%", width: "13%", height: "8%" }, img: "/Propriétés/Boulevard_de_la_villette.png" },
        { id: 11, name: "Compagnie de Distribution d'Électricité", style: { top: "70%", left: "0%", width: "13%", height: "8%" }, img: "/Propriétés/Compagnie_élec.png"  },
        { id: 12, name: "Avenue de Neuilly", style: { top: "61.5%", left: "0%", width: "13%", height: "8%" }, img: "/Propriétés/Avenue_de_neuilly.png" },
        { id: 13, name: "Rue de Paradis", style: { top: "53.5%", left: "0%", width: "13%", height: "8%" }, img: "/Propriétés/Rue_de_paradis.png" },
        { id: 14, name: "Gare de Lyon", style: { top: "45.5%", left: "0%", width: "13%", height: "8%" }, img: "/Propriétés/Gare_de_lyon.png" },
        { id: 15, name: "Avenue Mozart", style: { top: "37%", left: "0%", width: "13%", height: "8%" }, img: "/Propriétés/Avenue_mozart.png" },
        { id: 16, name: "Caissecom2", style: { top: "29%", left: "0%", width: "13%", height: "8%" } },
        { id: 17, name: "Boulevard Saint-Michel", style: { top: "21%", left: "0%", width: "13%", height: "8%" }, img: "/Propriétés/Boulevard_saint-michel.png" },
        { id: 18, name: "Place Pigalle", style: { top: "12.7%", left: "0%", width: "13%", height: "8%" }, img: "/Propriétés/Place_pigalle.png" },
        { id: 19, name: "Avenue Matignon", style: { top: "0%", left: "12.8%", width: "8%", height: "13%" }, img: "/Propriétés/Avenue_matignon.png" },
        { id: 20, name: "Chance2", style: { top: "0%", left: "21%", width: "8%", height: "13%" } },
        { id: 21, name: "Boulevard Malsherbes", style: { top: "0%", left: "29.3%", width: "8%", height: "13%" }, img: "/Propriétés/Boulevard_malesherbes.png" },
        { id: 22, name: "Avenue Henri-Martin", style: { top: "0%", left: "37.6%", width: "8%", height: "13%" }, img: "/Propriétés/Avenue_henri-martin.png" },
        { id: 23, name: "Gare du Nord", style: { top: "0%", left: "45.7%", width: "8%", height: "13%" },img: "/Propriétés/Gare_du_nord.png" },
        { id: 24, name: "Faubourg Saint-Honoré", style: { top: "0%", left: "54%", width: "8%", height: "13%" }, img: "/Propriétés/Faubourg_saint-honoré.png" },
        { id: 25, name: "Place de la Bourse", style: { top: "0%", left: "62.3%", width: "8%", height: "13%" }, img: "/Propriétés/Place_de_la_bourse.png" },
        { id: 26, name: "Compagnie de Distribution des Eaux", style: { top: "0%", left: "70.5%", width: "8%", height: "13%" }, img: "/Propriétés/Compagnie_eaux.png" },
        { id: 27, name: "Rue La Fayette", style: { top: "0%", left: "78.6%", width: "8%", height: "13%" }, img: "/Propriétés/Rue_la_fayette.png" },
        { id: 28, name: "Avenue de Breteuil", style: { top: "12.7%", left: "87%", width: "12.7%", height: "8%" }, img: "/Propriétés/Avenue_de_breteuil.png" },
        { id: 29, name: "Avenue Foch", style: { top: "21%", left: "87%", width: "12.7%", height: "8%" }, img: "/Propriétés/Avenue_foch.png" },
        { id: 30, name: "Caissecom3", style: { top: "29%", left: "87%", width: "12.7%", height: "8%" } },
        { id: 31, name: "Boulevard des Capucines", style: { top: "37%", left: "87%", width: "12.7%", height: "8%" }, img: "/Propriétés/Boulevard_des_capucines.png" },
        { id: 32, name: "Gare Saint-Lazare", style: { top: "45.5%", left: "87%", width: "12.7%", height: "8%" },img: "/Propriétés/Gare_saint-lazare.png" },
        { id: 33, name: "Chance3", style: { top: "53.5%", left: "87%", width: "12.7%", height: "8%" } },
        { id: 34, name: "Avenue des Champs-Élysées", style: { top: "61.7%", left: "87%", width: "12.7%", height: "8%" }, img: "/Propriétés/Avenue_des_champs-élysées.png" },
        { id: 35, name: "Taxe de luxe", style: { top: "69.8%", left: "87%", width: "12.7%", height: "8%" } },
        { id: 36, name: "Rue de la Paix", style: { top: "78%", left: "87%", width: "12.7%", height: "8%" }, img: "/Propriétés/Rue_de_la_paix.png" },
      ];
      const [joueurs, setjoueurs] = useState ([
        {id: 0, name: "Adrien", argent: 1500, piece: "👨‍💼", isTurn: 1, position:0, isJail:0},
        {id: 1, name: "Mathéo", argent: 1500, piece: "🎩", isTurn:0, position:0, isJail:0},
      ]);
    const Endturn = () => {
        setjoueurs((joueur) => {
            const indexTurn = joueur.findIndex((j) => j.isTurn===1)
            const NindexTurn = (indexTurn +1) %joueur.length
            return joueur.map((j,index) => {
                if (index === indexTurn) return {...j , isTurn: 0};
                if (index === NindexTurn)  return {...j , isTurn: 1};
            });
        });
    };
    return (
            <div className="Plat0">
                <audio autoPlay loop>
                    <source src="/OST_Maunopoly.mp3" type="audio/mpeg" />
                </audio>
                <img className="plateau" src="plateau.jpg"/>

                {propriétés.map((p) => (
                    <div key={p.id} className="zone-propriétés" style={p.style} onClick={()=> setCarte_selec(p.img)} />
                ))}
                
                {Carte_selec &&(
                    <div className="overlay" onClick= {()=> setCarte_selec(null)}>
                        <img src={Carte_selec} className="popup"/>
                    </div>
                )}

                <div className="Sidebar-gauche">
                    {joueurs.map((j) => (
                        <div key={j.id} className={`joueurs_${j.isTurn === 1 ? "actif" : ""}`} >
                            <span className="Nom">{j.name}</span>
                            <span className="argent">{j.argent} €</span>
                        </div>
                    ))}
                </div>
                <div className="Sidebar-droite">
                    <button className="Endturn" onClick={Endturn} >Finir le tour</button>
                </div>
            </div>
    );
}
export default Game;























