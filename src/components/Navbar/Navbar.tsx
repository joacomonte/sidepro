/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import style from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Navbar() {
  const { data: sessionData } = useSession();
  const router = useRouter();

  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0]) {
        const { width } = entries[0].contentRect;
        setViewportWidth(width);
      }
    });
  
    resizeObserver.observe(document.documentElement);
  
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  
  useEffect(() => {
    setIsMobile(viewportWidth < 1000);
  }, [viewportWidth]);

  interface Tab {
    id: string;
    label: string;
    link: string;
  }

  const tabs: Tab[] = [
    { id: "Home", label: "Home", link: "/" },
    { id: "About", label: "About", link: "/about" },
    { id: "Photography", label: "Photograpy", link: "/photography" },
    { id: "Projects", label: "Projects", link: "/projects" },
    {
      id: "Login",
      label: sessionData ? "Logout" : "Login",
      link: "/create-account",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? "");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab.id);
    if (tab.label === "Logout") {
      void signOut();
    } else {
      setTimeout(() => {
        void router.push(tab.link);
      }, 100);
    }
  };

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.link === router.pathname);
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [router.pathname, tabs]);

  return (
    <div className={style.container}>
      <div>
        {isMobile ? <p>is mobile</p> : <p>is desktop</p>}
      </div>

      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            handleTabClick(tab);
          }}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-4 py-1 `}
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
  );
}
