import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.scss";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "~/components/layout/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  const variantsConfig = {
    initialState: { opacity: 0 },
    animateState: { opacity: 1 },
    exitState: {},
  };

  return (
    <AnimatePresence>
      <SessionProvider session={session}>
        <Layout>
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.7 }}
            className="basePageSize"
            variants={variantsConfig}
          >
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </SessionProvider>
    </AnimatePresence>
  );
};

export default api.withTRPC(MyApp);
