import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: "200px",
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div className="backdrop" variants={backdrop} animate="visible" initial="hidden" exit="hidden">
          <motion.div className="modal" variants={modal}>
            <p>Want to make another pizza ?</p>
            <Link to="/">
              <button>Order Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
