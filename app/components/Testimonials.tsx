import { Star } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  content: string;
  rating: number;
};

// Example testimonial data (replace with actual data/fetch if needed)
const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    content:
      "The session helped me process difficult emotions. I feel lighter and much more hopeful about the future.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rahul Kapoor",
    content:
      "A compassionate space where I could truly share. The insights and support were invaluable.",
    rating: 4,
  },
  {
    id: "t3",
    name: "Megha Jain",
    content:
      "I have noticed real change in the way I approach my anxiety. Thank you for this healing journey!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Stories of healing and transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {testimonial.content}
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}