import {
  Container,
  ContainerTitle,
  ContainerUserProfile,
  Image,
  Title,
} from "./styles";
import userProfileIcon from "../../assets/userProfileIcon.png";
import { useRoute } from "@react-navigation/native";

type RouteParams = { name: string };

export function UserProfile() {
  const route = useRoute();

  const { name } = route.params as RouteParams;

  return (
    <Container>
      <ContainerUserProfile>
        <ContainerTitle>
          <Title>Seja Bem-Vindo ao seu perfil de usuário {name}!</Title>
        </ContainerTitle>
        <Image source={userProfileIcon} />
      </ContainerUserProfile>
    </Container>
  );
}
