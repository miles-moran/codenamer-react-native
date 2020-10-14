import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default Item = ({ solution }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{solution[0]}</Text>
      </View>
      {solution[1].map(word => <Text>{word.item}</Text>)}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listItemText: {
    fontSize: 18
  }
});
