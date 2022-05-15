import {
  View,
  Text,
  SafeAreaView,
  image,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";

import {
  FocusedStatusBar,
  SubInfo,
  CircleButton,
  RectButton,
  DetailsBid,
  DetailsDesc,
} from "../components";

export default function Details({ route, navigation }) {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      
  );
}
