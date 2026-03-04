"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="compact"
      sizing="mediumLarge"
      background="aurora"
      cardStyle="gradient-radial"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Why Us", id: "metrics" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Now", href: "contact" }}
          brandName="Vargas Brothers"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="VARGAS BROTHERS"
          description="Professional automotive detailing that transforms your vehicle with precision, passion, and premium care. Experience excellence with every service."
          buttons={[
            { text: "Book Detailing", href: "contact" },
            { text: "Learn More", href: "services" }
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-polishing-car-with-orbital-applicator_1303-30576.jpg",              imageAlt: "Premium car detailing service"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/car-wash-detailing-station_1303-22299.jpg?_wi=1",              imageAlt: "Exterior detailing showcase"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-working-car-detailing-coating-car_1303-30598.jpg?_wi=1",              imageAlt: "Paint protection service"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Dedicated to Perfection"
          description="For over a decade, Vargas Brothers Detailing has been the trusted choice for vehicle owners who demand excellence. We combine advanced techniques, premium products, and meticulous attention to detail to restore and protect your vehicle's finish."
          tag="Our Story"
          imageSrc="http://img.b2bpic.net/free-photo/happy-woman-talking-her-car-mechanic-repair-shop_637285-8670.jpg"
          imageAlt="Vargas Brothers professional detailing team"
          buttons={[
            { text: "Explore Services", href: "services" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFour
          title="Our Premium Services"
          description="We offer comprehensive detailing solutions tailored to your vehicle's unique needs and condition."
          tag="Services"
          features={[
            {
              id: "exterior",              title: "Exterior Detailing",              author: "Professional Grade",              description: "Complete exterior restoration including paint correction, clay bar treatment, and protective coating application. We restore your vehicle's shine to showroom quality.",              tags: ["Paint", "Protection", "Shine"],
              imageSrc: "http://img.b2bpic.net/free-photo/car-wash-detailing-station_1303-22299.jpg?_wi=2",              imageAlt: "Exterior detailing service"
            },
            {
              id: "interior",              title: "Interior Detailing",              author: "Deep Cleaning",              description: "Thorough interior cleaning including leather conditioning, carpet and upholstery steam cleaning, and air freshening. Your cabin will feel brand new.",              tags: ["Cleaning", "Conditioning", "Comfort"],
              imageSrc: "http://img.b2bpic.net/free-photo/young-man-washing-car-carwash-station-outdoor_651396-2004.jpg",              imageAlt: "Interior detailing service"
            },
            {
              id: "protection",              title: "Ceramic Coating & Protection",              author: "Long-Term Defense",              description: "Advanced ceramic coating application provides years of protection against environmental contaminants, UV rays, and oxidation. Investment protection for your vehicle.",              tags: ["Coating", "Defense", "Durability"],
              imageSrc: "http://img.b2bpic.net/free-photo/man-working-car-detailing-coating-car_1303-30598.jpg?_wi=2",              imageAlt: "Ceramic coating protection service"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Why Choose Vargas Brothers"
          description="Our track record speaks for itself. We've earned the trust of thousands of vehicle owners across the region."
          tag="Our Impact"
          metrics={[
            {
              id: "1",              value: "12K+",              title: "Vehicles Detailed",              items: ["All vehicle types", "Expert care guaranteed", "Satisfaction focused"]
            },
            {
              id: "2",              value: "98%",              title: "Customer Satisfaction",              items: ["5-star rated", "Trusted locally", "Repeat clients"]
            },
            {
              id: "3",              value: "15+",              title: "Years Experience",              items: ["Industry leaders", "Certified technicians", "Premium standards"]
            },
            {
              id: "4",              value: "100%",              title: "Eco-Friendly",              items: ["Water recycling", "Green products", "Sustainable practices"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Clients Say"
          description="Real testimonials from satisfied customers who trust Vargas Brothers with their vehicles."
          tag="Testimonials"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          speed={40}
          testimonials={[
            {
              id: "1",              name: "Marcus Rodriguez",              handle: "BMW Owner",              testimonial: "Exceptional work! My BMW looks better than when I drove it off the lot. The attention to detail and professionalism is unmatched. Highly recommend!",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg?_wi=1",              imageAlt: "Marcus Rodriguez"
            },
            {
              id: "2",              name: "Jennifer Chen",              handle: "Tesla Owner",              testimonial: "Outstanding service and results. The team knows how to handle delicate finishes with care. My Tesla's paint protection is perfect.",              imageSrc: "http://img.b2bpic.net/free-photo/indoor-shot-attractive-caucasian-teenage-woman-with-long-dark-hair-sitting-desk-with-lots-textbooks_273609-1136.jpg?_wi=1",              imageAlt: "Jennifer Chen"
            },
            {
              id: "3",              name: "David Thompson",              handle: "Fleet Manager",              testimonial: "We use Vargas Brothers for all our company vehicles. Reliable, professional, and they always deliver exceptional results on time.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              imageAlt: "David Thompson"
            },
            {
              id: "4",              name: "Sarah Martinez",              handle: "Mercedes Owner",              testimonial: "Worth every penny! The ceramic coating has kept my car looking showroom fresh. Customer service is top-notch.",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg",              imageAlt: "Sarah Martinez"
            },
            {
              id: "5",              name: "James Wilson",              handle: "Audi Owner",              testimonial: "Best detailing service in the area. The team is professional, punctual, and delivers stunning results consistently.",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg?_wi=2",              imageAlt: "James Wilson"
            },
            {
              id: "6",              name: "Amanda Foster",              handle: "Honda Owner",              testimonial: "I've been a customer for 5 years. They truly care about your vehicle and it shows in their meticulous work.",              imageSrc: "http://img.b2bpic.net/free-photo/indoor-shot-attractive-caucasian-teenage-woman-with-long-dark-hair-sitting-desk-with-lots-textbooks_273609-1136.jpg?_wi=2",              imageAlt: "Amanda Foster"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Premium Vehicle Owners"
          description="We proudly service the finest vehicles from leading automotive brands."
          tag="Partners"
          textboxLayout="default"
          useInvertedBackground={false}
          names={["Ford", "Chevrolet", "BMW", "Tesla", "Mercedes-Benz", "Audi", "Honda"]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Ready to Restore Your Vehicle's Shine?"
          description="Schedule your detailing appointment today and experience the Vargas Brothers difference. We're committed to exceeding your expectations."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/man-polishing-car-with-orbital-applicator_1303-30574.jpg"
          imageAlt="Premium detailing results"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email to book"
          buttonText="Get Started"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Exterior Detailing", href: "services" },
                { label: "Interior Detailing", href: "services" },
                { label: "Ceramic Coating", href: "services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Testimonials", href: "testimonials" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Book Appointment", href: "contact" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Vargas Brothers Detailing. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
