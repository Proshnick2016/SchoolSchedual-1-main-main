import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import schedualStyles from "../styles/schedualStyles";

export default function SchedualRendering({ weekDayName }) {
    const [weekDayArray, setWeekDayArray] = React.useState();
    const [getten, setStatus] = React.useState(false);

    React.useEffect(() => {
        if (getten === false) {
            const schedualFromLocaStorage = JSON.parse(window.localStorage.getItem('Schedual'))
            setWeekDayArray(schedualFromLocaStorage[weekDayName]);
            setStatus(true);
        }
    });
    return (
        <View>
            <Text style={schedualStyles.weekDayName}>{weekDayName}</Text>
            <FlatList data={weekDayArray} renderItem={({ item }) => <Text> {item.lessonNumber} {item.lessonName} {item.lessonTime}</Text>} />
        </View>
    );
}
