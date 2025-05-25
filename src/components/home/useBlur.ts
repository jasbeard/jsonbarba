import { useState } from "react";

export const useBlur = () => {
  const [blur, setBlur] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true
  });

  const firstBlur = () => {
    if(!blur.first && !blur.second) {
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
    if (!blur.first) setBlur((previousStates) => {
      return {
      ...previousStates,
      second: !previousStates.second,
      }
    });
  }

  const thirdBlur = () => {
    if (!blur.first && !blur.second) setBlur((previousStates) => {
      return {
      ...previousStates,
      third: !previousStates.third,
      }
    });
  }

  const fourthBlur = () => {
    if (!blur.first && !blur.second && !blur.third) setBlur((previousStates) => {
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
    state: { ...blur },
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