import AutoHome from "@/components/AutoHome";
import AutoTimeline from "@/components/AutoTime";
import AutoFea from "@/components/AutoFea";
import FaQs from "@/components/FaQs";
import Contact from "@/components/Contact";
import Comparison from "@/components/Comparison";

export const metadata = {
  title: "Automatizaciones con IA para crecer | IACall",
  description:
    "Automatiza tareas y flujos de varios pasos, integra tus sistemas y decide con analíticas en tiempo real. Consultoría, despliegue y mejora continua.",
};

export default function Automations() {
  return (
    <div>
      <AutoHome />
      <AutoTimeline />
      <AutoFea />
      <Comparison />
      <FaQs />
      <Contact />
    </div>
  );
}
