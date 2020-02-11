import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ResultsDetail = ({ result }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text styles={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    borderRadius: 10,
    height: 120
  },
  name: {
    fontWeight: "bold"
  },
  rating: {
    color: 'gray'
  }
});

export default ResultsDetail;
