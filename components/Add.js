import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default Add = ({ addItem }) => {
  const [text, setText] = useState("");
  const handleInput = (textValue) => setText(textValue);
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={handleInput}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText("");
        }}
      >
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5
  },
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
