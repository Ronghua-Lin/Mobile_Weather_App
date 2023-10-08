import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { endAsyncEvent } from "react-native/Libraries/Performance/Systrace";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>liek 5</Text>
        <RowText
          messageOne={"High : 8"}
          messageTwo={"Low : 6"}
          containerStyles={styles.highlowWrapper}
          messageOneStyles={styles.highlow}
          messageTwoStyles={styles.highlow}
        />
      </View>
      <RowText
          messageOne={"Its sunny"}
          messageTwo={"Its perfect weather"}
          containerStyles={styles.bodyWrapper}
          messageOneStyles={styles.description}
          messageTwoStyles={styles.message}
        />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "orange" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highlow: {
    color: "black",
    fontSize: 20,
  },
  highlowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
