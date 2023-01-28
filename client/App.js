import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, FlatList } from "react-native";
import HomePage from "./pages/HomePage";
import Schedual from "./pages/Schedual";

export default function App() {
  const [items, setItems] = React.useState();
  const [getten, setStatus] = React.useState(false);

  React.useEffect(() => {
    if (getten === false) {
      const schedualFromLocaStorage = JSON.parse(localStorage.getItem('Schedual'))
      setItems(schedualFromLocaStorage);
      setStatus(true);
      console.log(schedualFromLocaStorage['Понедельник'][0])
    }
  });

  return (
    <View>
      <FlatList data={items} renderItem={({ item }) => <Schedual
        lessonNumber={item['Понедельник'][0].lessonNumber}
        lessonName={item['Понедельник'][0].lessonName}
        lessonTime={item['Понедельник'][0].lessonTime} />} />

      <StatusBar theme="auto" />
    </View>
  );
}
/*<Schedual lessonNumber=".1" lessonName="Русский язык" lessonTime="8:00-8:40" />
<FlatList data={items} renderItem={({ item }) => <Schedual lessonNumber={item['Понедельник']['1'].lessonNumber} />} />*/
