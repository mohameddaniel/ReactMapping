import MapView ,{Marker ,Polyline,Circle} from 'react-native-maps';
import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity ,
    Text,
    FlatList,
    SafeAreaView,
    ScrollView,
    Modal,
    Alert,
    
   // ImageBackground
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LogBox } from 'react-native';
import { FontAwesome, MaterialIcons  } from '@expo/vector-icons'
import React, { useState,useRef,useEffect } from 'react';
import Constants from "expo-constants";
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
const apiKey = '5b3ce3597851110001cf62480feeccee16ea4b0a8b0cfb91b34559c2';
const baseURL = 'https://api.openrouteservice.org/v2/';


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

 const  HomeScreen = ({navigation}) =>
 {
  const [zoomLevel, setZoomLevel] = useState(3);
  const [origin ,setOrigin] = useState({//33.2348244246818, -8.539360843975489
    latitude:33.2348244246818,
    longitude:-8.539360843975489,
      });
  const [inputValue, setInputValue] = useState('');
  const [predictions, setPredictions] = useState([]);
  const searchInput = useRef(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [showInputs, setShowInputs] = useState(false);
 // const [originn, setOriginn] = useState('');
  const [showPredictions, setShowPredictions] = useState(false);
  const [showList, setShowList] = useState(false);
  const [derectionvisible,setDerectionvisible] = useState(false);
  const [directionsView, setDirectionsView] = useState(false);

  const handlePress = () => {
    setShowInputs(!showInputs);
    //setOrigin_('');
   // setDestination_('');
   // setCoordinates([]);
  };

  
  const handleCancel = () => {
    // TODO: handle Cancel button press
    setShowInputs(false);//${inputValue}
    setOrigin_('');
    setDestination_('');
    setCoordinates([]);
  };

  
 
 
  const [duration, setDuration] = useState('');
const [distance, setDistance] = useState('');

const [direction, setDirection] = useState(null);
const fetchDirection = async () => {
  const apiKey = '5b3ce3597851110001cf62480feeccee16ea4b0a8b0cfb91b34559c2';
  const providerCoords = coordsSpulier;
  const distributorCoords = coordsdis;
  const supermarketCoords = coordSM;
  const clientCoords = cons;
  if (providerCoords && distributorCoords && supermarketCoords && clientCoords) {
  try {
    const response = await axios.get(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${providerCoords.longitude},${providerCoords.latitude}&end=${clientCoords.longitude},${clientCoords.latitude}&via=${distributorCoords.longitude},${distributorCoords.latitude},${supermarketCoords.longitude},${supermarketCoords.latitude}`);

    const { features } = response.data;

    const coordinates = features[0].geometry.coordinates;

    const start = { latitude: coordinates[0][1], longitude: coordinates[0][0] };
    const end = { latitude: coordinates[coordinates.length - 1][1], longitude: coordinates[coordinates.length - 1][0] };
    const via = coordinates.slice(1, -1).map(coord => ({
      latitude: coord[1],
      longitude: coord[0]
    }));
    mapRef.current.animateCamera(
      {
        center: {
          latitude: start.latitude,
          longitude: start.longitude,
        },
        zoom: 14,
        pitch: 0,
        heading: 0,
        altitude: 1000,
      },
      { duration: 1000 }
    );
    mapRef.current.animateCamera(
      {
        center: {
          latitude: end.latitude,
          longitude: end.longitude,
        },
        zoom: 14,
        pitch: 0,
        heading: 0,
        altitude: 1000,
      },
      { duration: 1000 }
    );
 // Set the duration and distance
 const { duration, distance } = features[0].properties.segments[0];
 setDuration((duration /60).toFixed(2) + ' minutes');
 setDistance((distance/1000).toFixed(2)  + ' km');

 setDerectionvisible(!derectionvisible);
 if (!derectionvisible) {
  setDirection({ start, end, via });
 }
    

  } catch (error) {
    console.error(error);
  }
}
}
//************************** */

const [userLocation, setUserLocation] = useState(null);
useEffect(() => {
  (async () => {
    
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
     setUserLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
  })();
}, []);



  const handleResetPredictions = () => {
    setInputValue('');
    setPredictions([]);
    setShowPredictions(false);
    setArt(false);
  };

const [art ,setArt] = useState(false);
  const onSearchFocus = () => {
    setShowList(true);
    setArt(true);
    setCity('');
  };

  const onSearchBlur = () => {
    setShowList(false);//33.23200270916482, -8.54336269689517
    setArt(false);       //33.22907024166189, -8.53899703916461
  };




//pour Suplier //33.200076098198394, -8.101740416636511

const [isModalVisible, setIsModalVisible] = useState(false);
//les coordonnes
const [coordsSpulier ,setCoordsSuplier] = useState(null);
//**** */
const [coordsSpulier1 ,setCoordsSuplier1] = useState(null);
const [coordsSpulier2 ,setCoordsSuplier2] = useState(null);
const [coordsSpulier3 ,setCoordsSuplier3] = useState(null);
const [coordsSpulier4 ,setCoordsSuplier4] = useState(null);

const handleButtonPress = (Number) => {
  switch(Number){

    case '1'://33.5481460607724, -7.659797016346708
     setCoordsSuplier({ latitude: 33.5481460607724, longitude:-7.659797016346708});
     mapRef.current.animateCamera(
      {
        center: {
          latitude:33.5481460607724 ,
          longitude: -7.659797016346708,
        },
        zoom: 14,
        pitch: 0,
        heading: 0,
        altitude: 1000,
      },
      { duration: 1000 }
    );
      setIsModalVisible(false);
      
      break;

    case '2':
     setCoordsSuplier({latitude:33.11196087764139,longitude:-8.385218836735946});
     mapRef.current.animateCamera(
      {
        center: {
          latitude:33.11196087764139,
          longitude:-8.385218836735946,
        },
        zoom: 14,
        pitch: 0,
        heading: 0,
        altitude: 1000,
      },
      { duration: 1000 }
    );
      setIsModalVisible(false);//33.11196087764139, -8.385218836735946
     
      break;

    case '3':
      setCoordsSuplier({latitude:33.011990018888085,longitude:-8.185941927557135});
      mapRef.current.animateCamera(
        {
          center: {
            latitude:33.011990018888085,
            longitude:-8.185941927557135,
          },
          zoom: 14,
          pitch: 0,
          heading: 0,
          altitude: 1000,
        },
        { duration: 1000 }
      );
      setIsModalVisible(false);//33.011990018888085, -8.185941927557135
     
      break;

      case '4':
       setCoordsSuplier({latitude:33.091975790928096,longitude: -8.477840498748634});
       mapRef.current.animateCamera(
        {
          center: {
            latitude:33.091975790928096,
            longitude:-8.477840498748634,
          },
          zoom: 14,
          pitch: 0,
          heading: 0,
          altitude: 1000,
        },
        { duration: 1000 }
      );
      setIsModalVisible(false);//33.091975790928096, -8.477840498748634
      
      break;
      case '5':
        setCoordsSuplier1({ latitude: 33.5481460607724, longitude:-7.659797016346708});
        setCoordsSuplier2({latitude:33.11196087764139,longitude:-8.385218836735946});
        setCoordsSuplier3({latitude:33.011990018888085,longitude:-8.185941927557135});
        setCoordsSuplier4({latitude:33.091975790928096,longitude: -8.477840498748634});
        setIsModalVisible(false);
        break;

     case '6':
        setIsModalVisible(false);
        setCoordsSuplier(null);
        setCoordsSuplier1(null);
        setCoordsSuplier2(null);
        setCoordsSuplier3(null);
        setCoordsSuplier4(null);
       
       
        break;
        
  }
  // ferme le modal lorsque le bouton est cliqué

};

  //pour Distributer
const [isModaldis ,setIsModaldis] = useState(false);
const [coordsdis ,setCoordsdis] = useState(null);


  const handleButtonDis = (buttonName) =>{
    switch(buttonName){

      case '1'://33.2547229836651, -8.518458637612502
       setCoordsdis({latitude:33.2547229836651, longitude: -8.518458637612502}); 
       setIsModaldis(false);
        
        break;
  
      case '2':
        setCoordsdis({latitude:33.194116771458056,longitude:-8.503184096179234});
        setIsModaldis(false);
        break;
  
      case '3':
        setCoordsdis({latitude:33.24009977483648,longitude:-8.536996100483101});
        setIsModaldis(false);
        break;
  
        case '4':
        setCoordsdis({latitude:33.22980653437565,longitude: -8.540643733950327});
         setIsModaldis(false);
        break;
       case '5':
        setIsModaldis(false);
        break;
  
       case '6':
          setIsModaldis(false);
          setCoordsdis(null);
         // setCoordsdis2(null);
          //setCoordsdis3(null);
          //setCoordsdis4(null);
         
          break;
          
    }
   
  }

//pour Supermarket

const [isModalmar ,setIsModalmar] = useState(false);
const [coordSM,setCoordSM] = useState(null);

const handleButtonmar = (buttonName) =>{

 switch(buttonName){
  case '1'://33.2383789732939, -8.533978602569912
      setCoordSM({latitude: 33.2383789732939, longitude: -8.533978602569912});

      setIsModalmar(false);
  break;
  case '2'://33.195750774192234, -8.502465272950884
      setCoordSM({latitude:33.195750774192234,longitude:-8.502465272950884});
      setIsModalmar(false);
  break;
  case '3'://33.2422443880428, -8.537575462092832
      setCoordSM({latitude:33.2422443880428,longitude:-8.537575462092832});
      setIsModalmar(false);
  break;
  case '4'://33.23175390725608, -8.543100608376445
       setCoordSM({latitude:33.23175390725608,longitude:-8.543100608376445});
       setIsModalmar(false);
  break;
  case '5':
    setIsModalmar(false);
  break;
  case '6':
    setCoordSM(null);
    setIsModalmar(false);
  break;

 }
 
}


//pour Conusomer

const [isModalcon ,setIsModalcon] = useState(false);
const [cons,setCons] = useState(null);
const handleButtoncon = (buttonName) =>{
  switch(buttonName){
    case '1'://33.231287245023516, -8.543164981391865
      setCons({ latitude: 33.231287245023516, longitude: -8.543164981391865});
      setIsModalcon(false);
    break;
    case '2'://33.23201416012087, -8.535772813390587
    setCons({ latitude: 33.23201416012087, longitude: -8.535772813390587});
      setIsModalcon(false);
    break;
    case '3'://33.23202313437399, -8.544119847801152
      setCons({ latitude: 33.23202313437399, longitude: -8.544119847801152});
      setIsModalcon(false);
    break;
    case '4'://33.23149365364686, -8.546437276386424
      setCons({ latitude: 33.23149365364686, longitude: -8.546437276386424});
      setIsModalcon(false);
    break;
    case '5':
      setIsModalcon(false);
    break;
    case '6':
      setCons(null);
      setIsModalcon(false);
    break;
  
   }
 

}

//pour affiche votre position 
const [active,setActive] = useState(null);
const [vis,setVis] = useState(false);
const Ok =()=>{
  //33.22520373190709, -8.485706152041137
   setActive({latitude:33.22520373190709,longitude: -8.485706152041137});
   mapRef.current.animateCamera(
    {
      center: {
        latitude:33.22520373190709 ,
        longitude:-8.485706152041137,
      },
      zoom: 14,
      pitch: 0,
      heading: 0,
      altitude: 1000,
    },
    { duration: 3000 }
  );
   setVis(!vis);
}
//pour faire les recherche sur maps
//on utilise les api de open geocode
const [city, setCity] = useState('');
const [latitude, setLatitude] = useState(null);
const [longitude, setLongitude] = useState(null);
const [showIt,setShowIt] = useState(true);
const mapRef = useRef(null);

const searchCity = () => {
  // Effectuer une recherche pour obtenir les coordonnées de la ville
  // Ici, vous pouvez utiliser une API de géocodage, comme OpenCage Geocoder, pour convertir la ville en coordonnées

  // Exemple de requête à l'API OpenCage Geocoder
  //setShowList(false);
  setArt(false);
  
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=b398074a9f474d3b91947287886a6128`)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const firstResult = data.results[0];
        const { lat, lng } = firstResult.geometry;

        setLatitude(lat);
        setLongitude(lng);
        setCity('');
        // Animer la caméra vers la position exacte avec une belle animation
        mapRef.current.animateCamera(
          {
            center: {
              latitude: lat,
              longitude: lng,
            },
            zoom: 14,
            pitch: 0,
            heading: 0,
            altitude: 1000,
          },
          { duration: 1000 }
        );
      }
    })
    .catch(error => console.log('Error searching city:', error));
};
//pour  compelté les addresse "auto-complete"

const handleInputChange = async (city) => {
  setCity(city);
  const url = `https://api.openrouteservice.org/geocode/autocomplete?api_key=5b3ce3597851110001cf62480feeccee16ea4b0a8b0cfb91b34559c2&text=${city}`;
  try {
    const response = await axios.get(url);
    setPredictions(response.data.features);
    setShowPredictions(true);
  } catch (error) {
    console.log(error);
  }
};
//#############################
const handleSuggestionPress = (suggestion) => {
  setCity(suggestion.properties.label);
  setPredictions([]);
};

//destination             origin
const [origin_, setOrigin_] = useState('');
const [destination_, setDestination_] = useState('');
const [coordinates, setCoordinates] = useState([]);
const handleSearchpos = () => {
  // Effectuer une recherche pour obtenir les coordonnées de l'origine et de la destination
  // Ici, vous pouvez utiliser une API de géocodage, comme OpenCage Geocoder, pour convertir les adresses en coordonnées

  // Exemple de requête à l'API OpenCage Geocoder pour obtenir les coordonnées de l'origine
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${origin_}&key=b398074a9f474d3b91947287886a6128`)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const originCoordinates = data.results[0].geometry;
        
        // Exemple de requête à l'API OpenCage Geocoder pour obtenir les coordonnées de la destination
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${destination_}&key=b398074a9f474d3b91947287886a6128`)
          .then(response => response.json())
          .then(data => {
            if (data.results && data.results.length > 0) {
              const destinationCoordinates = data.results[0].geometry;
              
              // Mettre à jour les coordonnées et afficher le chemin sur la carte
              setCoordinates([originCoordinates, destinationCoordinates]);
              getRoute_();
              setShowInputs(false);
            
              //pour destination
              mapRef.current.animateCamera(
                {
                  center: {
                    latitude:destinationCoordinates.lat ,
                    longitude:destinationCoordinates.lng,
                  },
                  zoom: 14,
                  pitch: 0,
                  heading: 0,
                  altitude: 1000,
                },
                { duration: 1000 }
              );
            }
          })
          .catch(error => console.log('Error searching destination:', error));
      }
    })
    .catch(error => console.log('Error searching origin:', error));
};

//pour fait la direction entre depart et d'arrive
const [route_, setRoute_] = useState([]);
  const getRoute_ = async () => {
    try {
      const url = `${baseURL}directions/driving-car?api_key=${apiKey}&start=${ coordinates[0].lng},${ coordinates[0].lat}&end=${ coordinates[1].lng},${ coordinates[1].lat}`;
      const response = await axios.get(url);
      const { features } = response.data;
      if (features && features.length > 0) {
        const { geometry } = features[0];
        const { coordinates } = geometry;
        const routeCoords = coordinates.map((coordinate) => ({
          latitude: coordinate[1],
          longitude: coordinate[0],
        }));
        setRoute_(routeCoords);
      }
    } catch (error) {
      console.error(error);
    }
  };
//################################
const Press = ()=>{
  setArt(true);
}

    return(
        
        <View style={styles.container}>


    {!art ?( <MapView style={styles.map}
         ref={mapRef}
        initialRegion = {{
         latitude :origin.latitude,
         longitude : origin.longitude,
         latitudeDelta:0.09,
         longitudeDelta:0.04,
        }}
        region={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09 / Math.pow(2, zoomLevel - 1),
          longitudeDelta: 0.04 / Math.pow(2, zoomLevel - 1),
        }}

        onPress={(event) => {
          const { latitude, longitude } = event.nativeEvent.coordinate;
          const searchCoords = `${latitude},${longitude}`;
          setCity(searchCoords);
          searchInput.current && searchInput.current.setNativeProps({ text: searchCoords });
          const newMarker = { latitude, longitude };
          if (markerPosition) {
            // Si un marqueur existe déjà, supprimez-le et créez un nouveau marqueur
            setMarkerPosition(null);
            if (inputValue !== searchCoords) {
              setCity('');
            }
           // setMarkerPosition(newMarker);
          } else {
            // Créez un nouveau marqueur avec la nouvelle position
            setMarkerPosition(newMarker);
          }
        }}
        >
       {vis && (
          <Marker coordinate={active}  title="votre position" >
            <FontAwesome name="male" size={40} color="red"  />
          </Marker>)
        }
      {vis && <Circle center={active} radius={1000} fillColor="rgba(255, 0, 0, 0.1)" strokeColor="rgba(255, 0, 0, 0.5)" strokeWidth={1} />} 
      {markerPosition ? ( <Marker coordinate={markerPosition}  description="Localisation de fourinsseur "/>  ) : null}
     
      
 {direction && <>
    {derectionvisible && <Polyline
          coordinates={[direction.start, ...direction.via, direction.end]}
          strokeWidth={3}
          strokeColor="blue"
        />}
       { coordsSpulier ? (<Marker coordinate={direction.start} title="Fournisseur" />):null}
       {coordsdis ? ( <Marker coordinate={direction.via[0]} title="Distributeur" />):null}
        {coordSM ? (<Marker coordinate={direction.via[1]} title="Supermarché" />):null}
        { cons? (<Marker coordinate={direction.end} title="Client" />) :null}
        </>}
      {latitude && longitude && ( <Marker coordinate={{ latitude, longitude }} />  )}

      {coordinates.length > 0 && (  <Marker coordinate={{ latitude: coordinates[0].lat, longitude: coordinates[0].lng }} />)}
      {coordinates.length > 0 && (   <Marker coordinate={{ latitude: coordinates[1].lat, longitude: coordinates[1].lng }} />)}
      {coordinates.length > 0 && (   <Polyline coordinates={route_} strokeWidth={3} strokeColor="blue" />)}
      {/*pour fournisseur */}
      { coordsSpulier ? (<Marker coordinate={coordsSpulier} title="Fournisseur" 
      description="Localisation de fourinsseur "
      identifier="monMarqueur"
      draggable={true}
      zIndex={2}
      anchor={{ x: 0.5, y: 1 }}
      />):null}
      {/*pour Distributeur */}
      {coordsdis ? ( <Marker coordinate={coordsdis} title="Distributeur" />):null}
      {/*pour SuperMarket */}
      {coordSM ? (<Marker coordinate={coordSM} title="Supermarché" />):null}
       {/*pourConsomateur */}
      { cons? (<Marker coordinate={cons} title="Client" />) :null}

      {/*tout les fournisseur */}
      { coordsSpulier1 ? (<Marker coordinate={coordsSpulier1} title="Fournisseur" 
      description="Localisation de fourinsseur "
      identifier="monMarqueur"
      draggable={true}
      zIndex={2}
      anchor={{ x: 0.5, y: 1 }}
      />):null}
       { coordsSpulier2 ? (<Marker coordinate={coordsSpulier2} title="Fournisseur" 
      description="Localisation de fourinsseur "
      identifier="monMarqueur"
      draggable={true}
      zIndex={2}
      anchor={{ x: 0.5, y: 1 }}
      />):null}
       { coordsSpulier3 ? (<Marker coordinate={coordsSpulier3} title="Fournisseur" 
      description="Localisation de fourinsseur "
      identifier="monMarqueur"
      draggable={true}
      zIndex={2}
      anchor={{ x: 0.5, y: 1 }}
      />):null}
       { coordsSpulier4 ? (<Marker coordinate={coordsSpulier4} title="Fournisseur" 
      description="Localisation de fourinsseur "
      identifier="monMarqueur"
      draggable={true}
      zIndex={2}
      anchor={{ x: 0.5, y: 1 }}
      />):null}
       </MapView>
    ) :null }  

       {derectionvisible && (
     <View style={styles.routeInfo}>
     <Text style={styles.duration}>{duration}</Text>
     <Text style={styles.distance}>{distance}</Text>
   </View>
      )}

      
     
{!art ? (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
      <View  style={styles.categories}>

    {/*liste de button pour suplier */}
   <View>
    <TouchableOpacity
    style={styles.categoryButton}
    onPress={() => setIsModalVisible(true)}
    >
      <View style={styles.fors}>
      <Icon name="truck" size={22} color="#000" style={styles.icons}/>
      <Text style={styles.categoryLabel}>Supplier</Text>
      </View>
    </TouchableOpacity>

    <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModalVisible(false)}
          >
            <MaterialCommunityIcons
              name="close"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonPress('1')}
          > 
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Suplier N°1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonPress('2')}
          >
              <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Suplier N°2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonPress('3')}
          >
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Suplier N°3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonPress('4')}
          >
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Suplier N°4</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonPress('5')}
          >
              <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>All Suplier's</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonPress('6')}
          >
              <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </Modal>

    </View>

{/* liste de button de distributer */}

    <View>
    <TouchableOpacity 
     style={styles.categoryButton}
     onPress={() => setIsModaldis(true)}
      >
         <View style={styles.fors} >
      <Icon name="shopping-basket" size={21} color="black" style={styles.icons} />
      <Text style={styles.categoryLabel}>Distributer</Text>
        </View>
    </TouchableOpacity>

    <Modal
        animationType="slide"
        transparent={true}
        visible={isModaldis}
        onRequestClose={() => setIsModaldis(false)}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModaldis(false)}
          >
            <MaterialCommunityIcons
              name="close"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonDis('1')}
          > 
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Distributer N°1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonDis('2')}
          >
              <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Distributer N°2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonDis('3')}
          >
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Distributer N°3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonDis('4')}
          >
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>DistributerN°4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonDis('5')}
          >
              <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>All Distributer's</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonDis('6')}
          >
               <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>

{/*liste de button pour super market */}

<View>
    <TouchableOpacity 
     style={styles.categoryButton}
    onPress={()=>setIsModalmar(true)}>
      <View style={styles.fors}>
      <Icon name="shopping-cart" size={24} color="black"  style={styles.icons}/>
      <Text style={styles.categoryLabel}>Supermarket</Text>
      </View>
    </TouchableOpacity>
    <Modal
        animationType="slide"
        transparent={true}
        visible={isModalmar}
        onRequestClose={() => setIsModalmar(false)}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModalmar(false)}
          >
            <MaterialCommunityIcons
              name="close"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonmar('1')}
          > 
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Supermarket N°1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonmar('2')}
          >
              <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Supermarket N°2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonmar('3')}
          >
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Supermarket N°3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonmar('4')}
          >
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Supermarket N°4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonmar('5')}
          >
              <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>All Supermarket's</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtonmar('6')}
          >
               <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    
    
    </View>

    {/*les liste de buton pour Consumer */}

    <View>
    <TouchableOpacity 
     style={styles.categoryButton}
     onPress={()=>setIsModalcon(true)}>
      <View  style={styles.fors}>
      <Icon name="user" size={24} color="black" style={styles.icons}/>
      <Text  style={styles.categoryLabel}>Consumer</Text>
      </View>
    </TouchableOpacity>
     </View>
     <Modal
        animationType="slide"
        transparent={true}
        visible={isModalcon}
        onRequestClose={() => setIsModalcon(false)}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModalcon(false)}
          >
            <MaterialCommunityIcons
              name="close"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtoncon('1')}
          > 
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Consumer N°1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtoncon('2')}
          >
              <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Consumer N°2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtoncon('3')}
          >
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Consumer N°3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtoncon('4')}
          >
           <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Consumer N°4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtoncon('5')}
          >
              <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>All Consumer's</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleButtoncon('6')}
          >
               <MaterialCommunityIcons name="map-marker" size={20} color="black" />
            <Text style={styles.modalButtonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </Modal>

     </View>
   </ScrollView>
):null}


       <View style={styles.zoomButtons}>

  {!art ?(     <TouchableOpacity onPress={() => setZoomLevel(zoomLevel + 1)}>
            <FontAwesome name="plus" size={24} color="black" />
        </TouchableOpacity>
):null}

{!art ?(
        <TouchableOpacity onPress={() => setZoomLevel(zoomLevel - 1)}>
             <FontAwesome name="minus" size={24} color="black" />
         </TouchableOpacity>
):null}
       </View>

       <View style={styles.searchBox}>
        <TouchableOpacity onPress={searchCity}>
       <Icon name="search" size={20} color="#999" style={styles.icon} />
       </TouchableOpacity>

         <TextInput
          style={styles.input}
          placeholder="Rechercher..."
          value={city}
          onChangeText={handleInputChange}
          ref={searchInput}
          onFocus={onSearchFocus}
          onBlur={onSearchBlur}
          onPressIn={Press} 
          
        />
        
         {showPredictions ? (
          <TouchableOpacity onPress={handleResetPredictions}>
            <Icon name="arrow-right" size={20} color="#999" style={styles.icon} />
          </TouchableOpacity>
        ):(
        
          <TouchableOpacity onPress={()=> navigation.navigate('Home1')}>
           <Ionicons name="menu-outline" size={30}/>
           </TouchableOpacity>
           )}
      </View> 

       {showList && (
        //style={styles.Flat}
      <View style={styles.Flat} >   
     
      <FlatList
        data={predictions}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSuggestionPress(item)}>
            <Text style={styles.suggestionText}>{item.properties.label}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.properties.id}
        contentContainerStyle={styles.suggestionsContainer}
        keyboardShouldPersistTaps="always"
        style={styles.FlatList}
      />
      </View>
       )}
    
      
     {!art ? (   
     <View style={styles.Icon}>
       <TouchableOpacity onPress={Ok}>
       <Ionicons
              name="locate-outline"
              size={30}
              color="black"
              style={{fontWeight:'bold'}}
            />
       </TouchableOpacity>
       </View> 
        ):null}

{!art? (  
  <View style={styles.Location}>
     <TouchableOpacity onPress={fetchDirection}>
       <Ionicons
              name="navigate-circle-outline"
              size={30}
              color="black"
              style={{fontWeight:'bold'}}
            />
       </TouchableOpacity>

       </View>
):null}
  {!art ? (  
       <TouchableOpacity onPress={handlePress} style={styles.button}>
        <MaterialIcons name="directions" size={24} color="red" />
      </TouchableOpacity>
  ):null}
      {showInputs && (

        <View style={styles.inputContainer}>
           <Ionicons name="navigate-circle" size={24} color="#FF6347" style={styles.Iconcnt}/>
          <TextInput
            style={styles.inputs}
            placeholder="Departure" 
            value={origin_}
            onChangeText={text => setOrigin_(text)}
          />
             <MaterialIcons name="directions" size={24} color="#FF6347" />

            <MaterialIcons name="place" size={24} color="#FF6347" style={styles.Iconcnten}/>
          <TextInput
            style={styles.inputs}
            placeholder="Destination"
            value={destination_}
            onChangeText={text => setDestination_(text)}
          />
         
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSearchpos} style={styles.okButton}>
              <Text style={styles.buttonText}>Ok</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>

        </View>
      )}




   


    </View>
    );
 }


 const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      map:{
        width:"100%",
        height:"100%",
       
      },
      searchBox: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal:10,
        paddingVertical:6,
        marginTop:25,
        top: Constants.statusBarHeight,
        elevation: 50,
  
      },
      input: {
        height: 40,
        width:290,
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',     
      
      },
      icon: {
        marginLeft: 10,
       
      },
      Icon:{
        position: 'absolute',
        backgroundColor: '#fff',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:50,
        bottom: Constants.statusBarHeight,
        right: Constants.statusBarHeight,
        marginBottom:28,
        elevation: 50,

      },
      header:{
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal:10,
        paddingVertical:6,
        marginTop:25,
        top: Constants.statusBarHeight,
      },
      IconMenu:{
        marginLeft:200,
      },
      zoomButtons:{
        position:'absolute',
        backgroundColor: '#fff',  
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:9,
        top:Constants.statusBarHeight,
        left:Constants.statusBarHeight,
        marginTop:147,
        marginLeft:-18,
        elevation: 50,
      },
      Location:{
        position: 'absolute',
        backgroundColor: '#fff',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:50,
        bottom: Constants.statusBarHeight,
        right: Constants.statusBarHeight,
        marginBottom:87,
        elevation: 50,

      },
      button: {
        position:'absolute',
        backgroundColor: '#fff',
        borderRadius: 25,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 16,
        marginBottom:150,
        bottom: Constants.statusBarHeight,
        right: Constants.statusBarHeight,
      },
      inputContainer: {
       position: 'absolute',
       // bottom: 50,
       // backgroundColor:'#fff',
        //backfaceVisibility:'hidden',
        height:250,
        width:350,
        backgroundColor:'#fff',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
       
       // paddingVertical:20,
        //paddingHorizontal:120
       
        elevation: 5,

      },
      inputs: {
        //paddingVertical:10,
        //paddingHorizontal:50,
        width:300,
        padding:10,
        borderWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      okButton: {
        backgroundColor: 'green',
       // padding: 10,
        paddingVertical: 13,
        paddingHorizontal:30,
        borderRadius: 5,
       // marginRight: 5,
       //marginLeft:60,
       marginRight:15,
      },
      cancelButton: {
        backgroundColor: 'red',
        paddingVertical: 13,
        paddingHorizontal:20,
        borderRadius: 5,
        //marginLeft: 5,
        //marginRight:60,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },

      cnt:{
        position:'absolute',
       // flex: 1,
       // alignItems: 'center',
        //justifyContent: 'center',
      },
      Iconcnt:{
       alignSelf:'flex-start',
       
      },
      Iconcnten:{
        alignSelf:'flex-start',
        
       },
       list: {
        marginTop:100,
        backgroundColor: '#fff',
        width:368,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      item: {
        padding: 10,
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      itemText: {
        fontSize: 16,
        color: '#333',
        marginLeft:5
      },

      Flat:{
        position:'absolute',

      },
      scroll:{
        position:'absolute',
        battom:0,
        top:Constants.statusBarHeight,
        marginTop:83,
         width:'100%',
        

      },
      subCategoryLabel: {
        color: '#fff',
        fontWeight: 'bold',
      },
         categories: {
           alignItems: 'center',
           flexDirection: 'row',
  
       },
       categoryButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        marginRight: 10,
       
      },
      fors:{
      marginTop:-5,
      // flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal:20,
         paddingVertical:6,
        elevation: 50,

      },
      icons:{
            marginRight:6
      },
      routeInfo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
      duration: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      distance: {
        color: 'gray',
        fontSize: 16,
      },
      button1: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
      },
      modalButton: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection:'row'
      },
      modalButtonText: {
        fontSize: 16,
        marginLeft:5
       
      },
      suggestionsContainer: {
        marginTop: 8,
      },
      suggestionText: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      flatList: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        zIndex: 1,
      },
      
  }
 )






export default HomeScreen