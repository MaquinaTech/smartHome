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

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 16px;
`;

const SensorList = styled.View`
  margin-top: 32px;
`;

const SensorItem = styled.View`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SensorName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
`;

const SensorValue = styled.Text`
  font-size: 14px;
  color: #666666;
`;

const SensorAC = styled.Text`
  font-size: 14px;
  color: lightblue;
`;

const On = styled.Text`
  font-size: 14px;
  color: lightgreen;
`;

const Off = styled.Text`
  font-size: 14px;
  color: red;
`;

const Group = styled.View`
  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: flex-start;
`;


const HomeScreen = () => {
  return (
    <SectionContent>
      <SectionContentView>
        <FormView>
          <Container>
            <Title>Welcome to Home</Title>

            <SensorList>
              <SensorItem>
                <SensorName>Temperatura General</SensorName>
                <SensorValue>33°C</SensorValue>
              </SensorItem>

              <SensorItem>
                <SensorName>Humedad General</SensorName>
                <SensorValue>50%</SensorValue>
              </SensorItem>

              <SensorItem>
                <SensorName>Personas en la casa</SensorName>
                <SensorValue>4</SensorValue>
              </SensorItem>

              <SensorItem>
                <SensorName>Aires Acondicionados</SensorName>
                <Group>
                  <SensorAC>AC Salón:</SensorAC>
                    <On> ON</On>
                </Group>
                <Group>
                  <SensorAC>AC Alvaro:</SensorAC>
                    <Off> OFF</Off>
                </Group>
              </SensorItem>
            </SensorList>
          </Container>
        </FormView>
      </SectionContentView>
    </SectionContent>
  );
};

export default HomeScreen;
