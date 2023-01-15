import { Search } from "../../components/Search";
import styles from "./styles.module.css";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_SECRET_KEY,
});

const openai = new OpenAIApi(configuration);

interface Answers {
  id: number;
  title: string;
  content: string;
}

export function SearchAsk() {
  const [text, setText] = useState<Answers[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function onSearchAsk(value: string) {
    setLoading(true);

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: value,
        max_tokens: 2048,
        temperature: 0,
      });

      const answers: Answers = {
        id: Math.random(),
        title: value,
        content: response.data.choices[0].text as string,
      };

      setText((prev) => [answers, ...prev]);
    } catch (erro) {
      console.log(erro);
      setError(true);
    }

    setLoading(false);
  }

  const waiting = loading ? "Buscando Resposta.." : "Aguardando Pergunta..";
  const erro = "Aconteceu um erro, tente novamentea";

  const empty = error ? erro : waiting;

  return (
    <div className={styles.Container}>
      <Search onSearch={onSearchAsk} placeHolder={"Faça uma pergunta"} />
      <div className={styles.Results}>
        <h1></h1>
        <div className={styles.txtBox}>
          {text.length
            ? text.map((item) => {
                return (
                  <div className={styles.answersContainer} key={item.id}>
                    <h1>{item.title}</h1>
                    <div className={styles.answers}>R: {item.content}</div>
                  </div>
                );
              })
            : empty}
        </div>
      </div>
    </div>
  );
}
