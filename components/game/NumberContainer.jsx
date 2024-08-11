import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        { padding: width < 400 ? 12 : 24, margin: width < 400 ? 16 : 24 },
      ]}
    >
      <Text style={[styles.numberText, { fontSize: width < 400 ? 28 : 36 }]}>
        {children}
      </Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,

    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: 'open-sans-bold',
  },
});
