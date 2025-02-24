import { WorldMap } from "./worldMap";

export function TechsaMap() {
  return (
    <div className="dark:bg-black bg-white w-full">
      <WorldMap
        dots={[
          {
            start: { lat: 6.534932, lng: 74.916433 }, // Techsa
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 6.534932, lng: 74.916433 }, // Techsa
            end: { lat: 30.56668, lng: -79.813783 }, // NewYork
          },
          {
            start: { lat: 6.534932, lng: 74.916433 }, // Techsa
            end: { lat: 50.062889, lng: -99.667015 }, // chicago
          },
          {
            start: { lat: 6.534932, lng: 74.916433 }, // Techsa
            end: { lat: 4.504085, lng: 30.17943 }, // Africa
          },
          {
            start: { lat: 6.534932, lng: 74.916433 }, // Techsa
            end: { lat: -2.932041, lng: 36.697403 }, // Africa
          },
          {
            start: { lat: 6.534932, lng: 74.916433 }, // Techsa
            end: { lat: 11.304424, lng: 54.07888 }, // Dubai
          },
          {
            start: { lat: 6.534932, lng: 74.916433 }, // Techsa
            end: { lat: 10.304424, lng: 58.07888 },  // oman
          },
          {
            start: { lat: 6.534932, lng: 74.916433 }, // Techsa
            end: { lat: -40.932932, lng: 134.003367 }, // Aus
          },
          {
            start: { lat: 6.534932, lng: 74.916433 }, // Techsa
            end: { lat: -10.065096, lng: 102.459538 }, // singapore
          },
          {
            start: { lat: 6.534932, lng: 74.916433 }, // Techsa
            end: { lat: 48.296594, lng: 6.626965 }, // lixumberg
          },
        ]}
      />
    </div>
  );
}
