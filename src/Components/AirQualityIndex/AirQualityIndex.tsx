import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Sun, Sunrise, Sunset, ArrowUp, ArrowDown, Cloud, CloudRain, Moon } from "lucide-react";
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useTheme } from 'next-themes';

// Type definitions
interface AQILevel {
  value: number;
  label: string;
  color: string;
}



const AirQualityIndex: React.FC = () => {
  const aqiLevels: AQILevel[] = [
    { value: 0, label: 'Good', color: 'bg-green-500' },
    { value: 100, label: 'Fine', color: 'bg-green-400' },
    { value: 200, label: 'Moderate', color: 'bg-yellow-400' },
    { value: 300, label: 'Poor', color: 'bg-orange-500' },
    { value: 400, label: 'Very Poor', color: 'bg-red-500' },
    { value: 500, label: 'Severe', color: 'bg-red-700' },
    { value: 600, label: 'Hazardous', color: 'bg-black' },
  ];

  const scaleMarkers: number[] = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  return (
    <div className="w-full max-w-4xl relative mt-3 mb-3">
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Weather Today</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground mb-5">Air Quality Index</h2>
          </div>

          {/* AQI Scale */}
          <div className="space-y-4">
            <div className="relative h-8">
              <div className="absolute inset-0 flex rounded-full overflow-hidden">
                {aqiLevels.map((level, index) => (
                  <div 
                    key={level.value}
                    className={`flex-1 ${level.color} ${index === aqiLevels.length - 1 ? 'rounded-r-full' : ''} ${index === 0 ? 'rounded-l-full' : ''}`}
                  />
                ))}
              </div>
              
              {/* Scale markers */}
              <div className="absolute -top-6 left-0 right-0 flex justify-between text-xs text-muted-foreground">
                {scaleMarkers.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
            </div>

            {/* Current Value Indicator */}
            <div className="inline-flex items-center space-x-3 bg-card border border-border rounded-lg p-4">
              <div className="text-4xl font-bold text-foreground">NA</div>
              <div className="text-lg text-muted-foreground">PM 10</div>
              <div className="text-sm text-muted-foreground ml-4">No Data Available</div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-2 text-sm">
              {aqiLevels.map((level) => (
                <div key={level.label} className="flex items-center space-x-1">
                  <div className={`w-3 h-3 rounded-full ${level.color}`} />
                  <span className="text-muted-foreground">{level.label}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AirQualityIndex;