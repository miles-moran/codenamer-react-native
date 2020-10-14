import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default Submit = ({ handleSubmit }) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        handleSubmit();
      }}
    >
      <Text style={styles.btnText}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center"
  }
});
