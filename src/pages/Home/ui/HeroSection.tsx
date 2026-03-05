import { Button } from "@/src/shared/ui/Button";

export const HeroSection = () => {
  return (
    <section className="relative container mx-auto pb-100">
      <div className="relative z-10 flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center">
          <h1
            className="
            text-center text-[80px] tracking-[2px] font-medium leading-20
            bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)]
            bg-clip-text
            text-transparent"
          >
            THE BEST WEBSITE EVER
          </h1>
          <h1 className="text-center text-[80px] tracking-[2px] font-medium leading-20">
            Scalable.
          </h1>
          <p className="text-lg text-center max-w-180">
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
      <div className="absolute -z-10 inset-0 top-30">
        <img className="mx-auto" src="/images/hero-bg.png" alt="hero-img" />
      </div>
    </section>
  );
};
