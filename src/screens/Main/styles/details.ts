import { COLOR } from "@themes";
import { StyleSheet } from "react-native"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

const details = StyleSheet.create({
  header: {
    width: wp(100),
    height: hp(40),
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  overlay: {
    width: wp(100),
    height: hp(40),
    position: "absolute",
    top: 0,
    backgroundColor: COLOR.TRANSPARENT_LIGHT_BLACK,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerFooter: {
    marginVertical: 20,
    bottom: 0,
    position: "absolute",
    width: wp(100),
    paddingHorizontal: 30,
  },
  content: {
    padding: 20,
    backgroundColor: COLOR.WHITE,
    borderRadius: 20,
  },
})

export default details;
