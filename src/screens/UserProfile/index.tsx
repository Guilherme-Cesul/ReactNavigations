import { Container, ContainerTitle, ContainerUserProfile, Image, Title } from "./styles";
import userProfileIcon from "../../assets/userProfileIcon.png"

export function UserProfile() {
  return (
    <Container>
      <ContainerUserProfile>
        <ContainerTitle>
        <Title>Seja Bem-Vindo ao seu perfil de usuário!</Title>
        </ContainerTitle>
        <Image source={userProfileIcon} />
      </ContainerUserProfile>
    </Container>
  );
}
