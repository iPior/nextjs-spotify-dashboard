import { motion, AnimatePresence } from "framer-motion"

export default function LoadingBar() {

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
              className="h-1 bg-accent rounded-full w-full"
              style={{ width: "300px" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="flex items-center gap-1"
            >
            </motion.div>
          </motion.div>
        </AnimatePresence>
        </div>
    </div>
  )
}