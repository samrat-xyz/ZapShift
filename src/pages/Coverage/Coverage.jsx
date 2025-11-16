import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

function Coverage() {
  const position = [23.685, 90.3563];
  const services = useLoaderData();
  console.log(services);

  return (
    <div className="my-8 px-3 md:px-6">
      <div className="space-y-6 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-secondary">
          We are available in 64 districts
        </h1>

        <div className="join p-3 flex justify-center">
          <input
            className="input join-item rounded-l-full outline-0 w-40 sm:w-60 md:w-80"
            placeholder="Search here"
          />
          <button className="btn join-item rounded-r-full">Search</button>
        </div>
      </div>

      <div className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[650px] xl:h-[800px]  rounded-xl mt-6 overflow-hidden">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {services.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>
                  {center.district}
                  <br />
                  Service Area: {center.covered_area.join(",")}
                </strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Coverage;
