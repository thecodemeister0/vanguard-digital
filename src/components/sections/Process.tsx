"use client";

const steps = [
  {
    id: "01",
    letter: "A",
    title: "We analyze your business",
    subtitle: "and competitive environment",
  },
  {
    id: "02",
    letter: "P",
    title: "We plan the strategy",
    subtitle: "and tactics of creating a website",
  },
  {
    id: "03",
    letter: "U",
    title: "We develop USP",
    subtitle: "and positioning, we write unique texts",
  },
  {
    id: "04",
    letter: "C",
    title: "We create the structure",
    subtitle: "and design of the website according to the text support",
  },
  {
    id: "05",
    letter: "P",
    title: "We program, fill",
    subtitle: "and test the website",
  },
  {
    id: "06",
    letter: "S",
    title: "We carry out",
    subtitle: "SEO-optimization of the website",
  },
];

export default function Process() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container">
        <div className="space-y-4 mb-16">
          <span className="text-primary/60 font-mono">03</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            HOW IT WORKS?!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <div className="aspect-square border rounded-lg p-8 transition-colors hover:bg-muted/50">
                <div className="relative h-full">
                  {/* Stylized Letter */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-[12rem] font-bold tracking-tighter">
                      {step.letter}
                    </span>
                  </div>

                  <div className="relative h-full flex flex-col justify-end">
                    <h3 className="text-xl font-medium">{step.title}</h3>
                    <p className="text-muted-foreground mt-2">
                      {step.subtitle}
                    </p>
                    <span className="absolute bottom-0 right-0 text-primary/60 font-mono text-sm">
                      {step.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-primary max-w-2xl mx-auto">
          <p className="text-lg">
            This is an approximate algorithm for creating a website, for each
            project it can vary. But the priority is the same for everyone – to
            ensure high speeds of your website.
          </p>
        </div>
      </div>
    </section>
  );
}
