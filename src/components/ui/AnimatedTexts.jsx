import ScrollRowTexts from "./ScrollRowTexts";
import { scrollTexts1, scrollTexts2 } from "../../data/scrollTexts";

const AnimatedTexts = () => {
  return (
    <div className="relative">
      <ScrollRowTexts
        texts={scrollTexts1}
        animation="animate-horizontal-scroll"
      />
      <ScrollRowTexts
        texts={scrollTexts2}
        animation="animate-horizontal-scroll-2"
      />
    </div>
  );
};

export default AnimatedTexts;
