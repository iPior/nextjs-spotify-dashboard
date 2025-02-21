'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DashboardContainer from "@/components/DashboardContainer";

export default function LoadingScreen() {

  return (
    <div className="w-full h-full p-1">
        <div className="flex flex-col items-center justify-center h-full">
        
         <AnimatePresence mode="wait">
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full flex flex-col items-center justify-center gap-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-2 bg-green-500 rounded-full"
              style={{ width: "300px" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="flex items-center gap-1"
            >
              <span className="text-xl font-medium">Loading your dashboard</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        </div>
    </div>
  )
}