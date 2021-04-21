import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import UserInfoScreen from './screens/UserInfoScreen'
import SubmitresultScreen from './screens/SubmitresultScreen'

function App() {
  return (
    <Router >
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/userInfoForm' component={UserInfoScreen} exact />
          <Route path='/submitresult' component={SubmitresultScreen} exact />
        </Container>
        
      </main>
      <Footer />
    </Router>
  );
}

export default App;
