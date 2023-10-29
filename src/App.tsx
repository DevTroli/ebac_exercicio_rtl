import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Ilustra%C3%A7%C3%A3o-Batmobile-Batman-PNG.png">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
