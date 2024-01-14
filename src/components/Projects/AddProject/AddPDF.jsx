import React, { useState, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import INDIRE_LOGO from "../../../assets/INDIRE_LOGO.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: "justify",
  },
  title: {
    alignItems: "center",
  },
  description: {},
});

export const AddPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Section #1</Text>

          <Text style={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            temporibus culpa deserunt tenetur aperiam a recusandae ad doloribus
            modi officiis, quisquam magnam possimus eius nihil optio
            exercitationem minima veniam tempore? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cum temporibus culpa deserunt tenetur
            aperiam a recusandae ad doloribus modi officiis, quisquam magnam
            possimus eius nihil optio exercitationem minima veniam tempore?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            temporibus culpa deserunt tenetur aperiam a recusandae ad doloribus
            modi officiis, quisquam magnam possimus eius nihil optio
            exercitationem minima veniam tempore? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cum temporibus culpa deserunt tenetur
            aperiam a recusandae ad doloribus modi officiis, quisquam magnam
            possimus eius nihil optio exercitationem minima veniam tempore?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            temporibus culpa deserunt tenetur aperiam a recusandae ad doloribus
            modi officiis, quisquam magnam possimus eius nihil optio
            exercitationem minima veniam tempore?
          </Text>
          <Image src={INDIRE_LOGO} />
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};
