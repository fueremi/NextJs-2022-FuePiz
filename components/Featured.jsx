import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const images = [
    "/images/pizza.png",
    "/images/pizza.png",
    "/images/pizza.png",
  ];

  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/images/arrowl.png"
          alt="arrow-left"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image
              src={image}
              alt={`featured-${index}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/images/arrowr.png"
          alt="arrow-right"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
