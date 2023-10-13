import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from "react-native";
import { clouds } from "../../assets";
import ListItem from "../components/ListItem";

export default function CurrentWeather({weatherData}) {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={(item.main.temp_min-273.15).toFixed(1)}
      max={(item.main.temp_max-273.15).toFixed(1)}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={clouds} style={styles.image}>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  image:{
    flex:1,

  }
});
