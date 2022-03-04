import { Capitais } from "../../components/Capitais";

import { CardResult } from "../../components/CardResult";
import { Container } from "./styles";
export function Home() {
  return (
    <Container>
      <CardResult />
      <Capitais />
    </Container>
  );
}
