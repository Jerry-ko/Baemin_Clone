import styled from 'styled-components'
import Main from './components/Main'
import Second from './components/Second'


const Fixed = styled.div`

.top-fixed {
  position: absolute;
  margin: 40px 0 0 6%;
  width: 28%;
  max-width: 142px;
    img {
      max-width: 100%;
      height: auto;
      vertical-align: baseline;
    }
  }
`;

function App() {
  return (
    <>
      <Fixed>
        <div className="top-fixed">
        <img src="/images/logo.png" alt="로고"/>
        </div>
      </Fixed>
      <Main></Main>
      <Second></Second>
    </>
  );
}

export default App;
