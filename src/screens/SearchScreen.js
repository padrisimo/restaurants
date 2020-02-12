import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price =>
    results.filter(result => result.price === price);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("€")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("€€")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("€€€")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
