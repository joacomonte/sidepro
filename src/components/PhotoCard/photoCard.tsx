import { motion } from "framer-motion";
import style from "./photoCard.module.scss";
import Image from "next/image";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 0.7 },
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.7 },
  },
};

function PhotoCard(Props: {
  imgSrc: string;
  title: string;
  description: string;
}): JSX.Element {
  return (
    <motion.div
      className={style.cardContainer}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div
        variants={imageAnimate}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          className={style.imgOnCard}
          src={`${Props.imgSrc}.jpg`}
          alt="photo"
          width={400}
          height={600}
          placeholder="blur"
          blurDataURL={`${Props.imgSrc}-blur.jpg`}
        ></Image>
      </motion.div>

      <motion.h1 variants={textAnimate}>{Props.title}</motion.h1>
      <motion.p variants={textAnimate}>{Props.description}</motion.p>
    </motion.div>
  );
}

export default PhotoCard;
