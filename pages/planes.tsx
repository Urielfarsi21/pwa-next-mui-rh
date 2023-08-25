import Plans from "@/src/planes/Plans";
import { Plan } from "@/src/planes/types/Plan";

// api plans
// https://mocki.io/v1/819ad59a-d91e-45dd-9820-30f2939b3e34
export const plans: Plan[] = [
  {
    title: "Website",
    description: "Crea un catálogo profesional y atractivo que sorprenda.",
    price: 2990,
    hrefViewMore: "#",
    hrefSelectPlan: "/comprar/0",
  },
  {
    title: "Business",
    description:
      "Comienza a vender al instante con los elementos esenciales del eCommerce.",
    price: 5990,
    hrefViewMore: "#",
    hrefSelectPlan: "/comprar/1",
  },
  {
    title: "Advanced Store",
    description:
      "Haz crecer tu negocio con potentes herramientas de marketing.",
    price: 8990,
    hrefViewMore: "#",
    hrefSelectPlan: "/comprar/2",
  },
];

const planes = () => {
  return <Plans plans={plans} />;
};

export default planes;
