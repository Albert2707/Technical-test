import { useState } from "react";
import "./Prueba.css";
const Prueba = () => {
  const [str, setStr] = useState<string>("");
  const [invalid, setInvalid] = useState({
    error: false,
    resultado: false,
  });
  const [result, setResult] = useState("");
  const [first, setFirst] = useState<number>(0);
  const repetedValues = (word: string): string => {
    const contador: any = {};
    setFirst(1);
    setInvalid((prev) => ({ ...prev, error: false, resultado: false }));
    if (word.length > 0) {
      setInvalid((prev) => ({ ...prev, error: false, resultado: true }));
      for (const caracter of word.toLowerCase()) {
        contador[caracter] = (contador[caracter] || 0) + 1;
      }
    } else {
      setInvalid((prev) => ({ ...prev, error: true, resultado: false }));
      return "";
    }
    return JSON.stringify(contador);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <form
            action=""
            className="formulario"
            onSubmit={(e) => {
              e.preventDefault();
              setResult(repetedValues(str));
            }}
          >
            <div className={`entry ${invalid.error && "invalid"}`}>
              <input
                className="wordInput"
                placeholder="Ingrese una palabra"
                type="text"
                onChange={(e) => {
                  setStr(e.target.value);
                  setInvalid((prev) => ({
                    ...prev,
                    error: false,
                    resultado: true,
                  }));
                }}
              />
              <button className="button">
                <span className="btn-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
          {result && <span className="result">{result}</span>}
          {!result && (
            <span
              className={` ${invalid.error ? "invalid-input" : "hide"}`}
              style={{ display: `${first > 0 ? "flex" : "none"}` }}
            >
              Ingrese una palabra
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Prueba;
