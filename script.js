mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXM3MzIyIiwiYSI6ImNsc2liNzgyNjE3bHMyaW5uYmpnM2g0ZWUifQ.XnhfVeO7l6Smi0x-SKMB8Q'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/chris7322/clsjtr9s701fc01qre0wl846p', // style URL
    center: [28.9556462132237, 41.109551659595354], // starting position [lng, lat]
    zoom: 9, // starting zoom
});




map.on('load', () => {
    //Istanbul GeoJSON data source
    map.addSource('istanbul-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                     "properties": {
                        "name": "Istanbul"
                    },
                    "geometry": {
                        "coordinates": [
                            28.9556462132237,
                            41.109551659595354
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });
    map.addLayer({
        'id': 'istanbul-pnt',
        'type': 'circle',
        'source': 'istanbul-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#FFFFFF'
        }
    });
});


map.on('load', () => {
    //Ankara GeoJSON data source
    map.addSource('ankara-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                     "properties": {
                        "name": "Ankara"
                    },
                    "geometry": {
                        "coordinates": [
                            32.868821998912125,
                            39.89252439810511
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });
    map.addLayer({
        'id': 'ankara-pnt',
        'type': 'circle',
        'source': 'ankara-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#FFFFFF'
        }
    });
});


