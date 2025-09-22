import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import useOutsideClick from "../hooks/useOutsideClick";

function DropdownMenu({ links }) {
  const ref = useOutsideClick(() => setIsOpen(false));
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen ? (
        <IoClose
          className="h-5 w-5 text-secondary-500 lg:hidden"
          onClick={() => setIsOpen((is) => !is)}
        />
      ) : (
        <FiMenu
          className="h-5 w-5 text-secondary-500 lg:hidden"
          onClick={() => setIsOpen((is) => !is)}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            key="dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="fixed left-0 right-0 top-[62px] w-screen rounded-b-sm bg-secondary-50 shadow-sm"
          >
            <ul className="text-sm font-semibold text-secondary-700">
              {links.map((link) => (
                <li key={link.to} className="border-b border-secondary-300">
                  <Link
                    to={link.to}
                    className="block px-6 py-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropdownMenu;
