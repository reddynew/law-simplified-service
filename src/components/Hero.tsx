
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="heading-xl mb-6">
              Professional Legal Solutions for Every Challenge
            </h1>
            <p className="paragraph mb-8">
              Law Suvidha provides expert legal services tailored to your needs. Our team of experienced attorneys is committed to delivering justice and peace of mind through comprehensive legal representation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">
                Get Free Consultation
              </Button>
              <Button variant="outline" className="btn-secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative animate-scale-in">
              <div className="w-full h-[500px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent text-white">
                  <div className="font-serif text-2xl font-semibold mb-2">Trusted Legal Partner</div>
                  <p className="text-white/80">With over 15 years of experience in various practice areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
