import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Pages from '../../data/Pages';
import GetLocation from 'react-native-get-location';
import {LeafletView} from 'react-native-leaflet-view';
export default function LocationScreen() {
  const [location, setLocation] = useState(null);

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 5000,
  })
    .then(location => {
      setLocation(location);
    })
    .catch(error => {
      const {code, message} = error;
    });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[2].index}</Text>
        <Text style={styles.title}>{Pages[2].title}</Text>
        <Text style={styles.description}>{Pages[2].description}</Text>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={styles.text}>Location Coordinate</Text>
        {location && (
          <Text style={styles.title}>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </Text>
        )}
      </View>
      <View style={{marginTop: 16, flex: 1}}>
        <Text style={styles.text}>Location Map</Text>
        {location && (
          <LeafletView
            style={{flex: 1}}
            mapCenterPosition={{
              lat: location.latitude,
              lng: location.longitude,
            }}
            zoom={15}
            mapLayers={[
              {
                baseLayerIsChecked: true,
                baseLayerName: 'OpenStreetMap.Mapnik',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
              },
            ]}
            markers={[
              {
                position: {lat: location.latitude, lng: location.longitude},
                icon: '📍', 
                size: [32, 32],
              },
            ]}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginTop: 8,
    color: '#000',
    letterSpacing: -0.75,
  },
  description: {
    fontSize: 16,
    color: '#aaa',
  },
  function: {
    fontSize: 24,
    color: '#234897',
    letterSpacing: -0.5,
    fontWeight: 'bold',
  },
  text : {
    fontSize: 28,
    color: '#000',
    letterSpacing: -0.5,
    fontWeight: 'bold',
  },
});
