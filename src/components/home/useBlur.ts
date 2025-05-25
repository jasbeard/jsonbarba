import { useState } from "react";

enum Pills {
  FIRST = 'JASON',
  SECOND = 'RECENTLY',
  THIRD = 'MOREOVER',
  FOURTH = 'OVER_THE_LAST',
  FIFTH = 'ASURION',
  SIXTH = 'ALSO',
}

type BlurStates = Record<Pills, boolean>;

export const useBlur = () => {
  const [isBlur, setBlur] = useState<BlurStates>({
    [Pills.FIRST]: true,
    [Pills.SECOND]: true,
    [Pills.THIRD]: true,
    [Pills.FOURTH]: true,
    [Pills.FIFTH]: true,
    [Pills.SIXTH]: true
  });

  const firstBlur = () => {
    if(!isBlur.JASON) {
      setBlur((previousStates) => {
        return {
          ...previousStates,
          [Pills.SECOND]: true,
          [Pills.THIRD]: true,
          [Pills.FOURTH]: true
        }
      });
    }
    setBlur((previousStates) => {
      return {
      ...previousStates,
      [Pills.FIRST]: !previousStates.JASON,
      }
    });
  }

  const secondBlur = () => {
    if (!isBlur.RECENTLY) {
      setBlur((previousStates) => {
        return {
          ...previousStates,
          [Pills.THIRD]: true,
          [Pills.FOURTH]: true
        }
      });
    }
    setBlur((previousStates) => {
      return {
      ...previousStates,
      [Pills.SECOND]: !previousStates.RECENTLY,
      }
    });
  }

  const thirdBlur = () => {
    if (!isBlur.MOREOVER) {
      setBlur((previousStates) => {
        return {
          ...previousStates,
          [Pills.FOURTH]: true
        }
      });
    }
   setBlur((previousStates) => {
      return {
      ...previousStates,
      [Pills.THIRD]: !previousStates.MOREOVER,
      }
    });
  }

  const fourthBlur = () => {
    setBlur((previousStates) => {
      return {
      ...previousStates,
      [Pills.FOURTH]: !previousStates.OVER_THE_LAST,
      }
    });
  }

  const fifthBlur = () => {
    setBlur((previousStates) => {
      return {
      ...previousStates,
      [Pills.FIFTH]: !previousStates.ASURION,
      }
    });
  }

  const sixthBlur = () => {
    setBlur((previousStates) => {
      return {
      ...previousStates,
      [Pills.SIXTH]: !previousStates.ALSO,
      }
    });
  }

  return {
    states: { ...isBlur },
    handlers: {
      firstBlur,
      secondBlur,
      thirdBlur,
      fourthBlur,
      fifthBlur,
      sixthBlur
    }
  }
}