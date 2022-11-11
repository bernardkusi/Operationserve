import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [imageshown, setimageshown] = useState(true);
  const [navopen, setnavopen] = useState(false);
  const togglenav = (value=null) => {
      value?setnavopen(value):setnavopen(!navopen)
      console.log(value)
  };
  return (
    <Component
      {...pageProps}
      navopen={navopen}
      togglenav={togglenav}
      imageshown={imageshown}
      setimageshown={setimageshown}
    />
  );
}

export default MyApp;
