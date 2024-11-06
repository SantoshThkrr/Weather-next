import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const Humidity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-center">Humidity</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <div className="w-32 h-32 border-4 border-blue-500 rounded-full flex items-center justify-center">
          <span className="text-xl">%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Humidity;
