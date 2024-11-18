"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Sun, ArrowUp, ArrowDown } from "lucide-react";

import AirQualityIndex from "./AirQualityIndex/AirQualityIndex";
import Pressure from "./Pressure/Pressure";
import Humidity from "./Humidity/Humidity";
import Rain from "./Rain/Rain";
import { useStationContext } from "./Context/StationContext";

const WeatherDashboard = () => {
  const { selectedStation } = useStationContext();

  if (!selectedStation) {
    return <p>Please select a station</p>;
  }
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4">
        {/* Left Panel */}
        <div className="max-w-sm relative">
          <Card className="bg-gradient-to-b from-background/50 to-background border-muted">
            <CardContent className="p-6 space-y-8">
              {/* Main Temperature */}
              <div>
                <h1 className="text-6xl font-bold text-foreground">
                  {selectedStation.Today_Max_temp
                    ? Math.round(parseFloat(selectedStation.Today_Max_temp)) +
                      "°C"
                    : "--"}
                </h1>
                <div className="mt-4 space-y-2">
                  <h2 className="text-xl text-foreground">Today</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-foreground/80">
                      {selectedStation.Todays_Forecast}
                    </span>
                    <Sun className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Sunrise & Sunset Card */}
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="text-muted-foreground mb-4">
                    Sunrise & Sunset
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yellow-400 dark:bg-yellow-500 rounded-full">
                        <ArrowUp className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg text-foreground">
                        {selectedStation.Sunrise_time}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yellow-400 dark:bg-yellow-500 rounded-full">
                        <ArrowDown className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg text-foreground">
                        {selectedStation.Sunset_time}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Maximum & Minimum Card */}
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="text-muted-foreground mb-4">
                    Maximum & Minimum
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-500 dark:bg-red-600 rounded-full">
                        <ArrowUp className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg text-foreground">
                        {selectedStation.Todays_Forecast_Max_Temp
                          ? Math.round(
                              parseFloat(
                                selectedStation.Todays_Forecast_Max_Temp
                              )
                            ) + "°C"
                          : "--"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500 dark:bg-blue-600 rounded-full">
                        <ArrowDown className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg text-foreground">
                        {selectedStation.Todays_Forecast_Min_temp
                          ? Math.round(
                              parseFloat(
                                selectedStation.Todays_Forecast_Min_temp
                              )
                            ) + "°C"
                          : "--"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardContent>
              <AirQualityIndex />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Pressure />
                <Humidity />
                <Rain />
                {/* <WindDirection />
                <MaxWindSpeed />
                <Gust /> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
