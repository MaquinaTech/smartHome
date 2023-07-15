import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Lights"
        onPress={() => navigation.navigate('Lights')}
      />
    </View>
  );
}

export default HomeScreen;