
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Business Owner",
      image: "/placeholder.svg",
      stars: 5,
      text: "Law Suvidha provided exceptional legal support for my business. Their corporate law expertise helped us navigate complex regulatory requirements with ease."
    },
    {
      name: "Priya Sharma",
      position: "Client",
      image: "/placeholder.svg",
      stars: 5,
      text: "During my divorce proceedings, the compassionate approach from Law Suvidha made a difficult time much easier. Their family law team was supportive and professional."
    },
    {
      name: "Amit Singh",
      position: "Client",
      image: "/placeholder.svg",
      stars: 4,
      text: "The criminal defense representation I received was outstanding. Their strategic approach and attention to detail resulted in a favorable outcome for my case."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Client Testimonials</h2>
          <p className="paragraph">Hear from our clients about their experiences working with Law Suvidha.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
