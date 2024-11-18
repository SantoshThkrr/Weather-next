import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { CloudRain } from "lucide-react";
import { useStationContext } from "../Context/StationContext";


const Rain = () => {
  const { selectedStation } = useStationContext();

  if (!selectedStation) {
    return <p>Please select a station</p>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-center">Rain</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <CloudRain className="h-16 w-16 text-blue-400" />
          <span className="mt-2">{selectedStation.Past_24_hrs_Rainfall}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Rain;
