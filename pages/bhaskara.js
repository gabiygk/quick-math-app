import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function bhaskara() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [bha, setBha] = useState(0);

  function bhap() {
    let k = ((parseInt(b)*-1) + Math.sqrt((parseInt(b)*parseInt(b))-(4*parseInt(a)*parseInt(c))))/2*parseInt(a);
    setBha(k);
  } 

  function bhan() {
    let k = ((parseInt(b)*-1) - Math.sqrt((parseInt(b)*parseInt(b))-(4*parseInt(a)*parseInt(c))))/2*parseInt(a);
    setBha(k);
  } 

  return (
    <View style={{backgroundColor:'#1E1E26', flex: 10}}>
    <View>
      <Text style={{fontWeight:'bold', color:"#F2B705", fontSize: 30, margin: 20}}>
      Bhaskara formula
      </Text>
      <Text style={{color:'white', marginLeft: 20,}}>In mathematics, Bhaskara I's sine approximation formula is a rational expression in one variable for the computation of the approximate values of the trigonometric sines discovered by Bhaskara I (c. 600 – c. 680), a seventh-century Indian mathematician.
      </Text>

      <View style={{ justifyContent: 'center', flexDirection:'column'}}>
      <TextInput
          style={styles.input}
          placeholder="    Insert the 'A'" 
          onChangeText={(value) => setA(value)} 
        />

        <TextInput
          style={styles.input}
          placeholder="    Insert the 'B'" 
          onChangeText={(value) => setB(value)} 
        />
        
        <TextInput
          style={styles.input}
          placeholder="    Insert the 'C'" 
          onChangeText={(value) => setC(value)} 
        />
        </View>

        <TouchableOpacity onPress={() => bhap()} style={styles.botao}>
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 70, marginTop: 5,}}>
        Get my greater root! 
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => bhan()} style={styles.botao}>
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 70, marginTop: 5,}}>
        Get my lesser root! 
        </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight:'bold', color:"#F2B705", fontSize: 30, marginLeft: 20, marginTop: 20}}>
        Your root is 
        </Text>
        <Text style={{fontWeight:'bold', color:"#F2B705", fontSize: 30, marginTop: 20, marginLeft: 5}}>
        {bha}
        </Text>
        </View>


    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300, 
    borderWidth: 1, 
    borderColor:"#F2B705", 
    borderRadius:8, 
    height: 40,
    marginTop: 20,
    marginLeft: 20,
    color:'#F2B705'
  },
  botao: {
    backgroundColor: '#F2B705',
    width: 300,
    height: 30,
    marginLeft: 20,
    borderRadius: 8,
    marginTop: 20,
  }
})