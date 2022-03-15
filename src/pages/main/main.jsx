import React, { useCallback, useEffect, useState } from "react";
import CardPreview from "../../components/preview/preview";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./main.module.css";
import Editor from "../../components/editor/editor";

const Main = ({ logout, ImgFileInput, database, user }) => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    if (!user) {
      return;
    }
    const stopRead = database.readData(user, (cards) => {
      setCards(cards);
    });
    return () => stopRead();
  }, [user, database]);

  const createOrUpdateForm = useCallback(
    (card) => {
      setCards((cards) => {
        const updated = { ...cards };
        updated[card.id] = card;
        return updated;
      });
      database.writeData(user, card);
    },
    [database]
  );

  const deleteForm = (card) => {
    setCards((cards) => {
      const willUpdated = { ...cards };
      delete willUpdated[card.id];
      return willUpdated;
    });
    database.removeData(user, card).then(console.log);
  };

  return (
    <section className={styles.main}>
      <Header onLogout={logout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          onAdd={createOrUpdateForm}
          onDelete={deleteForm}
          onUpdate={createOrUpdateForm}
          ImgFileInput={ImgFileInput}
        />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
