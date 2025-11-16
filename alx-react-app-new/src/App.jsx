import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <MainContent>
        <UserProfile
          name="Taiwo Afusat"
          age={25}
          bio="I love React, frontend development, and exploring new cities."
        />
      </MainContent>

      <Footer />
    </>
  );
}

export default App;
