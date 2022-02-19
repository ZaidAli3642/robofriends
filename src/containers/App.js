import React, { useState, useRef, useEffect } from "react";
import { robots } from "../components/robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import "./App.css";
import Scroll from "../components/Scroll";

const App = () => {
  const search = useRef();
  const [allRobots, setAllRobots] = useState([]);

  const getUserData = async () => {
    // await fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => setAllRobots(users))
    //   .catch((error) => console.log(error));

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setAllRobots(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const onSearchChange = (e) => {
    let searchValue = search.current.value;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setAllRobots(filteredRobots);
  };

  return allRobots.length === 0 ? (
    <h1>Loading!</h1>
  ) : (
    <div className="main-page-component">
      <h1>RoboFriends</h1>

      <SearchBox searchRef={search} searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={allRobots} />
      </Scroll>
    </div>
  );
};

export default App;
