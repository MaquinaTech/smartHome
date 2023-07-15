import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LightsScreen from "../screens/LightsScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Lights') {
          iconName = 'lightbulb-o';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }
  
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarLabel: route.name, // Utiliza el nombre de la ruta como etiqueta
    })}
    tabBarOptions={{
      activeTintColor: 'blue', // Color de la pestaña activa
      inactiveTintColor: 'gray', // Color de las pestañas inactivas
      style: {
        backgroundColor: 'white', // Color de fondo de la barra inferior
        borderTopWidth: 1, // Grosor de la línea superior
        borderTopColor: 'lightgray', // Color de la línea superior
      },
      labelStyle: {
        fontSize: 14, // Tamaño de fuente de las etiquetas
        fontWeight: 'bold', // Peso de fuente de las etiquetas
      },
    }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Inicio',
        }}
      />
      <Tab.Screen
        name="Lights"
        component={LightsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="lightbulb-o" size={size} color={color} />
          ),
          tabBarLabel: 'Luces',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
          tabBarLabel: 'Perfil',
        }}
      />
    </Tab.Navigator>

  );
};

export default TabNavigator;