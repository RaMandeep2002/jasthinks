"use client";
import React, { useState } from "react";
import { Clock, IndianRupee, DollarSign } from "lucide-react";

// Dummy BookingModal. Replace with actual modal as needed.
type BookingModalProps = {
  service: Service;
  onClose: () => void;
};
function BookingModal({ service, onClose }: BookingModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md mx-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
        <p className="text-gray-700 mb-4">{service.description}</p>
        <div className="mb-4">
          <span className="inline-flex items-center mr-4">
            <Clock className="w-4 h-4 mr-1" /> {service.duration_minutes} minutes
          </span>
          {service.bundle_sessions > 1 && (
            <span className="text-indigo-600 font-medium">
              Bundle of {service.bundle_sessions} sessions
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <span className="flex items-center text-gray-700">
            <IndianRupee className="w-4 h-4 mr-1" />
            <span className="font-bold">{service.price_inr}</span>
          </span>
          <span className="flex items-center text-gray-700">
            <DollarSign className="w-4 h-4 mr-1" />
            <span className="font-bold">{service.price_usd}</span>
          </span>
        </div>
        <button
          onClick={onClose}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Service type definition
type Service = {
  id: string;
  title: string;
  description?: string;
  duration_minutes: number;
  bundle_sessions: number;
  price_inr: number;
  price_usd: number;
};

// Mock data for now. Replace with real data as needed.
const services: Service[] = [
  {
    id: "1",
    title: "Bundle of Healing",
    description: "A nurturing 1-on-1 session focused on helping you process, heal, and move forward with clarity.",
    duration_minutes: 50,
    bundle_sessions: 1,
    price_inr: 15000,
    price_usd: 30,
  },
  {
    id: "2",
    title: "Teen Talk (Under 21)",
    description: "A discounted pack of 4 private sessions crafted to support young people through their unique challenges.",
    duration_minutes: 50,
    bundle_sessions: 4,
    price_inr: 1200,
    price_usd: 100,
  },
  {
    id: "3",
    title: "Session to Unwind your thoughts",
    description: "Dedicated time for self-reflection, guidance, and untangling your worries in a safe space.",
    duration_minutes: 60,
    bundle_sessions: 1,
    price_inr: 2300,
    price_usd: 50,
  },
  {
    id: "4",
    title: "Short discussion",
    description: "A concise, focused talk designed for quick clarity or immediate emotional support.",
    duration_minutes: 60,
    bundle_sessions: 1,
    price_inr: 1200,
    price_usd: 50,
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the session that resonates with your healing journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-linear-to-br from-white to-indigo-50 border-2 border-indigo-100 rounded-xl p-6 hover:shadow-xl transition hover:border-indigo-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-gray-600 mb-4">{service.description}</p>
                )}

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                    <span>{service.duration_minutes} minutes</span>
                  </div>
                  {service.bundle_sessions > 1 && (
                    <div className="text-sm text-indigo-600 font-medium">
                      Bundle of {service.bundle_sessions} sessions
                    </div>
                  )}
                </div>

                <div className="border-t border-indigo-200 pt-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-gray-700">
                      <IndianRupee className="w-5 h-5 mr-1" />
                      <span className="text-2xl font-bold">
                        {service.price_inr}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="w-5 h-5 mr-1" />
                      <span className="text-2xl font-bold">
                        {service.price_usd}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium"
                >
                  Get It Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <BookingModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}