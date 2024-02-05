import { Button } from 'flowbite-react';


function defaultButton({ buttonText, className }) {
  return (
    <>
       <Button className={`${className} text-lg font-bold`}> {buttonText} </Button>
    </> 
  );
}

export default defaultButton;