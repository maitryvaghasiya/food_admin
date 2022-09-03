// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,} from "react-native";
 
export default function LogIn({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/image/flogo.png")} />
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email ID"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate("home")}}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signBtn} onPress={() => {navigation.navigate("signin")}}>
        <Text style={styles.loginText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    // justifyContent: "center",
  },
 
  image: {
    marginTop:100,
    marginBottom: 80,
    height:100,
    width:100
   
  },

 
  inputView: {
    backgroundColor: "#F1F3F3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 30,
    alignItems: "center",
  },

  inputView1: {
    backgroundColor: "#F1F3F3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // marginLeft: 20,
    color:"black"
  },
 
  forgot_button: {
    height: 30,
    // marginBottom: 20,
    color:"#32B768"
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    backgroundColor: "#32B768",
  },
  signBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#32B768",
  },
  loginText:{
    fontWeight:"700",
    letterSpacing:2
  }
});