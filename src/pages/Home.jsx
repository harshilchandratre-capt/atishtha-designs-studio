import React from "react";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />

      {/* Hero / CTA Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-100 to-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Transforming Spaces with <br /> Elegance & Aesthetics
        </h1>
        <p className="text-gray-600 mt-6 max-w-xl">
          Atishtha Designs brings life to interiors with modern aesthetics, timeless beauty, and thoughtful design.
        </p>
        <div className="mt-8">
          <Button variant="primary">Explore Projects</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-6">
        <SectionTitle title="About Us" subtitle="Who we are & what we do" />
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          We are passionate interior designers creating unique and aesthetic spaces. 
          From residential to commercial projects, our team blends functionality with elegance.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <SectionTitle title="Our Services" subtitle="What we offer" />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <h3 className="text-xl font-semibold">Residential Design</h3>
            <p className="text-gray-600 mt-3">
              Elegant and cozy home interiors that reflect your personality.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <h3 className="text-xl font-semibold">Commercial Design</h3>
            <p className="text-gray-600 mt-3">
              Functional and aesthetic spaces for offices, cafes, and more.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <h3 className="text-xl font-semibold">Custom Solutions</h3>
            <p className="text-gray-600 mt-3">
              Tailored designs crafted uniquely for your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
        <SectionTitle title="Our Projects" subtitle="Some of our recent work" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-200 h-64 rounded-xl"></div>
          <div className="bg-gray-200 h-64 rounded-xl"></div>
          <div className="bg-gray-200 h-64 rounded-xl"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <SectionTitle title="What Clients Say" subtitle="Testimonials" />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <div className="p-6 bg-white shadow rounded-xl">
            <p className="text-gray-600">"Atishtha transformed my living room into a masterpiece. Highly recommended!"</p>
            <h4 className="mt-4 font-semibold">— Client A</h4>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <p className="text-gray-600">"Professional team with a great eye for detail. Loved the work!"</p>
            <h4 className="mt-4 font-semibold">— Client B</h4>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 max-w-5xl mx-auto px-6 text-center">
        <SectionTitle title="Get in Touch" subtitle="Let's work together" />
        <form className="grid gap-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="border p-3 rounded-lg" />
          <input type="email" placeholder="Your Email" className="border p-3 rounded-lg" />
          <textarea placeholder="Your Message" rows="4" className="border p-3 rounded-lg"></textarea>
          <Button type="submit" variant="primary">Send Message</Button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
