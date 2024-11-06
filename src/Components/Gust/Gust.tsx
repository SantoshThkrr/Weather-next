import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const Gust = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-center">Gust</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="relative w-32 h-32 border-4 border-gray-200 rounded-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm">Km/hr</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Gust;
