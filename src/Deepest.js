const Deepest = (props) => {
  const { nasaDegeri } = props;
  console.log("Deepest'tan gelen: ", nasaDegeri);

  return (
    <div className="deepestContainer">
      <div>Ait olduğu kişi: {nasaDegeri.copyright}</div>
      <div>Tarih: {nasaDegeri.date}</div>
      <div>Açıklama: {nasaDegeri.explanation}</div>
      <div>
        HD Hali:<img src={nasaDegeri.hdurl} className="imgSettings"></img>
      </div>
      <div>Başlık: {nasaDegeri.title}</div>
      <div>URL: {nasaDegeri.url}</div>
      <div></div>

      <div></div>
    </div>
  );
};
export default Deepest;
