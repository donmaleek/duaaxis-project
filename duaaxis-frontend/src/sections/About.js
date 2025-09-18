import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">The Future of Solar Energy</p>
            <p className="mt-4 text-lg text-gray-600">
              DuaAxis was founded with a simple mission: to maximize solar energy production through innovative technology. Our team of engineers and renewable energy experts have developed a revolutionary dual-axis solar tracking system that significantly outperforms traditional fixed installations.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              What sets us apart is our integration of IoT technology with precision mechanics. Our systems continuously monitor environmental conditions and adjust panel positioning in real-time to capture the maximum amount of solar energy throughout the day.
            </p>
            <div className="mt-6">
              <a href="#contact" className="text-base font-medium text-primary-600 hover:text-primary-500">
                Learn more about our technology <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img className="rounded-lg shadow-xl" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%23f8fafc' width='600' height='400'/%3E%3Ccircle fill='%23facc15' cx='150' cy='120' r='60'/%3E%3Cpath fill='%230ea5e9' fill-opacity='0.2' d='M300,200 L550,350 L550,50 Z'/%3E%3Crect fill='%23e2e8f0' x='100' y='250' width='400' height='20' rx='10'/%3E%3Crect fill='%23e2e8f0' x='200' y='220' width='20' height='100' rx='10'/%3E%3Crect fill='%23e2e8f0' x='380' y='220' width='20' height='100' rx='10'/%3E%3Crect fill='%23cbd5e1' x='120' y='200' width='360' height='150' rx='15'/%3E%3Crect fill='%230ea5e9' x='150' y='230' width='80' height='90' rx='5'/%3E%3Crect fill='%230ea5e9' x='260' y='230' width='80' height='90' rx='5'/%3E%3Crect fill='%230ea5e9' x='370' y='230' width='80' height='90' rx='5'/%3E%3C/svg%3E" alt="DuaAxis team working on solar technology" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;