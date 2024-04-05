import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function sum() {
  
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [dif, setDif] = useState(0);

  function diff() {
    let k = (Number(a)+Number(b))*(Number(a)+Number(b));
    setDif(k);
  } 

  return (
    <View style={{backgroundColor:'#1E1E26', flex: 10}}>
    <View>
      <Text style={{fontWeight:'bold', color:"#F2B705", fontSize: 30, margin: 20}}>
      Square's sum
      </Text>
      <Text style={{color:'white', marginLeft: 20,}}>
      The sum of squares means the sum of the squares of the given numbers. In statistics, it is the sum of the squares of the variation of a dataset. For this, we need to find the mean of the data and find the variation of each data point from the mean, square them and add them. In algebra, the sum of the square of two numbers is determined using the (a + b)(a + b) identity. 
      </Text>

      <View style={{ justifyContent: 'center', flexDirection:'column'}}>
      <TextInput
          style={styles.input}
          placeholder="    Insert the first value" 
          onChangeText={(value) => setA(value)} 
        />

        <TextInput
          style={styles.input}
          placeholder="    Insert the second value" 
          onChangeText={(value) => setB(value)} 
        />
        

        </View>


        <TouchableOpacity onPress={() => diff()} style={styles.botao}>
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 110, marginTop: 5,}}>
        Get my sum! 
        </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight:'bold', color:"#F2B705", fontSize: 30, marginLeft: 20, marginTop: 20}}>
        Your sum is 
        </Text>
        <Text style={{fontWeight:'bold', color:"#F2B705", fontSize: 30, marginTop: 20, marginLeft: 5}}>
         {dif}
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