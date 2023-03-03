import React from "react";
import Card from "../Card/Card";
import "./List.scss";

function List() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/12513261/pexels-photo-12513261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fashion Look1",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/7533330/pexels-photo-7533330.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Fashion Look2",
      isNew: true,
      oldPrice: 29,
      price: 22,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4560178/pexels-photo-4560178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fashion Look3",
      isNew: true,
      oldPrice: 39,
      price: 32,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/4173167/pexels-photo-4173167.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Fashion Look4",
      isNew: true,
      oldPrice: 49,
      price: 42,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
