import { Search } from "../../components/Search";
import styles from "./styles.module.css";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export function SearchImg() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function onSearchImage(value: string) {
    setLoading(true);

    try {
      const response = await openai.createImage({
        prompt: value,
        n: 1,
        size: "512x512",
      });
      setImage(response.data.data[0].url as string);
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  return (
    <div className={styles.Container}>
      <Search
        onSearch={onSearchImage}
        placeHolder={"Digite aqui a imagem que deseja criar.."}
      />
      <div className={styles.Results}>
        <h1>Resultado :</h1>
        <div className={styles.imgBox}>
          {error ? "Houve um erro ao buscar essa imagem" : ""}
          {loading ? "Buscando imagem..." : <img src={image} />}
        </div>
      </div>
    </div>
  );
}
