import { Text, StyleSheet } from "react-native";

let Title = (props) => {
  return <Text style={[styles.title, props.style]}>{props.baslik}</Text>;
};

let styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffea00",
    borderColor: "#ffea00",
    borderWidth: 2,
    textAlign: "center",
    padding: 12,
  },
  icerik: {},
});

export default Title;
