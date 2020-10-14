import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Home = ({text}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue"
  },
  text: {
    color: "white",
    fontSize: 23,
    textAlign: "center"
  }
});
