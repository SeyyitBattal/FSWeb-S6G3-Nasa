import { useEffect, useState } from "react";
import ManuelData from "./ManuelData";
import Deepest from "./Deepest";

const MyRightSide = () => {
  useEffect(() => {
    // API ÇAĞRISI İÇİN
    console.log("MyRightSide ta useEffect oluşturuldu!");
  }, []);

  //   const gelen = async function () {
  //     const linktenGelen = await axios
  //       .get(
  //         "https://api.nasa.gov/planetary/LACBKcwRfx1G7fybtjMkb2hlZKowIxLO2ZC9VXC0"
  //       )
  //       .then(console.log("Alınan çıktı: ", linktenGelen.data));
  //   };
  //   gelen();

  const [nasaDegerleri, setNasaDegerleri] = useState(ManuelData);
  console.log(nasaDegerleri);

  return (
    <div className="rightContainer">
      <div>! DATALAR BURADA !</div>
      {nasaDegerleri.map((nasaDegeri, index) => {
        return <Deepest key={index} nasaDegeri={nasaDegeri} />;
      })}
      <br></br>
    </div>
  );
};

export default MyRightSide;
