'use client';

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext, PropsWithChildren } from 'react';

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  // 링크를 클릭할 때 옵저버를 일시적으로 비활성화
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext는 ActiveSectionContextProvider 내에서 사용해야 합니다.'
    );
  }

  return context;
};
