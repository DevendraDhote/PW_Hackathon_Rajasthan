import React, { useEffect, useState } from "react";
import Style from "./style.module.css";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch("/users");
    const data = await response.json();
    setUser(data);
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  // console.log("data", user);

  return (
    <div>
      <div Class={Style.container}>
        <div className={Style.overlay}>
          <div className={Style.text_div}>
            <h1>Could you be selling more & wasting less? </h1>
            <p>
              Safood allows you to meet customer demands, by giving you the
              infrastructure to manage and grow your local sourcing initiatives.{" "}
            </p>

            <button type="button" class="btn btn-light">
              Find out How
            </button>
          </div>
        </div>
      </div>

      <div Class={Style.next_container}>
        <div class={Style.txt}>
          <h1>
            Full shelves. <br /> Fresh food. <br /> Loyal customers.
          </h1>
          <p>
            Shelf Engine intelligent forecasting uses your store’s daily sales
            data, along with real world considerations like local events,
            holidays, and weather, to generate perfect, profit-maximizing orders
            for each product, every day.
          </p>
        </div>
        <div class={Style.prob_solve}>
          <div class={Style.sm}>
            <img
              src="https://www.shelfengine.com/wp-content/uploads/2020/07/features-1-1.svg"
              alt="err"
            />
            <h3>Completely automated ordering</h3>
            <p>
              Orders are automatically submitted to suppliers on your behalf. No
              scanning SKUs, overriding CAO suggestions, or guessing games. You
              have enough on your plate.
            </p>
          </div>

          <div class={Style.sm}>
            <img
              src="https://www.shelfengine.com/wp-content/uploads/2020/07/features-2.svg"
              alt="err"
            />
            <h3>Reduce shrink</h3>
            <p>
              Shelf Engine accurately forecasts customer demand, which helps you
              get a handle on your shrink and reduce waste. That’s a win-win for
              your bottom line and the planet.
            </p>
          </div>

          <div class={Style.sm}>
            <img
              src="https://www.shelfengine.com/wp-content/uploads/2020/07/features-3.svg"
              alt="err"
            />
            <h3>Minimize stockouts</h3>
            <p>
              Few things send shoppers out your door empty-handed like
              out-of-stocks. Shelf Engine helps you keep your shelves fully
              stocked to increase sales and customer happiness.
            </p>
          </div>
        </div>
        <div style={{textAlign:'center', width:'70%', margin:' 0 auto', marginBottom:'5vmax'}}>
          <h1 style={{fontSize:'2vmax'}}>
            “Not only has Shelf Engine had an incredible impact on our sales,
            but these benefits have extended far beyond our shelves. With less
            time spent on forecasting and inventory planning, we’re able to
            spend more time focused on what matters most: our customers.”
          </h1>
        </div>
      </div>  
    </div>
  );
};

export default Home;
