import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const SectionContent = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const SectionContentView = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const FormView = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  flex: 1;
  background-color: #ffffff;
  min-height: 94px;
  z-index: 999999;
`;

const ErrorText = styled.Text`
  font-family: samsungbold;
  color: #ff0000;
  font-size: 14px;
  include-font-padding: false;
  padding-top: 8px;
  background-color: #ffffff;
  padding-left: 16px;
  z-index: 0;
  position: relative;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: blue;
`;

const SensorList = styled.View`
  /* Estilos adicionales para el contenedor de sensores */
`;

const SensorItem = styled.View`
  /* Estilos adicionales para cada sensor */
`;

const SensorName = styled.Text`
  /* Estilos adicionales para el nombre del sensor */
`;

const SensorValue = styled.Text`
  /* Estilos adicionales para el valor del sensor */
`;

const HomeScreen = () => {
  return (
    <SectionContent>
      <SectionContentView>
        <FormView>
          <Title>Welcome to Home</Title>

          <SensorList>

            <SensorItem>
              <SensorName>Numero de personas</SensorName>
              <SensorValue>4 Personas</SensorValue>
            </SensorItem>

            <SensorItem>
              <SensorName>Temperatura general</SensorName>
              <SensorValue>25°C</SensorValue>
            </SensorItem>

            <SensorItem>
              <SensorName>Humedad general</SensorName>
              <SensorValue>50%</SensorValue>
            </SensorItem>

            <SensorItem>
              <SensorName>Aires Acondicionados:</SensorName>
              <SensorValue>Aire salón: Apagado</SensorValue>
              <SensorValue>Aire alvaro: Apagado</SensorValue>
            </SensorItem>

            {/* ... Agrega más elementos de sensor si es necesario */}
          </SensorList>
        </FormView>
      </SectionContentView>
    </SectionContent>
  );
};

export default HomeScreen;
