import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import ImagePickerExample from './imagePicker';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ImagePickerExample />
      {/* <MapView provider={MapView.PROVIDER_GOOGLE}
      style={StyleSheet.absoluteFillObject}
      // style={styles.mapStyle}  
      showsUserLocation={false}  
      zoomEnabled={true}  
      zoomControlEnabled={true}  
      initialRegion={{  
        latitude: 28.579660,   
        longitude: 77.321110,  
        latitudeDelta: 0.0922,  
        longitudeDelta: 0.0421,  
      }}
      >
           <Marker  
            coordinate={{ latitude: 28.579660, longitude: 77.321110 }}  
            title={"JavaTpoint"}  
            description={"Java Training Institute"}  
          /> 
        </MapView>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
