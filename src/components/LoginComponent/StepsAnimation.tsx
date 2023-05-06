// import { motion } from "framer-motion";

// export default function Step({
//     step,
//     currentStep,
//   }: {
//     step: number;
//     currentStep: number;
//   }): JSX.Element {
//     const status =
//       currentStep === step
//         ? "active"
//         : currentStep < step
//         ? "inactive"
//         : "complete";
  
//     return (
//       <motion.div
//         className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm`}
//         initial={false}
//         animate={status}
//         variants={{
//           inactive: {
//             backgroundColor: "white",
//             borderColor: "#E2E8F0",
//             color: "#E2E8F0",
//           },
//           active: {
//             backgroundColor: "white",
//             borderColor: "#3B82F6",
//             color: "#3B82F6",
//           },
//           complete: {
//             backgroundColor: "#3B82F6",
//             borderColor: "#3B82F6",
//             color: "#3B82F6",
//           },
//         }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex items-center justify-center">
//           {status === "complete" ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={3}
//               stroke="white"
//               className="h-6 w-6"
//             >
//               <motion.path
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{
//                   delay: 0.1,
//                   type: "tween",
//                   ease: "easeIn",
//                   duration: 0.4,
//                 }}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4.5 12.75l6 6 9-13.5"
//               />
//             </svg>
//           ) : (
//             <span>{step}</span>
//           )}
//         </div>
//       </motion.div>
//     );
//   }