import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const WindDirection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-center">Wind Direction</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="relative w-32 h-32 border-4 border-gray-200 rounded-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2">N</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                S
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2">W</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2">E</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WindDirection;
