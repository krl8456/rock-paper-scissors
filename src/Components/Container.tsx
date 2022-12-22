import React from "react"

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col items-center mt-[5%]">{children}</div>
  )
}

export default Container