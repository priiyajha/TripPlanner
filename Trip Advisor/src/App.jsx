import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import HeroSection from './components/HeroSection/HeroSection';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Search from "./components/Search/Search";
import Trending from './components/Trending/Trending';
import AddCityDetails from './Pages/AddCityDetails/AddCityDetails';
import AllCityList from './Pages/AllCityList/AllCityList';
import SelectedCity from './Pages/SelectedCity/SelectedCity';
import PlanTrip from './Pages/PlanTrip/PlaneTrip';
import Layout from './Layout';  
import PlanTripSelected from './Pages/PlanTripSelected/PlanTripSelected';
import MonthBased from './Pages/FilterByMonth/MonthBased';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import SplashCursor from './ui/SplashCursor'
export default function App() {
  return (
    <div>
<SplashCursor />
      <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/hero" element={<HeroSection />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/slider" element={<ImageSlider />} />
                        <Route path="/focus" element={<Trending />} />
                        <Route path="/all-city" element={<AllCityList trending="trendingcity" />} />
                        <Route path="/all-place" element={<AllCityList trending="trendingplace" />} />
                        <Route path="/add-city" element={<AddCityDetails />} />
                        <Route path="/city/:cityName" element={<SelectedCity />} />
                        <Route path="/plantrip" element={<PlanTrip />} />
                        <Route path="/plan-trip/:placeName" element={<PlanTripSelected />} />
                        <Route path="/month/:month" element={<MonthBased />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Route>
                </Routes>
            </Router>
    </div>
  )
}
