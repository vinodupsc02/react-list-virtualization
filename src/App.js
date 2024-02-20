import { Container, Card, CardBody, CardTitle, ListGroup } from "react-bootstrap";
import MyVirtualizedList from './components/MyVirtualizedList';

function App() {
  return (
    <Container>
      <Card className="mt-5">
        <CardTitle className="text-center mt-2">List Visualization</CardTitle>
        <CardBody>         
          <MyVirtualizedList></MyVirtualizedList>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
