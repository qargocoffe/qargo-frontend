'use client'


import {
    GoogleMap,
    InfoWindowF,
    MarkerF,
    useJsApiLoader,
  } from "@react-google-maps/api";

export const Map = () => {


    const styles = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "color": "#dbd4c4"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#dbd4c4"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dbd4c4"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "color": "#d09d25"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#dbd4c4"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#dbd4c4"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "stylers": [
          {
            "saturation": -5
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "color": "#f1ad0e"
          },
          {
            "saturation": 5
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#dbd4c4"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [
          {
            "color": "#dbd4c4"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#dbd4c4"
          }
        ]
      }
    ]

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDWhb3NnSahO0oYXuIF2_nAY2gORFURCN0"
      })

      const center = {
        lat: 33.77014837170382,
        lng: -118.19262226683186
      };
    
      return isLoaded ? (
        <GoogleMap
        mapContainerStyle={{backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 12%, transparent 26%, transparent)', transition: 'background-image 0.5s ease' ,width: "100%", height: "600px"}}
          center={center}
          zoom={10}
          options={{
            styles: styles,
            mapTypeControl: false,
            zoomControl: false,
            fullscreenControl: false,
            streetViewControl: true,
          }}>
            <div className="flex justify-end items-center w-auto">
                <div className="flex flex-row items-center absolute z-20 left-4 bottom-8 " >
                    <input
                      placeholder="ENTER CITY OR ZIPCODE"
                      className="slide-in-left placeholder:text-[11px] placeholder:text-gray placeholder:font-bold tracking-widest border-0 rounded-full border-gray-400 pl-3 pr-12 py-2 w-full"
                    />
                    <img src="/menu/gray/search.png" className="mt-1 mx-0 p-0 absolute right-2 top-0 w-6 " alt="Search Icon" />
                </div>
            </div>

          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
}
