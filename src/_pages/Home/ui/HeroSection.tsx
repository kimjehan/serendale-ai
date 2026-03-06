import { Button } from "@/src/shared/ui/Button";

export const HeroSection = () => {
  return (
    <section className="relative container mx-auto pb-100 not-md:pb-55">
      <div className="relative z-10 flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center">
          <h1
            className="
            text-center lg:text-[80px] md:text-6xl sm:text-5xl text-2xl tracking-[2px] font-medium sm:leading-20
            bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)]
            bg-clip-text
            text-transparent"
          >
            THE BEST WEBSITE EVER
          </h1>
          <h1 className="text-center lg:text-[80px] md:text-6xl sm:text-5xl text-2xl tracking-[2px] font-medium sm:leading-20 leading-12">
            Scalable.
          </h1>
          <p className="lg:text-lg md:text-base sm:text-base text-sm text-center max-w-180">
            Our technology performing fast blockchain (120K TPS) and it has
            guaranteed AI-based data security. Proof of Stake, its consensus
            algorithm enables unlimited speeds.
          </p>
        </div>
        <div className="flex gap-3">
          <Button border="gradient">Get started</Button>
          <Button>Read more</Button>
        </div>
      </div>
      <div className="absolute -z-10 inset-0 not-md:top-75 not-xl:top-80 top-50">
        <img className="mx-auto" src="/images/hero-bg.png" alt="hero-img" />
      </div>
    </section>
  );
};
