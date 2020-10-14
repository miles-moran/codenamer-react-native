import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Item from "./components/Item";
import Add from "./components/Add";
import SubmitWords from "./components/SubmitWords";
import axios from "axios";
import Solutions from "./components/Solutions";

export default function App() {
  const [items, setItems] = useState(["milk", "chicken"]);
  const [solutions, setSolutions] = useState([]);

  const deleteItems = word => {
    setItems(items.filter(item => item !== word));
  };
  const addItem = word => {
    setItems([...items, word]);
  };

  const handleSubmit = () => {
    axios
      .post("https://codenamer.herokuapp.com/api", {
        words: items
      })
      .then(res => {
        setSolutions((Object.entries(res.data)))
      });
  };

  return (
    <View style={styles.container}>
      <Header text={"codenamer 0.01"} />
      <Add addItem={addItem} />
      <SubmitWords handleSubmit={handleSubmit} />
      {items.map(item => (
        <Item deleteItems={deleteItems} word={item} />
      ))}
      <Solutions solutions={solutions}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
