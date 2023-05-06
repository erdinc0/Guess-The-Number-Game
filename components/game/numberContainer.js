import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

let NumberContainer = (props) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.numText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 4,
    borderColor: Colors.primary,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numText: {
    color: Colors.primary,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
