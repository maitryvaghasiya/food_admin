import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,} from "react-native";

export default function SignUp({navigation}) {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.head}>Create An Account</Text>
      </View>
      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="House/Block No."
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />
    </View>
    <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="Locality/Area"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />   
      </View>
      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="City"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />  
      </View>
      <View style={styles.inputView1}>
        <TextInput
          style={[styles.TextInput]}
          placeholder="State"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />  
      </View>
      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email Id"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate("home1")}}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: "#ffffff",
      alignItems: "center",
      // justifyContent: "center",
      margin:16
    },
    head:{
        color:"white",
        fontSize:20,
        letterSpacing:2,
        fontWeight:"700",
        marginBottom:30
    },
    inputView1: {
        backgroundColor: "#CFD1D2",
        borderRadius: 10,
        width: "100%",
        height: 45,
        marginBottom: 30,
        // alignItems: "center",
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        // marginLeft: 20,
        color:"black"
      },
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#32B768",
      },
      loginText:{
        fontWeight:"700",
        letterSpacing:2
      }
})