import React, { useState, useEffect } from "react";

import axios from "axios";

const Map = props => {
  const [rooms, setRooms] = useState([]);
  const dummyData = [
    {
      model: "adventure.room",
      pk: 1,
      fields: {
        title: "Outside Cave Entrance",
        description: "North of you, the cave mount beckons",
        n_to: 2,
        s_to: 0,
        e_to: 0,
        w_to: 0
      }
    },
    {
      model: "adventure.room",
      pk: 3,
      fields: {
        title: "Grand Overlook",
        description:
          "A steep cliff appears before you, falling\ninto the darkness. Ahead to the north, a light flickers in\nthe distance, but there is no way across the chasm.",
        n_to: 0,
        s_to: 2,
        e_to: 0,
        w_to: 0
      }
    },
    {
      model: "adventure.room",
      pk: 2,
      fields: {
        title: "Foyer",
        description:
          "Dim light filters in from the south. Dusty\npassages run north and east.",
        n_to: 3,
        s_to: 1,
        e_to: 4,
        w_to: 0
      }
    },
    {
      model: "adventure.room",
      pk: 4,
      fields: {
        title: "Narrow Passage",
        description:
          "The narrow passage bends here from west\nto north. The smell of gold permeates the air.",
        n_to: 5,
        s_to: 0,
        e_to: 0,
        w_to: 2
      }
    }
  ];
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
      <button onClick={props.handleModal}>X</button>
      {dummyData.map(room => {
        return <div>{room.fields.title}</div>;
      })}
    </div>
  );
};

export default Map;
