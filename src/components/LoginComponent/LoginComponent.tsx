/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import style from "./LoginComponent.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import StepAnimation from "./StepsAnimation";

export default function LoginComponent() {
  const [step, setStep] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function handleBackClick() {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 500);
      setStep(step < 2 ? step : step - 1);
    }
  }

  function handleNextClick() {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 500);
      setStep(step > 4 ? step : step + 1);
    }
  }

  const motionProps = {
    className: style.stepContent,
    animate: {
      x: [500, -20, 5, 0],
      opacity: [0, 0.5, 1, 1],
    },
    exit: {
      x: [0, 8, 10, -500],
      opacity: [1, 1, 1, 0.8],
    },
    transition: {
      type: "keyframes",
      duration: 0.4,
    },
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.stepsContainer}>
        <StepAnimation step={1} currentStep={step} />
        <StepAnimation step={2} currentStep={step} />
        <StepAnimation step={3} currentStep={step} />
        <StepAnimation step={4} currentStep={step} />
      </div>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div {...motionProps} key="step1">
            <div className={style.stepInputsContainer}>
              <label>Apellido</label>
              <input type="text" />
            </div>

            <div className={style.stepInputsContainer}>
              <label>Nombre</label>
              <input type="text" />
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div {...motionProps} key="step2">
            <div className={style.stepInputsContainer}>
              <label>Mail</label>
              <input type="text" />
            </div>

            <div className={style.stepInputsContainer}>
              <label>Domicilio</label>
              <input type="text" />
            </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div {...motionProps} key="step3">
            <div className={style.stepInputsContainer}>
              <label>Otro dato</label>
              <input type="text" />
            </div>

            <div className={style.stepInputsContainer}>
              <label>Otro dato mas</label>
              <input type="text" />
            </div>
          </motion.div>
        )}
        {step === 4 && (
          <motion.div {...motionProps} key="step4">
            <div className={style.stepInputsContainer}>
              <label>Nombre de tu perro</label>
              <input type="text" />
            </div>

            <div className={style.stepInputsContainer}>
              <label>Team verano?</label>
              <input type="text" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={style.loginFooter}>
        <button className={style.backButton} onClick={() => handleBackClick()}>
          Back
        </button>
        {step < 4 ? (
          <button
            className={style.nextButton}
            onClick={() => {
              handleNextClick();
            }}
          >
            Next
          </button>
        ) : (
          <button
            className={style.submitButton}
            onClick={() => console.log("submit")}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}


