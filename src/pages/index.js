import React from 'react';
import { Helmet } from 'react-helmet';
import L from 'leaflet';
import covidLencois from '../data/countries.json';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';

const LOCATION = {
  lat: -22.598893,
  lng: -48.781856,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 14;

const IndexPage = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    let response;

    const data = covidLencois;
    console.log(data);
    const hasData = Array.isArray(data) && data.length > 0;

    if (!hasData) return;

    const geoJson = {
      type: 'FeatureCollection',
      features: data.map((bairro = {}) => {
        const { bairroInfo = {} } = bairro;
        const { lat, long: lng } = bairroInfo;
        return {
          type: 'Feature',
          properties: {
            ...bairro,
          },
          geometry: {
            type: 'Point',
            coordinates: [lng, lat],
          },
        };
      }),
    };

    const geoJsonLayers = new L.GeoJSON(geoJson, {
      pointToLayer: (feature = {}, latlng) => {
        const { properties = {} } = feature;
        let casesString;

        const { bairro, casos } = properties;

        casesString = `${casos}`;

        if (casos > 1000) {
          casesString = `${casesString.slice(0, -3)}k+`;
        }

        const html = `
        <span class="icon-marker">
          <span class="icon-marker-tooltip">
            <h2>${bairro}</h2>
            <ul>
              <li><strong>Confirmed:</strong> ${casos}</li>
            </ul>
          </span>
          ${casesString}
        </span>
      `;

        return L.marker(latlng, {
          icon: L.divIcon({
            className: 'icon',
            html,
          }),
          riseOnHover: true,
        });
      },
    });
    geoJsonLayers.addTo(map);
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Map {...mapSettings}></Map>
    </Layout>
  );
};

export default IndexPage;
