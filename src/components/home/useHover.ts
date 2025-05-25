import { useState } from "react";

export const useHover = () => {
  const [hover, setHover] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false
  });

  const firstGroup = ({ event }: { event: 'over' | 'out' }) => {
    if (event === 'over') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          first: true,
        }
      });
    }

    if (event === 'out') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          first: false,
        }
      });
    }
  }

  const secondGroup = ({ event }: { event: 'over' | 'out' }) => {
    if (event === 'over') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          second: true,
        }
      });
    }

    if (event === 'out') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          second: false,
        }
      });
    }
  }

  const thirdGroup = ({ event }: { event: 'over' | 'out' }) => {
    if (event === 'over') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          third: true,
        }
      });
    }

    if (event === 'out') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          third: false,
        }
      });
    }
  }

  const fourthGroup = ({ event }: { event: 'over' | 'out' }) => {
    if (event === 'over') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          fourth: true,
        }
      });
    }

    if (event === 'out') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          fourth: false,
        }
      });
    }
  }

  const fifthGroup = ({ event }: { event: 'over' | 'out' }) => {
    if (event === 'over') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          fifth: true,
        }
      });
    }

    if (event === 'out') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          fifth: false,
        }
      });
    }
  }

  const sixthGroup = ({ event }: { event: 'over' | 'out' }) => {
    if (event === 'over') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          sixth: true,
        }
      });
    }

    if (event === 'out') {
      setHover((previousStates) => {
        return {
          ...previousStates,
          sixth: false,
        }
      });
    }
  }

  return {
    states: { ...hover },
    handlers: {
      firstGroup,
      secondGroup,
      thirdGroup,
      fourthGroup,
      fifthGroup,
      sixthGroup
    }
  }
}