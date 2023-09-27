import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.view1}>
          <Text>View 1</Text>
      </View>
      <View style={styles.view2}>
          <Text >View 2</Text>
      </View>
      <View style={styles.view3}>
          <Text>View 3</Text>
      </View>
      <View style={styles.view4}>
          <Text>View 1</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom, #ff0000, #0000ff)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    flex:2,
    backgroundColor: 'green',
  },
  view2: {
    flex:3,
    backgroundColor: 'blue',
  },
  view3: {
    flex:2,
    backgroundColor
  },
  view4: {
    flex:2,
    backgroundColor: 'yellow',
  },
});
