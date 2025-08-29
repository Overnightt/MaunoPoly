import "./App.css"
const Game = () => {
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


