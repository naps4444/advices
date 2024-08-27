import Image from 'next/image';
import { useState } from 'react';
// import './styles.css'; // Import your CSS file

function SpinningImage() {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    <Image
      src="/icon-dice.svg"
      alt="Spinning"
      width={200} height={200} 
      className={`spin ${isSpinning ? 'spin-active' : ''}`}
      onClick={handleClick}
    />
  );
}

export default SpinningImage;
