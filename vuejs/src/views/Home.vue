<template>
  <div class="home">
    
    <div class="search-wrapper">
      <input type="text" class="form-control search" placeholder="search business">
    </div>
    <div class="map js-map">
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import gmapsInit from '../utils/gmaps';
import snizzystyles from '../utils/snizzystyle';

export default {
  name: 'home',
  data: function() {
    return {
      businesses: [{
        name: 'name',
        subject: 'subject',
        message: 'message'
      }],
      center: { lat: -34.2970068, lng: 18.2486184 },
      markers: [{
          position: {
            lat: -34.038214,
            lng: 18.6628382
          }
        },
        {
          position: {
            lat: -34.0363812,
            lng: 18.6564657
          }
        },
        {
          position: {
            lat:  -33.868357,
            lng: 18.639736
          }
        },
        {
          position: {
            lat: -33.953616,
            lng: 18.6961989
          }
        },
        {
          position: {
            lat: -33.953616,
            lng: 18.6961989
          }
        },
        {
          position: {
            lat: -34.06946,
            lng: 18.5854313
          }
        },
        {
          position: {
            lat: -33.89462,
            lng: 18.6883207
          }
        },
      ],
      places: [],
      currentPlace: null
    }
  },
  created: function() {
    // this.getBusinesses().then(data => {
    //   this.businesses = data
    // });
    // console.log('2');
    // console.log(this.businesses);
  },
  async mounted() {
    try {
      
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(document.querySelector('.js-map'));
      const styledMapType = new google.maps.StyledMapType(snizzystyles,{name: 'Styled Map'});
      
      geocoder.geocode({ address: 'cape town' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }
        //map.fitBounds(results[0].geometry.viewport);
        const markers = this.markers
       .map(x => new google.maps.Marker({ ...x, map }));
       
       map.mapTypes.set('styled_map', styledMapType);
       map.setMapTypeId('styled_map');
       map.setZoom(12);
       map.setCenter(new google.maps.LatLng(this.markers[0].position.lat,this.markers[0].position.lng));
      });
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    getBusinesses: function() {
      return new Promise((resolve) => {
        return fetch('http://localhost:4000/messages')
          .then(response => response.json())
          .then(data => resolve(data));
      });
    }
  }
}
</script>

<style lang="scss">

  .home {
    padding: 0;
  }
  
  .map {
    height: 100vh;
    width: 100vw;
  }

  .search {
    width: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 2px 5px 13px rgba(0,0,0,0.5);
  }

  .search-wrapper {
    position: absolute;
    width: 100%;
    top: 20px;
    transform: translateX(-50%);
    left: 50%;
    z-index: 1;
  }

  .vue-map-container {
    width: 100vw !important;
    height: 100vh !important;
  }
</style>
