import { Link } from "react-router-dom";
import { FullPageContainer } from "../../components/FullPageContainer/FullPageContainer";

export const HomePage = () => (
  <FullPageContainer>
    <article>
      <h2>Ready to find your favourite pokemon?</h2>
      <p>Just click <Link to="/search"> here</Link> and start searching</p>
    </article>
  </FullPageContainer>
);
