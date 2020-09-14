import React, { useState, useEffect } from "react";
import { dbService, storageService } from "huobase";
import Bweet from "components/Bweet";
import BweetForm from "components/BweetsForm";

const Home = ({ userObj }) => {
  const [bweets, setBweets] = useState([]);
  useEffect(() => {
    dbService.collection("bweets").onSnapshot((snapshot) => {
      const bweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBweets(bweetArray);
    });
  }, []);
  return (
    <div className="container">
      <BweetForm userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {bweets.map((bweet) => (
          <Bweet
            key={bweet.id}
            bweetObj={bweet}
            isOwner={bweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;