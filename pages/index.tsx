import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthStatus from "../components/AuthStatus";

export default function LandingPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatch
  if (!isClient) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="landing-header">
        <div className="header-container">
          <div className="header-content flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" aria-label="MEALS4V Home">
                <h1 className="header-logo">MEALS4V</h1>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="header-nav hidden md:flex space-x-6">
              <Link href="#features" className="header-nav-link">
                Features
              </Link>
              <Link href="#how-it-works" className="header-nav-link">
                How It Works
              </Link>
              <Link href="#pricing" className="header-nav-link">
                Pricing
              </Link>
              <Link href="#contact" className="header-nav-link">
                Contact
              </Link>
            </nav>

            {/* Auth & CTA */}
            <div className="header-actions flex items-center space-x-4">
              <div className="hidden md:block">
                <AuthStatus />
              </div>
              <Link href="/register" className="auth-btn auth-btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section py-16 md:py-24">
          <div className="hero-container max-w-7xl mx-auto px-4">
            <div className="hero-content flex flex-col md:flex-row items-center gap-10">
              <div className="hero-text text-center md:text-left max-w-lg">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Personalized meal plans for your lifestyle
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  MEALS4V creates personalized meal plans based on your food preferences, budget, and schedule.
                  Reach your diet and nutritional goals with our calorie-smart meal planning.
                </p>
                <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                  <Link href="/get-started" className="btn btn-primary btn-large px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                    Start Your Journey
                  </Link>
                  <Link href="#how-it-works" className="btn btn-secondary btn-large px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50 transition">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="hero-image">
                <Image
                  src="/images/z212.jpg"
                  alt="Healthy meal bowl"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section py-16 bg-gray-50">
          <div className="features-container max-w-6xl mx-auto px-4">
            <div className="features-header text-center mb-12">
              <h3 className="features-title text-3xl font-bold mb-3">Why Choose MEALS4V?</h3>
              <p className="features-subtitle text-gray-600 max-w-2xl mx-auto">
                Our platform combines advanced nutrition science with personalized preferences to create the perfect meal plan for you.
              </p>
            </div>

            <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-card bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="feature-icon text-4xl mb-4">🍽️</div>
                <h4 className="feature-title text-xl font-semibold mb-2">Food Preferences</h4>
                <p className="feature-description text-gray-600">
                  Tell us what you love and what you avoid. We&apos;ll create meals that match your taste perfectly.
                </p>
              </div>

              <div className="feature-card bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="feature-icon text-4xl mb-4">💰</div>
                <h4 className="feature-title text-xl font-semibold mb-2">Budget Friendly</h4>
                <p className="feature-description text-gray-600">
                  Set your budget and we&apos;ll suggest meals that fit your financial goals without compromising nutrition.
                </p>
              </div>

              <div className="feature-card bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="feature-icon text-4xl mb-4">⏰</div>
                <h4 className="feature-title text-xl font-semibold mb-2">Flexible Schedule</h4>
                <p className="feature-description text-gray-600">
                  Whether you have 15 minutes or 2 hours, we&apos;ll adapt meal plans to your busy lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="how-it-works-section py-16">
          <div className="how-it-works-container max-w-6xl mx-auto px-4">
            <div className="how-it-works-header text-center mb-12">
              <h3 className="how-it-works-title text-3xl font-bold mb-3">How It Works</h3>
              <p className="how-it-works-subtitle text-gray-600">
                Get your personalized meal plan in just 3 simple steps
              </p>
            </div>

            <div className="how-it-works-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="step-card bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="step-number w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-full font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="step-title text-xl font-semibold mb-2">Tell Us About You</h4>
                <p className="step-description text-gray-600">
                  Share your dietary preferences, allergies, goals, and lifestyle to help us understand your needs.
                </p>
              </div>

              <div className="step-card bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="step-number w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-full font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="step-title text-xl font-semibold mb-2">Get Your Plan</h4>
                <p className="step-description text-gray-600">
                  Our AI creates a personalized meal plan with recipes, shopping lists, and nutritional information.
                </p>
              </div>

              <div className="step-card bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="step-number w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-full font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="step-title text-xl font-semibold mb-2">Cook & Enjoy</h4>
                <p className="step-description text-gray-600">
                  Follow our easy-to-follow recipes and enjoy delicious, healthy meals that fit your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section py-16 bg-gray-50">
          <div className="testimonials-container max-w-6xl mx-auto px-4">
            <div className="testimonials-header text-center mb-12">
              <h3 className="testimonials-title text-3xl font-bold">What Our Users Say</h3>
            </div>

            <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  initial: "S",
                  name: "Sarah M.",
                  detail: "Lost 15 lbs in 3 months",
                  quote: "MEALS4V completely changed my relationship with food. The personalized plans made healthy eating enjoyable and sustainable.",
                },
                {
                  initial: "M",
                  name: "Mike R.",
                  detail: "Busy professional",
                  quote: "As someone with a hectic schedule, MEALS4V's quick meal options have been a lifesaver. No more unhealthy takeout!",
                },
                {
                  initial: "L",
                  name: "Lisa K.",
                  detail: "Vegetarian",
                  quote: "Finally, a meal planning service that understands vegetarian nutrition! The variety of recipes is amazing.",
                },
              ].map((t, i) => (
                <div key={i} className="testimonial-card bg-white p-6 rounded-lg shadow-sm">
                  <div className="testimonial-header flex items-center mb-4">
                    <div className="testimonial-avatar w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold mr-3">
                      {t.initial}
                    </div>
                    <div className="testimonial-info">
                      <h5 className="font-semibold">{t.name}</h5>
                      <p className="text-sm text-gray-600">{t.detail}</p>
                    </div>
                  </div>
                  <p className="testimonial-quote text-gray-700 italic">"{t.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section py-16 bg-green-600 text-white text-center">
          <div className="cta-container max-w-3xl mx-auto px-4">
            <h3 className="cta-title text-3xl font-bold mb-4">Ready to Transform Your Eating Habits?</h3>
            <p className="cta-description text-lg mb-6 opacity-90">
              Join thousands of users who have already achieved their health and nutrition goals with MEALS4V.
            </p>
            <Link
              href="/get-started"
              className="cta-button px-8 py-3 bg-white text-green-600 font-bold rounded-md hover:bg-gray-100 transition inline-block"
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="landing-footer bg-gray-900 text-white pt-12 pb-6">
        <div className="footer-container max-w-6xl mx-auto px-4">
          <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="footer-brand">
              <h4 className="text-xl font-bold mb-2">MEALS4V</h4>
              <p className="text-gray-400">
                Personalized meal planning for a healthier, happier you.
              </p>
            </div>

            <div className="footer-section">
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/diet-form" className="hover:text-white">Diet Form</Link></li>
                <li><Link href="/admin" className="hover:text-white">Admin</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="https://twitter.com/meals4v" className="hover:text-white">Twitter</Link></li>
                <li><Link href="https://facebook.com/meals4v" className="hover:text-white">Facebook</Link></li>
                <li><Link href="https://instagram.com/meals4v" className="hover:text-white">Instagram</Link></li>
                <li><Link href="mailto:hello@meals4v.com" className="hover:text-white">Email</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; 2025 MEALS4V. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Force server-side rendering to avoid hydration issues with AuthStatus
export const getServerSideProps = () => {
  return {
    props: {},
  };
};
