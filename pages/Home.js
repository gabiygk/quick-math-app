import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Home() {
  return (
    <ScrollView style={{backgroundColor: '#1E1E26'}}>
      <View style={{flex: 10}}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20, marginLeft: 20, color:'#F2B705' }}>
            Welcome to your favorite calculator!
          </Text>

          <Text style={{ fontSize: 13, margin: 20, color:'white'}} >
            Here you'll find the Bhaskara formula, the square's sum and the squares
            difference. Feel free to select the page you want it. 
          </Text>

          <Text 
          style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20, marginLeft: 20, color:'#F2B705' }}> 
          Get to know us! 
          </Text>
          
          <Text style={{ fontSize: 13, margin: 20, color:'white'}}> 
          We are from an economic measure enterprise reflecting the market value of a business. It is a measure of a company’s total value, often used as a more comprehensive alternative to equity market capitalization. EV includes in its calculation the market capitalization of a company but also short-term and long-term debt as well as any cash on the company’s balance sheet. Enterprise value is one of the fundamental metrics used in business valuation, financial modeling, accounting, portfolio analysis, and risk analysis. 
          </Text>

          <Text style={{ fontSize: 13, marginLeft: 20, color:'white'}}> 
          As the market cap, EV is a measure of what the market believes a company is worth. Enterprise value captures the cost of an entire business, including debt and equity. 
          </Text>
        </View>
      </View>
      <View style={{marginBottom:30}}></View>
    </ScrollView>
  );
}
