import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>
                React Typescript Bootstrap Learn
            </Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default App;
