import Hero from "../layouts/app/hero";
import SlideOne from "../layouts/app/slideone";
import SlideTwo from "../layouts/app/slidetwo";
import SlideThree from "../layouts/app/slidethree";
import SlideThreea from "../layouts/app/slidethreea";
import SlideFour from "../layouts/app/slidefour";
import SlideFive from "../layouts/app/slidefive";

function App() {
  return (
    <div className="container m-auto flex flex-col gap-y-20">
      <Hero />
      <SlideOne />
      <SlideThree />
      <SlideTwo />
      
      <SlideFour />
    </div>
  );
}

export default App;
