import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const HeaderLoader = () => {
  const [Comp, setComp] = useState(<></>);

  useLayoutEffect(() => {
    const element = document.getElementById("loader");
    if (element) {
      setComp(
        createPortal(
          <span className="animate-ping inline-flex rounded-full bg-sky-400 opacity-75 w-4 h-4"></span>,
          element
        )
      );
    }
  }, []);

  return <>{Comp}</>;
};

export default HeaderLoader;
