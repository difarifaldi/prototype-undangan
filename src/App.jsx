import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

import Main from "./components/Main";
import Invitation from "./pages/Invitation";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="max-w-md mx-auto relative">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <Motion.div key="main" initial={{ rotateY: 0 }} exit={{ rotateY: 90 }} transition={{ duration: 0.6 }}>
            <Main onOpen={() => setIsOpened(true)} />
          </Motion.div>
        ) : (
          <Motion.div key="invitation" initial={{ rotateY: 90 }} animate={{ rotateY: 0 }} exit={{ rotateY: -90 }} transition={{ duration: 0.6 }}>
            <Invitation />
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
