import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Circuit from '../../components/Circuit/Circuit';
import PointsCounter from '../../components/PointsCounter/PointsCounter';
import "./MainPage.scss";

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__main" >
        <main className="main-page__main-content" >
          <Circuit />
          <PointsCounter />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage;