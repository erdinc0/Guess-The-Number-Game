import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = (props) => {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : null)}
      onPress={props.onPress}
    >
      <View style={[styles.container, props.style]}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </Pressable>
  );
};

let styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.55,
  },
});

export default PrimaryButton;
