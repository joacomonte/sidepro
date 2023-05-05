/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import style from './LoginComponent.module.scss'
import { motion } from 'framer-motion';

// const variants = {
//     hidden: {
//       x: "15%",
//       opacity: 0,
//     },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.7,
//       },
//     },
//   };

export default function LoginComponent() {
    const [step, setStep] = useState(1);
    return (

        <div className={style.loginContainer}>
            <div className={style.stepsContainer}>
                <Step step={1} currentStep={step}/>
                <Step step={2} currentStep={step}/>
                <Step step={3} currentStep={step}/>
                <Step step={4} currentStep={step}/>
            </div>
            {step === 1 &&
                <motion.div
                    className={style.loginContent}
                    initial={false}
                    animate={{ x: [70,-10,0], opacity : [0,0.3,1]}}
                    transition={{
                        type:"keyframes",
                        duration: 0.5,
                    }}
                >
                    <div style={{display: 'flex', flexDirection: 'column', gap:"3px"}}>
                        <label>Apellido</label>
                        <input type="text" />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', gap:"3px"}}>
                        <label>Nombre</label>
                        <input type="text" />
                    </div>
            </motion.div>
            }

            {step === 2 &&
                <motion.div
                    className={style.loginContent}
                    animate={{ x: [70,-5,0], opacity : [0,0.3,1]}}
                    transition={{
                        type:"keyframes",
                        duration: 0.5,
                    }}
                >
                    <div style={{display: 'flex', flexDirection: 'column', gap:"3px"}}>
                        <label>Apellido</label>
                        <input type="text" />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', gap:"3px"}}>
                        <label>Nombre</label>
                        <input type="text" />
                    </div>
                </motion.div>
            }
            {step === 3 &&
                <motion.div
                    className={style.loginContent}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: [70,-5,0], opacity : [0,0.3,1]}}
                    transition={{
                        type:"keyframes",
                        duration: 0.5,
                    }}

                >
                    <div style={{display: 'flex', flexDirection: 'column', gap:"3px"}}>
                        <label>Apellido</label>
                        <input type="text" />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', gap:"3px"}}>
                        <label>Nombre</label>
                        <input type="text" />
                    </div>
                </motion.div>
            }
            {step === 4 &&
                <motion.div
                    className={style.loginContent}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: [70,-5,0], opacity : [0,0.3,1]}}
                    transition={{
                        type:"keyframes",
                        duration: 0.5,
                    }}
                >
                    <div style={{display: 'flex', flexDirection: 'column', gap:"3px"}}>
                        <label>Apellido</label>
                        <input type="text" />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', gap:"3px"}}>
                        <label>Nombre</label>
                        <input type="text" />
                    </div>
                </motion.div>
            }

            <div className={style.loginFooter}>
                <button 
                    className={style.backButton}
                    onClick={() => setStep(step < 2 ? step : step -1)}
                >Back
                </button>
                { step < 4 ?
                    <button 
                    className={style.nextButton}
                    onClick={() => setStep(step > 4 ? step : step +1)}>
                        Next
                    </button>
                :
                    <button 
                    className={style.submitButton}
                    onClick={() => setStep(step > 4 ? step : step +1)}>
                        Submit
                    </button>
                }
            </div>
        </div>
    )
}

function Step({step, currentStep}: { step: number, currentStep: number }): JSX.Element {
    const status =
    currentStep === step 
    ? "active"
    : currentStep < step
    ? "inactive"
    : "complete";

    return(
    <motion.div
        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm`}
        initial={false}
        animate={status}
        variants={{
            inactive: {
                backgroundColor: 'white',
                borderColor: '#E2E8F0',
                color: '#E2E8F0'
            },
            active: {
                backgroundColor: 'white',
                borderColor: '#3B82F6',
                color: '#3B82F6'
            },
            complete: {
                backgroundColor: '#3B82F6',
                borderColor: '#3B82F6',
                color: '#3B82F6',
            }
        }}
        transition={{duration: 0.5}}
    >
        <div className="flex items-center justify-center">
            {status === "complete" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6">
                    <motion.path 
                        initial={{pathLength: 0}}
                        animate={{pathLength: 1}}
                        transition={{
                            delay:0.1, 
                            type:"tween", 
                            ease:"easeIn", 
                            duration: 0.4
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
    )
}


