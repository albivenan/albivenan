import { createContext, useContext, useRef, useEffect, useState } from "react"
import { ChevronDown } from "react-feather"

const AccordianContext = createContext()

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className=" my-0.5 relative z-50" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-2 px-2 font-bold rounded-lg text-lg lg:text-xl text-white bg-blue-500 relative z-50"
      >
        {trigger}
        <ChevronDown
          size={25}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden rounded-lg transition-all bg-slate-100"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="py-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}