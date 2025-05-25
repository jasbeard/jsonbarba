import { createContext, useContext } from 'react';
import { WorkListProps } from '../ExperienceSection';

export const WorkCardContext = createContext<WorkListProps | null>(null);

export function useWorkList() {
  const context = useContext(WorkCardContext);

  if (!context) return; // todo: improve handling

  return context;
}