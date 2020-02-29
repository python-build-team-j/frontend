import React, { useState, useEffect } from "react";

import axios from "axios";

const Map = props => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/rooms/")
      .then(res => {
        //res.data.rooms is a string for some reason, so this is to take the quotes off
        setRooms(res.data);
      })
      .catch(err => alert(err));
  }, []);

  return (
    <div>
      <button onClick={props.handleModal}>X</button>Map of the world here
      {/* Map over room data here */}
    </div>
  );
};

export default Map;
