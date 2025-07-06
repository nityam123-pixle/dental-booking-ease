import { Button } from "@/components/ui/button"
import { BookingDialog } from "./BookingDialog"
import heroImage from "@/assets/dental-hero.jpg"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Smile,{" "}
            <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Our Priority
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Book your dental appointment with ease. Connect with trusted dental professionals 
            in your area and take the first step towards optimal oral health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingDialog>
              <Button 
                variant="hero" 
                size="xl"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Book Appointment
              </Button>
            </BookingDialog>
            
            <Button 
              variant="medical" 
              size="xl"
              className="w-full sm:w-auto min-w-[200px] backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <p className="text-sm">Happy Patients</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <p className="text-sm">Partner Clinics</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <p className="text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl" />
    </div>
  )
}