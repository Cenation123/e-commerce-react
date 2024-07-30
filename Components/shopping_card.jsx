import React from "react";
import NavBar from "../Components/NavBar";
import Herosectionnavbar from "../Components/herosectionNavbar";
import Scoller from "./sideSroll";
import ShoppingcartData from "./ShoppingcartData";
export default function ShoppingCard() {
  const shoeDataArr = Object.values(ShoppingcartData[0]);
  // const wishlist =
  return (
    <>
      <div className="flex_box">
        <div className="display_grid">
          <Scoller />
          {shoeDataArr.map((shoeData) => {
            return (
              <section className="shopping_card">
                <div className="shopping_details">
                  <div className="shoe-availabe">
                    <img className="card-img" src={shoeData.imageURL} alt="" />
                    <p className="card-stocks">
                      {shoeData.is_in_inventory ? "inStock" : "Out of Stock"}
                    </p>
                    <p className="card-category">{shoeData.category}</p>
                  </div>
                  <h5 className="card-name">{shoeData.name}</h5>
                  <div className="card_general">
                    <p className="card-price">${shoeData.price}</p>
                    <p className="card-gender">{shoeData.gender}</p>
                  
                  </div>

                  <button className="nike">Buy Now</button>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
