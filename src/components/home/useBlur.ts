import { useState } from "react";

export enum Pills {
  FIRST = "JASON",
  SECOND = "SPENT",
  THIRD = "CURRENTLY",
  FOURTH = "HERE",
  FIFTH = "BEYOND",
  SIXTH = "ALSO",
}

type BlurStates = Record<Pills, boolean>;

export const useBlur = () => {
  const [isBlur, setBlur] = useState<BlurStates>({
    [Pills.FIRST]: true,
    [Pills.SECOND]: true,
    [Pills.THIRD]: true,
    [Pills.FOURTH]: true,
    [Pills.FIFTH]: true,
    [Pills.SIXTH]: true,
  });

  const firstBlur = () => {
    if (!isBlur.JASON) {
      setBlur((previousStates) => {
        return {
          ...previousStates,
          [Pills.SECOND]: true,
          [Pills.THIRD]: true,
          [Pills.FOURTH]: true,
        };
      });
    }
    setBlur((previousStates) => {
      return {
        ...previousStates,
        [Pills.FIRST]: !previousStates.JASON,
      };
    });
  };

  const secondBlur = () => {
    if (!isBlur.SPENT) {
      setBlur((previousStates) => {
        return {
          ...previousStates,
          [Pills.THIRD]: true,
          [Pills.FOURTH]: true,
        };
      });
    }
    setBlur((previousStates) => {
      return {
        ...previousStates,
        [Pills.SECOND]: !previousStates.SPENT,
      };
    });
  };

  const thirdBlur = () => {
    if (!isBlur.CURRENTLY) {
      setBlur((previousStates) => {
        return {
          ...previousStates,
          [Pills.FOURTH]: true,
        };
      });
    }
    setBlur((previousStates) => {
      return {
        ...previousStates,
        [Pills.THIRD]: !previousStates.CURRENTLY,
      };
    });
  };

  const fourthBlur = () => {
    setBlur((previousStates) => {
      return {
        ...previousStates,
        [Pills.FOURTH]: !previousStates.HERE,
      };
    });
  };

  const fifthBlur = () => {
    setBlur((previousStates) => {
      return {
        ...previousStates,
        [Pills.FIFTH]: !previousStates.BEYOND,
      };
    });
  };

  const sixthBlur = () => {
    setBlur((previousStates) => {
      return {
        ...previousStates,
        [Pills.SIXTH]: !previousStates.ALSO,
      };
    });
  };

  return {
    states: { ...isBlur },
    handlers: {
      firstBlur,
      secondBlur,
      thirdBlur,
      fourthBlur,
      fifthBlur,
      sixthBlur,
    },
  };
};
