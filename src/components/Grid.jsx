import { Paper } from "@mui/material";
import React from "react";
import "./Grid.css";

const Grid = () => {
    const search = JSON.parse(localStorage.getItem("search"))|| ""
    console.log("res", search)
  const arr = [
    {
      title: "5 Star",
      image: "https://m.media-amazon.com/images/I/61EFFVdwLjL._SL1500_.jpg",
      description: "Cadbury five star chocolate",
      price: 5,
    },
    {
      title: "cadbury dairy milk sil",
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/1214100-2_1-cadbury-dairy-milk-silk-mousse-chocolate-bar.jpg",
      description: "Cadbury dairy milk silk",
      price: 15,
    },
    {
      title: "sneaker filled chocolate",
      image: "https://m.media-amazon.com/images/I/61z0U+vQ8YL._SL1000_.jpg",
      description: "sneaker peanut chocolate",
      price: 25,
    },
    {
      title: "5 Star",
      image: "https://m.media-amazon.com/images/I/61EFFVdwLjL._SL1500_.jpg",
      description: "Cadbury five star chocolate",
      price: 5,
    },
    {
      title: "cadbury dairy milk sil",
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/1214100-2_1-cadbury-dairy-milk-silk-mousse-chocolate-bar.jpg",
      description: "Cadbury five star chocolate",
      price: 5,
    },
    {
      title: "sneaker filled chocolate",
      image: "https://m.media-amazon.com/images/I/61z0U+vQ8YL._SL1000_.jpg",
      description: "sneaker peanut chocolate",
      price: 25,
    },
  ];

  return (
    <div className="grid">
      {arr.filter((el)=>el.title.toLowerCase().includes(search)).map((e) => {
        return (
          <div className="bg">
            <div className="title">{e.title}</div>
            <div className="dis">{e.description}</div>
            <div className="i">
              <img  src={e.image} alt="" />
            </div>
            <div className="price">Price ${e.price} </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
