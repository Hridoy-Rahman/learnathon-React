import React, {  } from "react";
import styles from "./StylingInReact/style.module.css";
import { Link } from "react-router-dom";
import User from "./User";


const btn = {
  padding: "5px",
  borderRadius: "5px",
  border: "none",
};

const Users = () => {
    const users = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
          },
        },
      ];

  return (
    <div className={styles.box}>
      {users.map((user) => (
        <div className={styles.header} key={user.id}>
          <h3>Id : {user.id}</h3>
          <h3>Name : {user.name}</h3>
          <p className={styles.paragraph}> Email : {user.email}</p>
          <button type="submit" style={btn}>
            <Link to={`/user/${user.id}`}>Show Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;




