import React from "react"

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col  items-center h-[100vh] justify-between">{children}</div>
  )
}

export default Container