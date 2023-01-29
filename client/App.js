import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, FlatList } from "react-native";
import HomePage from "./pages/HomePage";
import Schedual from "./pages/Schedual";

export default function App() {
  return (
    <View>
      <HomePage />
      <StatusBar theme="auto" />
    </View>
  );
}
/*<Schedual lessonNumber=".1" lessonName="Русский язык" lessonTime="8:00-8:40" />
<FlatList data={items} renderItem={({ item }) => <Schedual lessonNumber={item['Понедельник']['1'].lessonNumber} />} />*/
