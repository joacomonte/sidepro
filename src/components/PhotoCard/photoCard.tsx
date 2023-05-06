/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { motion } from "framer-motion";
import style from "./photoCard.module.scss";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },

};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
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
      <motion.img
        variants={imageAnimate}
        className={style.imgOnCard}
        src={Props.imgSrc}
        alt="photo"
      />
      <motion.h1
      variants={textAnimate}>{Props.title}</motion.h1>
      <motion.p variants={textAnimate}>{Props.description}</motion.p>
    </motion.div>
  );
}

export default PhotoCard;
