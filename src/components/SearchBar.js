import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <AntDesign name="search1" sixe={30} />
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 25
  }
});

export default SearchBar;
