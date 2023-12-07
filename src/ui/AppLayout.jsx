import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidbar from "./Sidbar";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Sidbar />
      <Main>
        <Container>
          <Outlet />
        </Container>
        {/* <Outlet /> */}
      </Main>
    </StyledLayout>
  );
}

export default AppLayout;
