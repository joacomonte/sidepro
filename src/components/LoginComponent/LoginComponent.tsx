/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import style from "./LoginComponent.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
// import StepAnimation from "./StepsAnimation";

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
        <Step step={1} currentStep={step} />
        <Step step={2} currentStep={step} />
        <Step step={3} currentStep={step} />
        <Step step={4} currentStep={step} />
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
        {step === 5 && (
          <motion.div {...motionProps} key="step5">
            <div className="stepContentSuccess">
              <motion.div
                animate={{
                  scale: [0, 1.2, 1, 1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                }}
                className="div-under"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [0, 0, 1, 1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                }}
                className="div-with-check"
              >
                <motion.svg
                  className="check"
                  animate={{
                    strokeDashoffset: [32, 32, 32, 0, 0, 0],
                  }}
                  transition={{
                    duration: 2,
                  }}
                  strokeWidth="2"
                  strokeLinecap="round"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 7.21739L5.84848 12L17 1" stroke="white" />
                </motion.svg>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1, 1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                }}
                style={{
                  zIndex: 20,
                  paddingTop: 150,
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#00C486",
                }}
              >
                Thank you! :)
                
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={style.loginFooter}>
        {step === 5 ? (
          <Link className={style.homeButton} href="/">
            Back to Home
          </Link>
        ) : (
          <>
            <button
              className={style.backButton}
              onClick={() => handleBackClick()}
            >
              Back
            </button>
            {step < 4 && (
              <button
                className={style.nextButton}
                onClick={() => handleNextClick()}
              >
                Next
              </button>
            )}
          </>
        )}
        {step === 4 && (
          <button
            className={style.submitButton}
            onClick={() => handleNextClick()}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

function Step({
  step,
  currentStep,
}: {
  step: number;
  currentStep: number;
}): JSX.Element {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <motion.div
      className={style.stepCircle}
      initial={false}
      animate={status}
      variants={{
        inactive: {
          backgroundColor: "white",
          borderColor: "#E2E8F0",
          color: "#E2E8F0",
        },
        active: {
          backgroundColor: "#fff",
          borderColor: "#3B82F6",
          color: "#3B82F6",
        },
        complete: {
          backgroundColor: "#3B82F6",
          borderColor: "#3B82F6",
          color: "#3B82F6",
        },
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center">
        {status === "complete" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="white"
            className="h-6 w-6"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 0.1,
                type: "tween",
                ease: "easeIn",
                duration: 0.4,
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ) : (
          <span>{step}</span>
        )}
      </div>
    </motion.div>
  );
}
