import React, { Component } from "react"

import {
  FlatList,
  View,
  TouchableOpacity,
} from "react-native"

import { connect } from "react-redux"

import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"

import moment from "moment"

import Paragraph from "react-native-paragraph-component"

import {
  CachedImage,
  Container,
  Header,
  Space,
} from "@base-components"
import { COLOR } from "@themes"
import home from "./styles/home"
import { FETCH_NEWS_REQUEST } from "../../redux/news/action-types"

interface Props {
  navigation: any,
  dispatch: any,
  news: any,
}

class Home extends Component<Props> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: FETCH_NEWS_REQUEST,
    })
  }

  renderItem = ({ item }: any) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={home.itemContainer}
        onPress={() => navigation.navigate("Details", item)}
      >
        <View style={home.itemHeader}>
          {item.urlToImage && (
            <CachedImage
              uri={item.urlToImage}
              width={wp(30)}
              height={wp(25)}
            />
          )}
          <View style={home.title}>
            <Paragraph
              text={item.title}
              fontType="bold"
              size={16}
            />
            <Space size={5} />
            <Paragraph
              text={item.author ? item.author : ""}
              fontType="bold"
              size={12}
            />
            <Paragraph
              text={moment(item.publishedAt).format("dddd, MMMM DD YYYY")}
              fontType="light"
              size={12}
            />
          </View>
        </View>
        <View style={home.description}>
          <Paragraph
            text={item.description}
            fontType="light"
            size={14}
          />
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const {
      news,
      dispatch,
    } = this.props;
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
          <FlatList
            data={news.data}
            renderItem={this.renderItem}
            contentContainerStyle={home.listContainer}
            refreshing={news.fetching}
            onRefresh={() => {
              dispatch({
                type: FETCH_NEWS_REQUEST,
              })
            }}
          />
        </View>
      </Container>
    )
  }
}

const mapStateToProps = (redux: any) => ({
  news: redux.news,
})

export default connect(mapStateToProps)(Home);
