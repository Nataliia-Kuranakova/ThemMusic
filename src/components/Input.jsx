import { useEffect, useRef } from "react";

const Input = ({ name, value, onChange }) => {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <input className="input"
      name={name}
      value={value}
      ref={inputRef}
      onChange={onChange}
      placeholder="Search lyrics..."
      autoComplete="off"
      onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }}/>
  )
}

export default Input;