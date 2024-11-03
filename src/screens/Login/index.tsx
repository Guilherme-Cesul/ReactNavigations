import {
  Container,
  ContainerLogin,
  LoginInput,
  LoginTitle,
  PasswordInput,
  Image,
  ContainerImage,
  Button,
  Image2,
} from "./styles";
import login from "../../assets/login.png";
import buttonIcon from "../../assets/buttonIcon.png";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const [name, setName] = useState<string>("");

  const navigation = useNavigation();

  function handleUserProfile() {
    navigation.navigate("userProfile");
  }

  return (
    <Container>
      <ContainerLogin>
        <ContainerImage>
          <Image source={login} />
        </ContainerImage>
        <LoginTitle>Faça o seu Login</LoginTitle>
        <LoginInput
          placeholder="Username"
          onChangeText={setName}
          placeholderTextColor="#C9C9C9"
          style={{ paddingLeft: 5 }}
        />
        <PasswordInput
          placeholder="Password"
          placeholderTextColor="#C9C9C9"
          style={{ paddingLeft: 5 }}
        />
        <Button onPress={handleUserProfile}>
          <Image2 source={buttonIcon} />
        </Button>
      </ContainerLogin>
    </Container>
  );
}
