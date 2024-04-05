import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function dif() {
  
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [dif, setDif] = useState(0);

  function diff() {
    let k = (Number(a)*Number(a) - (Number(b)*Number(b)));
    setDif(k);
  } 

  return (
    <View style={{backgroundColor:'#1E1E26', flex: 10}}>
    <View>
      <Text style={{fontWeight:'bold', color:"#F2B705", fontSize: 30, margin: 20}}>
      Squares Difference
      </Text>
      <Text style={{color:'white', marginLeft: 20,}}>
      When an expression can be viewed as the difference of two perfect squares, i.e. a²-b², then we can factor it as (a+b)(a-b). For example, x²-25 can be factored as (x+5)(x-5). This method is based on the pattern (a+b)(a-b)=a²-b², which can be verified by expanding the parentheses in (a+b)(a-b). However, you do not need to do that on your own. Just use our calculator!
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
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 90, marginTop: 5,}}>
        Get my difference! 
        </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight:'bold', color:"#F2B705", fontSize: 30, marginLeft: 20, marginTop: 20}}>
        Your difference is 
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