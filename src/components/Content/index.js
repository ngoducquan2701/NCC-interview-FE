import Header from '../Header';
import ContentBody from '../ConterBody';
import Footer from '../Footer';

function Content() {
  return (
    <div className="content">
      <div className="contentInner">
        <Header />
        <ContentBody />
        <Footer />
      </div>
    </div>
  );
}

export default Content;
