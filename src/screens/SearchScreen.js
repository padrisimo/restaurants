import React, { useState } from "react";
import { View, Text } from "react-native";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        onTermSubmit={() => console.log('submit query')}
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
      />
      <Text>yea pedo {term} </Text>
    </View>
  );
};

export default SearchScreen;
