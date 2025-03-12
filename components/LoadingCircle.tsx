import { motion, AnimatePresence } from "framer-motion"

export default function LoadingCircle() {

  return (
    <div className="w-full h-full p-1">
        <div className="flex flex-col items-center justify-center h-full">
        
         <AnimatePresence mode="wait">
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="loader"></div>
            <style jsx>{`
              .loader {
                border: 8px solid transparent; /* Make the border transparent */
                border-radius: 50%;
                width: 50px; /* Size of the spinner */
                height: 50px; /* Size of the spinner */
                background-color: var(--bg-accent); /* Use the bg-accent color */
                animation: spin 1s linear infinite; /* Animation */
              }

              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </motion.div>
        </AnimatePresence>
        </div>
    </div>
  )
}