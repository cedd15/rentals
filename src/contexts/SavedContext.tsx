import { createContext, useState, type ReactNode } from "react";
import type { Rental } from "../models/Rental";

interface SavedRentalsContext {
    rentals : Rental[],
    toggleSave : (rental : Rental) => void
}

export const SavedContext = createContext<SavedRentalsContext | undefined>(undefined)

export function SavedProvider({ children }: { children: ReactNode }) {
  const [rentals, setSavedRentals] = useState<Rental[]>([]);

  const toggleSave = (rental: Rental) => {
    setSavedRentals((prev) => {
      const exists = prev.find((i) => i.id === rental.id);

      if (exists) {
        // remove if already saved
        return prev.filter((i) => i.id !== rental.id);
      } else {
        // add if not saved
        return [...prev, rental];
      }
    });
  };

  return (
    <SavedContext.Provider value={{ rentals, toggleSave }}>
      {children}
    </SavedContext.Provider>
  );
}