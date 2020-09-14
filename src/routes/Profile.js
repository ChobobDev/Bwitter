import React, { useEffect } from "react";
import { authService, dbService } from "huobase";
import { useHistory } from "react-router-dom";


export default ({ userObj }) => {
    const history = useHistory();
    const onLogOutClick = () => {
      authService.signOut();
      history.push("/");
    };

    const getMyBweets = async () => {
        const bweets = await dbService
          .collection("bweets")
          .where("creatorId", "==", userObj.uid)
          .orderBy("createdAt")
          .get();
        console.log(bweets.docs.map((doc) => doc.data()));
      };
    
      useEffect(() => {
        getMyBweets();
      }, []);

    return (
    <>
        <button onClick={onLogOutClick}>Log Out</button>
    </>
    )};