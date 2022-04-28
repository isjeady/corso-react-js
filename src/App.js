import Container from "./components/layout/Container";
import Form from "./components/Form";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  return (
    <div>
       <Sidebar />
       <Container>
          <Form />
       </Container>
    </div>
  );
}
