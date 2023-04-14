import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ButtonToTop.styles";
import { useEffect, useState } from "react";

const ButtonToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const goToTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 30) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      icon={faCircleChevronUp}
      onClick={goToTop}
      showButton={showButton}
    />
  );
};

export default ButtonToTop;
