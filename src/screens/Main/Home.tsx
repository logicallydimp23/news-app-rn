import React, { Component } from "react"

import {
  View,
} from "react-native"

import {
  Container,
  Header,
} from "@base-components"
import { COLOR } from "@themes"
import home from "./styles/home"

class Home extends Component {
  render() {
    return (
      <Container>
        <Header
          left="menu"
          leftColor={COLOR.WHITE}
          center="Home"
          centerFontType="bold"
          centerSize={20}
          centerColor={COLOR.WHITE}
          right="reload"
          rightColor={COLOR.WHITE}
          backgroundColor={COLOR.DARK_BLUE}
        />
        <View style={home.content}>
          <View />
        </View>
      </Container>
    )
  }
}

export default Home;
