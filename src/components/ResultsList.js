import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {

  if(!results.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>
        {title} ({results.length})
      </Text>
      <FlatList
        horizontal={true}
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={result => result.id}
        renderItem={({ item, index }) => (
          <ResultsDetail
            result={item}
            lastOfUs={index === results.length - 1 ? true : false}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  }
});

export default ResultsList;
