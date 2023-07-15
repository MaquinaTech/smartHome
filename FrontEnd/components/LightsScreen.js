import React from 'react';
import { View, Text, Button } from 'react-native';

function LightsScreen({ navigation }) {
  return (
    <View>
      <Text>Lights Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default LightsScreen;