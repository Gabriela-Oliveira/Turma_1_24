/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  
  const fundo = { background: "blue" };
  const fonte = { color: "red" };

  const azul = { background: "blue" };
  const verde = { background: "green" };

  const tamanho = 30;

  return (
    <>
      <div
        css={{
          fontSize: 22,
          backgroundColor: "olive",
        }}
      >
        Fundo e tamanho
      </div>

      <div css={[fonte, fundo]}>
        Fonte vermelha e fundo azul(Array)
      </div>

      <div css={[verde, azul]}>Azul será aplicado ordem</div>
      <div css={[azul, verde]}>Verde será aplicado ordem</div>

      <div css={css`background-color: green;`}>
        Fundo verde tamplatestring
      </div>

      <div css={css`
        font-size: ${tamanho}px;
      `}>Bem–vindo! tamplate string</div>
    </>
  )
}

export default App
