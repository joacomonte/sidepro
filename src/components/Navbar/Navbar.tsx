/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import style from './Navbar.module.scss'
import { motion } from 'framer-motion';

export default function Navbar() {
    
    interface Tab {
    id: string;
    label: string;
    }
    
    const tabs: Tab[] = [
        { id: "Home", label: "Home" }, 
        { id: "About", label: "About" },
        { id: "Contact", label: "Contact" },
        { id: "Projects", label: "Projects" },
        { id: "Login", label: "Login" },
    ];
    
    const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? '');

    return (
        <div className={style.container}>
            {tabs. map ( (tab) => (
                <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "" : "hover:text-white/60"
                } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
                >
                {activeTab === tab.id && (
                    <motion.span
                    layoutId="bubbles"
                    className="absolute inset-0 z-10 bg-white mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                )}
                {tab.label}
                </button>
            ))}
        </div>
    )
}



// {tab. label}
// </button> ))I
// </div>
// <div> </div>
// </div>

// export default function AnimatedTabs () {
// let [activeTab, setActiveTab] = useState (tabs [0].id) ; return (
// ‹div>
// <div className "flex space-x-1">
// {tabs. map ( (tab) =>
// <button
// key={tab.id} onClick=fU => setActiveTab(tab.id)1
// className={'§{
// activelab === tab.id ? "ba-blue-500" : "hover:opacity-50"
// } rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400
// focus-visible:outline'}