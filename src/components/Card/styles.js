import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { hp, wp, height } from "../../util";

export const Container = styled.View`
  margin: ${hp(3)}px 0px;
`;
export const Title = styled.Text`
  color: white;
  font-size: 22px;
  font-family: "Lato-Bold";
  width: 80%;
`;
export const Image = styled.ImageBackground.attrs({
  borderRadius: 20,
})`
  height: ${hp(52)}px;
  width: 95%;
  background: #1f1f1f;
  border-radius: 20px;
`;
export const Mask = styled.TouchableOpacity`
  background: #11111158;
  padding: 15px 20px;
  height: 100%;
  justify-content: space-between;
  position: relative;
`;
export const ContainerIcon = styled.TouchableOpacity`
  padding: 0px 0px;
`;
export const Icon = styled(FontAwesome)`
  /* font-size: 25px; */
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const PlayButton = styled.TouchableOpacity``;
export const ContainerButton = styled(LinearGradient)`
  height: ${wp(13)}px;
  width: ${wp(13)}px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const ContainerProgress = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`;
export const StatusProgress = styled.View`
  width: 100%;
  background: #5ac4fe;
  height: 100%;
  border-radius: 100px;
`;
export const Progress = styled.View`
  width: 50px;
  height: 4px;
  margin: 3px 0px;
  background: #333335;
  border-radius: 100px;
`;

export const ProgressTitle = styled.Text`
  font-size: 15px;
  color: white;
  font-family: "Lato-Bold";
`;
