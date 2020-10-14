import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Solution from "./Solution";
import Header from "./Header";

export default Item = ({ solutions }) => {
  return (
    <View>
    <Header text='Solutions'/>
      {solutions.map(solution => (
        <Solution solution={solution} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({

});
