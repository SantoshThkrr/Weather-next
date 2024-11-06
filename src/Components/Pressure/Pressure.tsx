import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const Pressure = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-center">Pressure</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="w-32 h-32 border-4 border-gray-200 rounded-full flex items-center justify-center">
          <span className="text-xl">BAR</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Pressure;
