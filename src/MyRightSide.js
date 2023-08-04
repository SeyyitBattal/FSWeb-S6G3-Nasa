import { useEffect, useState } from "react";
import ManuelData from "./ManuelData";
import Deepest from "./Deepest";
import axios from "axios";

const MyRightSide = () => {
  const [nasaDegerleri, setNasaDegerleri] = useState();
  console.log(nasaDegerleri);

  useEffect(() => {
    axios
      // .post("https://reqres.in/api/seyyit", ManuelData)
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=LACBKcwRfx1G7fybtjMkb2hlZKowIxLO2ZC9VXC0&count=1"
      )
      .then(function (response) {
        setNasaDegerleri(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("MyRightSide ta useEffect oluşturuldu!");
  }, []);

  return (
    <div className="rightContainer">
      {!!nasaDegerleri ? (
        <>
          <div>! DATALAR BURADA !</div>
          {nasaDegerleri.map((nasaDegeri, index) => {
            return <Deepest key={index} nasaDegeri={nasaDegeri} />;
          })}
          <br></br>
        </>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
};

export default MyRightSide;
