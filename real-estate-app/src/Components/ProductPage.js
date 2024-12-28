import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Bath, Bed, Car } from 'lucide-react';
import house from '../Assets/house.png';
import eee22 from '../Assets/eee22.png';
import eee33 from '../Assets/eee33.png';
import eee99 from '../Assets/eee99.png';
import eee55 from '../Assets/eee55.png';
import eee77 from '../Assets/eee77.png';

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState('View All');
  const [listings, setListings] = useState([]);
  
  const tabs = ['View All', 'Apartments', 'Buying', 'Renting', 'Cars', 'Land'];

  useEffect(() => {
    // In a real app, this would fetch from your API
    fetchListings();
  }, [activeTab]);

  const fetchListings = async () => {
    // Simulate API call - replace with real backend call
    const mockListings = [
      {
        id: 1,
        type: 'Apartment',
        status: 'For Sale',
        title: 'Full furnished apartment',
        location: 'Karelia, Rajas Riverside',
        price: '1,000,000',
        beds: 3,
        baths: 2,
        image: house,
        isFurnished: true
      },
      {
        id: 2,
        type: 'Apartment',
        status: 'For Sale',
        title: 'Un-furnished apartment',
        location: 'Rakyat, Kipas Riverside',
        price: '200,000',
        beds: 2,
        baths: 1,
        image: eee22,
        isFurnished: false
      },
      {
        id: 3,
        type: 'Car',
        status: 'For Rent',
        title: 'Hybrid car',
        location: 'Automatic',
        price: '12,000',
        year: '2019',
        isElectric: true,
        image: eee33,
      },
      {
        id: 3,
        type: 'Car',
        status: 'For Rent',
        title: 'Hybrid car',
        location: 'Automatic',
        price: '12,000',
        year: '2019',
        isElectric: true,
        image: eee99,
      },
      {
        id: 3,
        type: 'Car',
        status: 'For Rent',
        title: 'Hybrid car',
        location: 'Automatic',
        price: '12,000',
        year: '2019',
        isElectric: true,
        image: eee55,
      },
      {
        id: 3,
        type: 'Car',
        status: 'For Rent',
        title: 'Hybrid car',
        location: 'Automatic',
        price: '12,000',
        year: '2019',
        isElectric: true,
        image: eee77
      },
      // Add more mock listings as needed
    ];
    setListings(mockListings);
  };

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <h2 className="mb-8 text-2xl text-center  font-semibold">New Listings</h2>
      
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-center  text-center rounded-full ${
              activeTab === tab
                ? 'bg-blue-600 text-center  text-white'
                : 'bg-gray-100 text-center  text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <div key={listing.id} className="overflow-hidden bg-white rounded-lg shadow-md">
            {/* Image Container */}
            <div className="relative">
              <img
                
                src={listing.image}
                alt={listing.title}
                className="object-cover w-full h-48"
              />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-sm bg-white rounded-full">
                  {listing.type}
                </span>
              </div>
              <button className="absolute p-2 bg-white rounded-full top-4 right-4 hover:bg-gray-100">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 text-sm text-white bg-blue-600 rounded-full">
                  {listing.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">{listing.title}</h3>
              <div className="flex items-center mb-4 text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{listing.location}</span>
              </div>

              {/* Property Details */}
              {listing.type === 'Apartment' && (
                <div className="flex gap-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.beds}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.baths}</span>
                  </div>
                </div>
              )}

              {/* Car Details */}
              {listing.type === 'Car' && (
                <div className="flex gap-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.year}</span>
                  </div>
                  {listing.isElectric && (
                    <span className="text-sm">Electric</span>
                  )}
                </div>
              )}

              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">
                  ${listing.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 text-green-600 border-2 border-green-600 rounded-full hover:bg-green-50">
          View all properties →
        </button>
      </div>
    </div>
  );
};

export default ProductPage;