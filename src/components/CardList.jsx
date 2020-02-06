import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const notFoundMessage = `No matches found`
  return (
    <>
      {!robots.length ? (
        <Card name={notFoundMessage}/>
      ) : (
        robots.map(robot => {
          return (
            <Card
              key={robot.id}
              id={robot.id}
              name={robot.name}
              username={robot.username}
              email={robot.email}
            />
          );
        })
      )}
    </>
  );
};
export default CardList;