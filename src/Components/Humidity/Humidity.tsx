import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { useStationContext } from "../Context/StationContext";

const Humidity = () => {
  const { selectedStation } = useStationContext();

  if (!selectedStation) {
    return <p>Please select a station</p>;
  } 
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-center">Humidity</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <div className="w-32 h-32 border-4 border-blue-500 rounded-full flex items-center justify-center">
          <span className="text-xl">{selectedStation.Relative_Humidity_at_0830}%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Humidity;
