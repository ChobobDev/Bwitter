import React, { useState } from "react";

const Home = () => {
    const [bweet,setBweet] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
    };
    const onChange = (event)=> {
        const {
            target: {value}
        } = event;
        setBweet(value);

    };
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={bweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120}/>
                <input type="submit" value="Bweet" />
            </form>
        </div>
    );
}
export default Home;