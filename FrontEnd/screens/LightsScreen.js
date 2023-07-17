import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SvgXml, Rect, G } from 'react-native-svg';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import svgContent from '../components/SvgContent';

function LightsScreen({ navigation }) {
  const handleRectPress = (rectId) => {
    // Lógica para controlar el botón presionado
    console.log('Botón presionado:', rectId);
  };

  return (
    <View>
      <Text>Mapa de la casa</Text>
      <View>
        <SvgXml
          xml={svgContent}
          width="800"
          height="800"
          z-index='-1'
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
                HAY QUE CAMBIAR ESTO A: <TouchableOpacity onPress={() => handleRectPress('rect1')}>
                                          <SvgXml xml={svgContent} width="78.031" height="39.016" />
                                        </TouchableOpacity>

                hay que cambiar tambien el svgContent para que sea de tipo object: 
                export const svgContent = {
                                            rect1: `
                                              <svg viewBox="0 0 500 500" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="46.218" y="34.814" width="78.031" height="39.016" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" id="rect1"/>
                                              </svg>
                                            `,
                                            rect2: `
                                              <svg viewBox="0 0 500 500" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="121.849" y="66.026" width="68.428" height="46.819" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" id="rect2"/>
                                              </svg>
                                            `,
                                            // Agrega las definiciones de los demás rectángulos aquí
                                          };
          <TouchableOpacity onPress={() => handleRectPress('rect1')}>
            <Rect
              x="106.843"
              y="66.026"
              width="68.428"
              height="46.819"
              
            />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => handleRectPress('rect2')}>     
            <Rect
              x="121.849" 
              y="66.026" 
              width="68.428" 
              height="46.819"  
            />
          </TouchableOpacity>
      
        
          <TouchableOpacity onPress={() => handleRectPress('rect3')}>
            <Rect
              x="157.263"
              y="69.027"
              width="30.612"
              height="21.008"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect4')}>
            <Rect
              x="121.849"
              y="111.044"
              width="68.427"
              height="158.463"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect5')}>
            <Rect
              x="106.843"
              y="111.645"
              width="54.022"
              height="46.819"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect6')}>
            <Rect
              x="162.065"
              y="112.245"
              width="27.611"
              height="29.412"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect7')}>
            <Rect
              x="160.264"
              y="142.857"
              width="28.211"
              height="15.006"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect8')}>
            <Rect
              x="169.268"
              y="159.064"
              width="18.607"
              height="79.231"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect9')}>
            <Rect
              x="123.049"
              y="211.885"
              width="44.418"
              height="25.81"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect10')}>
            <Rect
              x="122.449"
              y="178.872"
              width="45.018"
              height="25.81"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect11')}>
            <Rect
              x="123.649"
              y="239.496"
              width="64.826"
              height="27.611"
            />
          </TouchableOpacity>
        

          <TouchableOpacity onPress={() => handleRectPress('rect12')}>
            <Rect
              x="50.42"
              y="159.064"
              width="115.246"
              height="17.407"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect13')}>
            
            <Rect
              x="45.017" 
              y="176.471" 
              width="75.03" 
              height="30.012"
              />
          </TouchableOpacity>          

        
          <TouchableOpacity onPress={() => handleRectPress('rect14')}>
            <Rect
              x="190.876"
              y="129.652"
              width="37.815"
              height="31.212"
            />
          </TouchableOpacity>  

        
          <TouchableOpacity onPress={() => handleRectPress('rect15')}>
            <Rect
              x="192.077"
              y="130.852"
              width="35.414"
              height="28.812"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect16')}>
            <Rect
              x="48.019"
              y="178.872"
              width="37.815"
              height="26.411"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect17')}>
            <Rect
              x="88.836"
              y="178.271"
              width="29.412"
              height="25.81"
            />
          </TouchableOpacity>
        
        
          <TouchableOpacity onPress={() => handleRectPress('rect18')}>
            <Rect
              x="33.013"
              y="134.454"
              width="19.208"
              height="43.217"
            />
          </TouchableOpacity>

        
          <TouchableOpacity onPress={() => handleRectPress('rect19')}>
            <Rect
              x="52.221"
              y="134.454"
              width="41.417"
              height="24.009"
            />
          </TouchableOpacity>
        
      </SvgXml>
      
      </View>
    </View>
  );
}

export default LightsScreen;
