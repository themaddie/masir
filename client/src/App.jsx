import { styled } from "styled-components";

function App() {
  const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  `; 
  const Head = styled.h1`
  font-family: ${props => props.theme.typography.h1.fontFamily};
    font-size: ${props => props.theme.typography.h1.fontSize}px;
  `;

  return (
    <div className="App">
      <Button>محمدصادق خره</Button>
      <Head>کله م تو کلات</Head>
      <h2>کله م تو کلات</h2>
      <h3>کله م تو کلات</h3>
      <h4>کله م تو کلات</h4>
      <h5>کله م تو کلات</h5>
      <h6>کله م تو کلات</h6>
      <span>سلام</span>
      <p>نامزد غلام</p>
    </div>
  );
}

export default App;
