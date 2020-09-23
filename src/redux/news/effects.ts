/* eslint-disable import/prefer-default-export */
import Config from "react-native-config";
import { request } from "@helpers";
import moment from "moment"

export const fetchNews = async () => {
  try {
    const response = await request.get("/everything", {
      params: {
        q: "tech",
        from: moment().format("YYYY-MM-DD"),
        sortBy: "publishedAt",
        apiKey: Config.API_KEY,
      },
    })
    return response
  } catch (e) {
    return e
  }
}
