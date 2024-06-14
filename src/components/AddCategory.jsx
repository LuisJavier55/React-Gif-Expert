import { useState } from "react"


export const AddCategory =({onNewCategory}) => {

    const [InputValue, setInputValue] = useState('');

    const OnImputChange = ({target}) =>{
      setInputValue(target.value)
    }

    const OnSubmitFunc = (e) =>{
      e.preventDefault();
      if (InputValue.trim().length <= 1) return;
      onNewCategory(InputValue.trim());
      setInputValue('');
    }



  return (
    <>
    <form onSubmit={OnSubmitFunc}>
        <input 
        type="text" 
        placeholder="buscar elemento" 
        value={InputValue}
        onChange={OnImputChange}

        />
    </form>
    </>
  )
}





