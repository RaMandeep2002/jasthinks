"use client"
import React, { useState } from "react";
import { Calendar, Clock, DollarSign, IndianRupee, Users } from "lucide-react";

// Type for a webinar
type Webinar = {
  id: string;
  title: string;
  description?: string;
  scheduled_at: string; // ISO date string
  duration_minutes: number;
  max_participants: number;
  price_inr: number;
  price_usd: number;
};

// Mock webinar data for illustration
const webinars: Webinar[] = [
  {
    id: "w1",
    title: "Group Healing - Anxiety Management",
    description: "Join this interactive session to learn practical exercises and guided healing approaches for anxiety.",
    scheduled_at: new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString(),
    duration_minutes: 90,
    max_participants: 20,
    price_inr: 399,
    price_usd: 10,
  },
  {
    id: "w2",
    title: "Building Self Compassion",
    description: "A group webinar on recognizing and nurturing your own worth. Meditation and worksheets included.",
    scheduled_at: new Date(Date.now() + 21 * 24 * 3600 * 1000).toISOString(),
    duration_minutes: 75,
    max_participants: 18,
    price_inr: 349,
    price_usd: 9,
  },
];

// For demonstration, using useState to emulate simple enrollment logic.
export default function Webinars() {
  // Assume that we have a list of webinar IDs the user is enrolled to:
  const [enrolledWebinars, setEnrolledWebinars] = useState<string[]>([]);
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);

  const handleEnroll = (webinar: Webinar) => {
    setEnrolledWebinars((prev) => [...prev, webinar.id]);
    setSelectedWebinar(webinar);
    setTimeout(() => setSelectedWebinar(null), 1500); // Demo: Auto-close after 1.5s
  };

  return (
    <>
      <section id="webinars" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our group sessions and learn together
            </p>
          </div>

          {webinars.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No upcoming webinars at the moment</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webinars.map((webinar) => {
                const isEnrolled = enrolledWebinars.includes(webinar.id);

                return (
                  <div
                    key={webinar.id}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {webinar.title}
                    </h3>
                    {webinar.description && (
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                    )}

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                        <span>
                          {new Date(webinar.scheduled_at).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                        <span>
                          {new Date(webinar.scheduled_at).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          ({webinar.duration_minutes} minutes)
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="w-5 h-5 mr-2 text-indigo-600" />
                        <span>Max {webinar.max_participants} participants</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-700">
                          <IndianRupee className="w-5 h-5 mr-1" />
                          <span className="text-xl font-bold">
                            {webinar.price_inr}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <DollarSign className="w-5 h-5 mr-1" />
                          <span className="text-xl font-bold">
                            {webinar.price_usd}
                          </span>
                        </div>
                      </div>
                    </div>

                    {isEnrolled ? (
                      <div className="w-full bg-green-100 text-green-700 py-3 rounded-lg text-center font-medium">
                        Enrolled
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEnroll(webinar)}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium"
                      >
                        Enroll Now
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {selectedWebinar && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white rounded-lg p-6 max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-2 text-green-700">Successfully Enrolled!</h2>
            <p className="mb-4 text-gray-700 text-center">
              You are now enrolled in <b>{selectedWebinar.title}</b>.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedWebinar(null)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}