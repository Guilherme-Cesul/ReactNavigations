import { Container, ContainerSettings, Image, Title } from "./styles";
import settingsIcon from "../../assets/settingsIcon.png";

export function Settings() {
  return (
    <Container>
      <ContainerSettings>
        <Title>Configurações</Title>
        <Image source={settingsIcon} />
      </ContainerSettings>
    </Container>
  );
}