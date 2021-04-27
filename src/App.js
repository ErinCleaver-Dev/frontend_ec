import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap'
import styled from 'styled-components';
import Home from './screens/Home'

function App() {
  return (
    <MainContainer>
      <Header/>
      <Main>
        <Body className="py-3">
          <Home/>
        </Body>
      </Main>
      <Footer/>
    </MainContainer>
  );
}

export default App;

const Main =styled.main`
  min-height: 80vh;
`

const MainContainer = styled.div`

`

const Body = styled(Container)`

`