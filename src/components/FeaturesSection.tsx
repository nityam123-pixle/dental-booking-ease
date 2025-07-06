import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Easy Booking",
    description: "Schedule your appointment in just a few clicks with our streamlined booking system.",
    icon: "📅"
  },
  {
    title: "Trusted Clinics",
    description: "Connect with verified dental professionals and clinics in your area.",
    icon: "🏥"
  },
  {
    title: "Flexible Scheduling",
    description: "Choose from available time slots that fit your busy schedule.",
    icon: "⏰"
  },
  {
    title: "Instant Confirmation",
    description: "Get immediate confirmation and reminders for your appointments.",
    icon: "✓"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make dental care accessible and convenient with our modern booking platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-primary/10 hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}