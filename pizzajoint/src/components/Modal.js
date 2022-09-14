import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Modal = ({ showModal, setShowModal }) => {
  return <AnimatePresence exitBeforeEnter>{showModal && <motion.div className="backdrop" variants={backdrop} animate="visible" initial="hidden"></motion.div>}</AnimatePresence>;
};

export default Modal;
