import {
  Linking,
  Alert,
} from "react-native";

/* eslint-disable import/prefer-default-export */
const linker = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
}

export { linker };
