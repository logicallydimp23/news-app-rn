import { StyleSheet } from "react-native"
import { COLOR } from "@themes";

const home = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLOR.ASH,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemContainer: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: COLOR.WHITE,
    marginVertical: 5,
  },
  itemHeader: {
    flexDirection: "row",
  },
  title: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 5,
  },
  description: {
    borderTopWidth: 1,
    borderColor: COLOR.ASH,
    flex: 1,
  },
})

export default home;
