import React, { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState([]);
  const [childData, setChildData] = useState([]);
  const [grandChildData, setGrandChildData] = useState([]);
  const [grandChildSonData, setGrandChildSonData] = useState([]);

  const displayDataFunc = () => {
    fetch(
      `https://vibencode-mock-api.onrender.com/user`
    ).then((res) => {
      let data = res.json();
      data.then((result) => {
        setUserData(result);
      });
    });
  };

  useEffect(() => {
    displayDataFunc();
  }, []);

  const handleAccesschildElement = (c) => {
    setChildData(c.child);
  };

  const handleAccessGrandChild = (grand) => {
    setGrandChildData(grand.child);
  };

  const handleAccessGrandSonChild = (grandSon) => {
    setGrandChildSonData(grandSon.child);
  };

  return (
    <div >
      {userData &&
        userData.map((c) => {
          return (
            <button key={c.id} className="userButton" onClick={() => handleAccesschildElement(c)}>
              {c.name}
            </button>
          );
        })}
      <div>
        {childData &&
          childData.map((grand) => {
            return (
              <button key={grand.id} className="childUserButton" onClick={() => handleAccessGrandChild(grand)}>
                {grand.name}
              </button>
            );
          })}
      </div>

      <div>
        {grandChildData &&
          grandChildData.map((grandSon) => {
            return (
              <button key={grandSon.id} className="grandChildUserButton" onClick={() => handleAccessGrandSonChild(grandSon)}>
                {grandSon.name}
              </button>
            );
          })}
      </div>

      <div>
        {grandChildSonData &&
          grandChildSonData.map((cElement) => {
            return <button key={cElement.id} className="grandChildUserSonButton">{cElement.name}</button>;
          })}
      </div>
    </div>
  );
};
export default User;
