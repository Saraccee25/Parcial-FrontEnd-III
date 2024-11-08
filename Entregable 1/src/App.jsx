import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import styles from "./App.module.css";


function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {

    setFormData(data);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comparte tus gustos musicales</h1>

      <Form onSubmit={handleFormSubmit} /> 

      {formData && <Card favoriteMusic={formData.favoriteMusic} favoriteSinger={formData.favoriteSinger} />}
    </div>
  );
}

export default App;
