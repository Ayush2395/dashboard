import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Graph from "./Graph";
import ItemsCard from "./ItemsCard";
import Summary from "./Summary";

export default function Dashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  const fadeIn = {
    hide: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    isInView ? control.start("visible") : control.start("hide");
  }, [control, isInView]);
  return (
    <>
      <section className="section">
        <div className="main">
          <motion.div ref={ref} className="row container m-auto mt-5">
            <motion.div
              variants={fadeIn}
              initial="hide"
              animate={control}
              className="col-lg-3 mb-3"
            >
              <ItemsCard
                text="Pending Order"
                value="202"
                icons="basket-shopping"
                color="secondary"
              />
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hide"
              animate={control}
              className="col-lg-3 mb-3"
            >
              <ItemsCard
                text="Processing Order"
                value="99"
                icons="atom"
                color="warning"
              />
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hide"
              animate={control}
              className="col-lg-3 mb-3"
            >
              <ItemsCard
                text="Ready to Deliver"
                value="263"
                icons="thumbs-up"
                color="success"
              />
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hide"
              animate={control}
              className="col-lg-3 mb-3"
            >
              <ItemsCard
                text="Delivered order"
                value="347"
                icons="check"
                color="primary"
              />
            </motion.div>
          </motion.div>
          <div className="row container m-auto">
            <div className="col-lg-8 mb-3 order-lg-first order-sm-last order-last">
              <Summary />
            </div>
            <div className="col-lg-4 mb-3 order-lg-last order-sm-first">
              <Graph />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
