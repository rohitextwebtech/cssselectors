// import Home from "./component/Home";
// import About from "./component/About";
// import Service from "./component/Service";
// import Contact from "./component/Contact";
import React, { useState, useEffect } from "react";
import Navbar from "./Header/Navbar";
import "./App.css";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";

const App = () => {
  //   const[data,setdata]=useState([])

  //   const storedata=()=>{
  //     fetch('https://fakestoreapi.com/products')
  //             .then(res=>res.json())
  //             .then(data=>setdata(data))
  //   }
  // useEffect(() => {
  //   storedata()

  // }, [data])
  // console.log(data)

  {
    /* <div sx={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'1em'}}>
        // {
        //   data.map((item,index)=>{
        //     return(
        //       <>
        //          <Card  key={index}sx={{ minWidth: 275,margin:"1em"}}>
        //           <Typography>{item.title}</Typography>




        //          </Card>
              
              
        //       </>
        //     )

        //   })
        // }
        </div> */
  }

  // </div>

  return (
    <>
      <Navbar />
      {/* <div className="appHandle"> */}

      <div className="HandleUser">
        <div>
          <img
            className="userprofile"
            src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg"
            width="400px"
          />
        </div>
        <div className="rightside">
          <p id="hiithere">Hi there!</p>
          <p className="paragraph">
            By default, we use the combination of a element and a background
            image to display the media. It can be problematic in some
            situations, for example, you might want to display a video or a
            responsive image. Use the component prop for these use cases:
          </p>
        </div>
      </div>
      <div>
        <div className="ploygone">
          <div className="shape"></div>
          <p>
            One November night in the year 1782, so the story runs, two brothers
            sat over their winter fire in the little French town of Annonay,
            watching the grey smoke-wreaths from the hearth curl up the wide
            chimney. Their names were Stephen and Joseph Montgolfier, they were
            papermakers by trade, and were noted as possessing thoughtful minds
            and a deep interest in all scientific knowledge and new discovery.
            Before that night—a memorable night, as it was to prove—hundreds of
            millions of people had watched the rising smoke-wreaths of their
            fires without drawing any special inspiration from the fact.
          </p>
        </div>
      </div>
<div className="Handlecards">
      <div className="cards">
        <h3 className="cardtitle">Amazed with Tastes.</h3>
        <img
          className="images"
          src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"
        />
        <div className="details">
          <p className="fooddesc">
            Food related titles and fun sayings for scrapbooking layouts,
            papercrafting projects and handmade cards.
          </p>
          <h2>$2</h2>
          <button className="addtoCart">Add to cart</button>
        </div>
      </div>
      <div className="cards">
        <h3 className="cardtitle">Amazed with Tastes.</h3>
        <img
          className="images"
          src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"
        />
        <div className="details">
          <p className="fooddesc">
            Food related titles and fun sayings for scrapbooking layouts,
            papercrafting projects and handmade cards.
          </p>
          <h2>$2</h2>
          <button className="addtoCart">Add to cart</button>
        </div>
      </div>
      <div className="cards">
        <h3 className="cardtitle">Amazed with Tastes.</h3>
        <img
          className="images"
          src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"
        />
        <div className="details">
          <p className="fooddesc">
            Food related titles and fun sayings for scrapbooking layouts,
            papercrafting projects and handmade cards.
          </p>
          <h2>$2</h2>
          <button className="addtoCart">Add to cart</button>
        </div>
      </div>
      <div className="cards">
        <h3 className="cardtitle">Amazed with Tastes.</h3>
        <img
          className="images"
          src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"
        />
        <div className="details">
          <p className="fooddesc">
            Food related titles and fun sayings for scrapbooking layouts,
            papercrafting projects and handmade cards.
          </p>
          <h2>$2</h2>
          <button className="addtoCart">Add to cart</button>
        </div>
      </div>
      <div className="cards">
        <h3 className="cardtitle">Amazed with Tastes.</h3>
        <img
          className="images"
          src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" alt='th'
        />
        <div className="details">
          <p className="fooddesc">
            Food related titles and fun sayings for scrapbooking layouts,
            papercrafting projects and handmade cards.
          </p>
          <h2>$2</h2>
          <button className="addtoCart">Add to cart</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default App;
