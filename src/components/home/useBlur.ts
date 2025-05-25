import { useState } from "react";

export const useBlur = () => {
  const [isBlur, setBlur] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true
  });

  const firstBlur = () => {
    if(!isBlur.first && !isBlur.second && !isBlur.third && !isBlur.fourth) {
      setBlur((previousStates) => {
        return {
          ...previousStates,
          second: !previousStates.second,
          third: !previousStates.third,
          fourth: !previousStates.fourth,
        }
      });
    }
    setBlur((previousStates) => {
      return {
      ...previousStates,
      first: !previousStates.first,
      }
    });
  }

  const secondBlur = () => {
    if (!isBlur.first) setBlur((previousStates) => {
      return {
      ...previousStates,
      second: !previousStates.second,
      }
    });
  }

  const thirdBlur = () => {
    if (!isBlur.first && !isBlur.second) setBlur((previousStates) => {
      return {
      ...previousStates,
      third: !previousStates.third,
      }
    });

    if (!isBlur.fourth) {
      setBlur((previousStates) => {
        return {
          ...previousStates,
          third: !previousStates.third,
          fourth: !previousStates.fourth,
        }
      });
    }
  }

  const fourthBlur = () => {
    if (!isBlur.first && !isBlur.second && !isBlur.third) setBlur((previousStates) => {
      return {
      ...previousStates,
      fourth: !previousStates.fourth,
      }
    });
  }

  const fifthBlur = () => {
    setBlur((previousStates) => {
      return {
      ...previousStates,
      fifth: !previousStates.fifth,
      }
    });
  }

  const sixthBlur = () => {
    setBlur((previousStates) => {
      return {
      ...previousStates,
      sixth: !previousStates.sixth,
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