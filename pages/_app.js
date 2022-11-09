import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [imageshown, setimageshown] = useState(true);
  const [navopen, setnavopen] = useState(false);
  const togglenav = (value) => {
      value?setnavopen(value):setnavopen(!navopen)
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
