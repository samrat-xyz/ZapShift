import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

function Coverage() {
  const position = [23.685, 90.3563];
  const services = useLoaderData();
  console.log(services);
  const mapRef = useRef(null)
  const handleSearch = (e) =>{
    e.preventDefault()
    const location = e.target.location.value;

    const district = services.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
   
    if(district){
      const coord = [district.latitude,district.longitude];
      mapRef.current.flyTo(coord,14)
    }

  }

  return (
    <div className="my-8 px-3 md:px-6">
      <div className="space-y-6 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-secondary">
          We are available in 64 districts
        </h1>

        <form onSubmit={handleSearch}>
          <div className="join p-3 flex justify-center">
            <input
            name="location"
              className="input join-item rounded-l-full outline-0 w-40 sm:w-60 md:w-80"
              placeholder="Search here"
            />
            <button className="btn join-item rounded-r-full">Search</button>
          </div>
        </form>
      </div>

      <div className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[650px] xl:h-[800px]  rounded-xl mt-6 overflow-hidden">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="w-full h-full"
          ref={mapRef}
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
