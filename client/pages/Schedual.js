import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text } from "react-native";


export default function Schedual({ lessonNumber, lessonName, lessonTime }) {
    return (
        <View>
            <Text>{lessonNumber} {lessonName} {lessonTime}</Text>
        </View>
    );
}
