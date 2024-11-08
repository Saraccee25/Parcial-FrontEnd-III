//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import styles from "./Card.module.css";

function Card({ favoriteMusic, favoriteSinger }) {
  return (
    <div className={styles.card}>
      <h2>Información Ingresada</h2>
      <p>Tipo de música favorita: {favoriteMusic}</p>
      <p>Cantante favorito/a: {favoriteSinger}</p>
    </div>
  );
}

export default Card;



