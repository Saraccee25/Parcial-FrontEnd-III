import { useState } from "react";
import styles from "./Form.module.css";

function Form({ onSubmit }) {
  const [favoriteMusic, setFavoriteMusic] = useState("");
  const [favoriteSinger, setFavoriteSinger] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (favoriteMusic.length < 3 || favoriteMusic.startsWith(" ")) {
      setError(true);
      return;
    }
    if (favoriteSinger.length < 6) {
      setError(true);
      return;
    }

    setError(false);
    onSubmit({ favoriteMusic, favoriteSinger }); 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>Tipo de música favorita</label>
      <input
        type="text"
        placeholder="Escribe tu música favorita"
        value={favoriteMusic}
        onChange={(e) => setFavoriteMusic(e.target.value)}
        className={styles.input}
      />

      <label className={styles.label}>Cantante favorito/a</label>
      <input
        type="text"
        placeholder="Escribe tu cantante favorito/a"
        value={favoriteSinger}
        onChange={(e) => setFavoriteSinger(e.target.value)}
        className={styles.input}
      />

      <button type="submit" className={styles.button}>
        Enviar
      </button>

      {error && <p className={styles.error}>Por favor chequea que la información sea correcta</p>}
    </form>
  );
}

export default Form;
