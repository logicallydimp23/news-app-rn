import React, { Component } from "react"

import {
  Image,
  StyleSheet,
} from "react-native"

import FastImage from "react-native-fast-image";

import {
  Container,
  CachedImage,
} from "@base-components";
import IMAGES from "@images";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
})

interface Props {
  navigation: any,
}

class Splash extends Component<Props> {
  componentDidMount = async () => {
    const { navigation } = this.props;
    await this.preloadImages();
    await navigation.navigate("Main")
  }

  preloadImages = () => {
    const uris = (Object as any).values(IMAGES).map((image: any) => ({
      uri: Image.resolveAssetSource(image).uri,
    }));
    FastImage.preload(uris);
  }

  render() {
    return (
      <Container
        style={styles.container}
      >
        <CachedImage
          uri={IMAGES["react.jpg"]}
          width={200}
          height={200}
        />
      </Container>
    )
  }
}

export default Splash;
