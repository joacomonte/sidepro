/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import style from "./NavbarMobile.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import useIsMobileHook from "~/utils/useIsMobileHook";

interface Tab {
  id: string;
  label: string;
  link: string;
}

const itemVariants = {
  closed: {
    x: -200,
    transition: {
      duration: 0.1,
    },
  },
  open: { x: 0 },
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

export default function NavbarMobile() {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const isMobile = useIsMobileHook();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {!isMobile ? (
        <div className={style.container}>
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
      ) : (
        <div className={style.main}>
          <AnimatePresence>
            {toggleSideBar && (
              <motion.aside
                className={style.aside}
                initial={{
                  x: -200,
                  height: "auto",
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20,
                }}
                animate={{
                  x: 0,
                  width: 220,
                  height: "auto",
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20,
                }}
                exit={{
                  width: 0,
                  x: -100,
                  transition: { delay: 0.25, duration: 0.2 },
                }}
              >
                <button
                  style={{ marginLeft: 10, fontSize: 20 }}
                  onClick={() => setToggleSideBar(!toggleSideBar)}
                >
                  X
                </button>

                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}
                >
                  {tabs.map((tab) => (
                    <motion.div key={tab.id} variants={itemVariants}>
                      <button
                        className={style.buttonSideBar}
                        key={tab.id}
                        onClick={() => {
                          handleTabClick(tab);
                          setToggleSideBar(false);
                        }}
                      >
                        {tab.label}
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      )}
      <button
        className={style.openMenuButton}
        style={{ fontSize: 30, color: "white", padding: 20 }}
        onClick={() => setToggleSideBar(!toggleSideBar)}
      >
        Open Menu
      </button>
    </>
  );
}
