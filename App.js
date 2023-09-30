import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
  <StatusBar style="auto" />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* Vẽ vòng tròng màu đen */}
        
      <View style={styles.view1}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.view2}>
          
          <Text style={styles.headingCenter}>GROW</Text>
          <Text style={styles.heading}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.view3}>
          <Text style={styles.destcription}>
          We will help you to grow your business using
          online server
          </Text>
      </View>
      <View style={styles.view4}>
          <Text style={styles.login}>
              <Text style={styles.loginText}>LOGIN</Text>
          </Text>
          <Text style={styles.signup}>
            <Text style={styles.signupText}>SIGN UP</Text>
          </Text>
      </View>
      <View style={styles.view5}>
          <Text style={styles.footer}>HOW TO WORK?</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 204, 249, 0.1), #00CCF9 )',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    flex:2  ,
    justifyContent: 'center',
  },
  circle :{
    width: 170,
    height: 170,
    borderRadius: 170/2,
    // backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 18,
    // justifySelf: 'center',
  },
  view2: {
    flex:1,
    // display: 'block',
  },
  heading:{
    fontVariant: 'small-caps',
    color: 'Black',
      fontSize:24,
      fontWeight: 700,
    justifyContent: 'center',
  },
  headingCenter:{
      textAlign: 'center',
      color: 'Black',
      fontSize:25,
      fontWeight: 700,
  },
  view3: {
    flex:1,
    // backgroundColor: 'red',
  },
  destcription:{
    textAlign: 'center',
    color: 'Black',
    fontSize:15,
    fontWeight: 700,
    marginLeft:20,
    marginRight:20,
  },
  view4: {
    flex:1,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
  
  },
  login:{
    display: 'flex',
    backgroundColor:'#E3C000',
    alignItems: 'center',
    justifyContent: 'center',
    width: 125,
    height: 45,
    borderRadius: 5,
  },
  loginText:{
    fontWeight:700,
    fontSize: 18,
    lineHeight: 21.09,

  },
  signup:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#E3C000',
    width: 125,
    height: 45,
    marginLeft: 40,
    borderRadius: 5,
  },
  signupText:{
      fontWeight:700,
      fontSize: 18,
      lineHeight: 21.09,
  },
  view5: {
    flex:1,
    // backgroundColor: 'green',
  },
  footer:{
    textAlign: 'center',
    color: 'Black',
    fontSize:18,
    fontWeight: 700,
  },
});
