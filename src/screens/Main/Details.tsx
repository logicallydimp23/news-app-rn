import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
} from "react-native"

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import moment from "moment";

import {
  Container,
  Content,
  ImageBackground,
  Paragraph,
  Space,
} from "@base-components";
import { COLOR } from "@themes";
import { linker } from "@helpers";
import details from "./styles/details";

interface Props {
  navigation: any,
}

class Details extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const {
      params,
    } = navigation.state;
    return (
      <Container>
        <Content>
          <ImageBackground
            style={details.header}
            uri={{
              uri: params.urlToImage,
            }}
          >
            <View style={details.overlay} />
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Icon
                name="arrow-left"
                size={30}
                color={COLOR.WHITE}
              />
            </TouchableOpacity>
            <Space size={10} />
            <Paragraph
              text={params.title}
              color={COLOR.WHITE}
              size={24}
              fontType="bold"
              tappable
              onTap={() => linker(params.url)}
            />
            <View style={details.headerFooter}>
              <Paragraph
                text={params.url}
                fontType="bold"
                size={12}
                color={COLOR.WHITE}
              />
              <Space size={5} />
              <Paragraph
                text={params.author ? params.author : ""}
                fontType="bold"
                size={14}
                color={COLOR.WHITE}
              />
              <Paragraph
                text={moment(params.publishedAt).format("dddd, MMMM DD YYYY")}
                fontType="light"
                size={12}
                color={COLOR.WHITE}
              />
            </View>
          </ImageBackground>
          <View style={details.content}>
            <Paragraph
              text={params.description}
            />
            <Space size={10} />
            <Paragraph
              text={params.content}
              fontType="light"
            />
          </View>
        </Content>
      </Container>
    )
  }
}

export default Details;
