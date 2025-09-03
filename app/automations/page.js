import AutoHome from "@/components/AutoHome";
import AutoTimeline from "@/components/AutoTime";
import AutoFea from "@/components/AutoFea";
import FaQs from "@/components/FaQs";
import Contact from "@/components/Contact";
import Comparison from "@/components/Comparison";
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
