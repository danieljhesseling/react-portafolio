import { useState, useEffect } from 'react';

const useTypedText = (texts: string[], speed: number) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      setDisplayedText(
        isDeleting
          ? currentText.substring(0, displayedText.length - 1)
          : currentText.substring(0, displayedText.length + 1)
      );

      setTypingSpeed(isDeleting ? speed / 4 : speed);

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(0);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, loopNum, texts, typingSpeed, speed]);

  return displayedText;
};

export default useTypedText;
