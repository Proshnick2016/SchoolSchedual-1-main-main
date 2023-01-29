import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SchedualRendering from "../components/SchedualRendering";

export default function Schedual() {
    return (
        <View style={styles.schoolSchedual}>
            <SchedualRendering weekDayName={'Понедельник'} />
            <SchedualRendering weekDayName={'Вторник'} />
            <SchedualRendering weekDayName={'Среда'} />
            <SchedualRendering weekDayName={'Четверг'} />
            <SchedualRendering weekDayName={'Пятница'} />
            <SchedualRendering weekDayName={'Суббота'} />
        </View>
    );
}

const styles = StyleSheet.create({
    schoolSchedual: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column"
    }
})