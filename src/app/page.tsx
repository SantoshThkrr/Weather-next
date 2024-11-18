import WeatherDashboard from "@/Components/DashMain";
import Navbar from "@/Components/Navbar";
import { StationProvider } from '../Components/Context/StationContext';
import WeatherForecast from "@/Components/WeatherNews/WeatherNews";

export default function Home() {
  return (
    <div className="">
      <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
        <StationProvider>
          <Navbar/>
          <WeatherDashboard />
          <WeatherForecast />
        </StationProvider>
      </main>
    </div>
  );
}