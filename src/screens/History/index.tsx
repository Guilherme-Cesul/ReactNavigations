import { Container, ContainerHistory, Image, Title } from "./styles";
import historyIcon from "../../assets/historyIcon.png";

export function History() {
  return (
    <Container>
      <ContainerHistory>
        <Title>Seu histórico está vazio no momento</Title>
        <Image source={historyIcon} />
      </ContainerHistory>
    </Container>
  );
}
