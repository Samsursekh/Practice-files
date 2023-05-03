import React, { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState([]);
  const [child, setChild] = useState([]);
  const [grandChild, setGrandChild] = useState([]);
  const [grandChildSon, setGrandChildSon] = useState([]);

  console.log(child, "is there any child or not");
  const handleClickUser = (u) => {
    let childDataAfterClick = u.child;
    console.log(childDataAfterClick, "U getting or not");
    setChild(childDataAfterClick);
  };

  const handleClickUserForGrandChild = (c) => {
    let childDataAfterClick = c.child;
    console.log(childDataAfterClick, "U getting or not");
    setGrandChild(childDataAfterClick);
  };

  const handleClickUserForGrandChildSon = (g) => {
    let childDataAfterClick = g.child;
    console.log(childDataAfterClick, "U getting or not");
    setGrandChildSon(childDataAfterClick);
  };

  const displayDataFunc = () => {
    fetch(
      `https://raw.githubusercontent.com/Vibencode-Solutions/mock-api/main/api.json`
    ).then((res) => {
      let data = res.json();
      data.then((result) => {
        console.log(result, "result");
        setUserData(result);
      });
    });
  };

  useEffect(() => {
    displayDataFunc();
  }, []);

  return (
    <div>
      {userData &&
        userData.map((u) => {
          return (
            <div>
              <button
                onClick={() => {
                  handleClickUser(u);
                }}
              >
                {u.name}
              </button>
              <div>
                {child &&
                  child.map((c) => {
                    return (
                      <button
                        onClick={() => {
                          handleClickUserForGrandChild(c);
                        }}
                      >
                        {c.name}
                      </button>
                    );
                  })}
              </div>
              <div>
                {grandChild &&
                  grandChild.map((g) => {
                    return (
                      <button
                        onClick={() => {
                          handleClickUserForGrandChildSon(g);
                        }}
                      >
                        {g.name}
                      </button>
                    );
                  })}
              </div>
              <div>
                {grandChildSon &&
                  grandChildSon.map((gcs) => {
                    return <button>{gcs.name}</button>;
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default User;
