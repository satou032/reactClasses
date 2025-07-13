import { use, useState } from "react";

function App() {
  // state(état, données)
  const [compteur, setCompteur] = useState(1);
  // je viens de définir un state que j'ai initialisé à 1
  //que je récupère dans une variable compteur
  //et que je ne pourrai modif

  //comportements
  const handleClick = () => {
    console.log("compteur", compteur);
    setCompteur(compteur + 1);
    console.log("compteur", compteur);
  };

  //affichage (render)
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Incremente</button>
    </div>
  );
}

export default App;
