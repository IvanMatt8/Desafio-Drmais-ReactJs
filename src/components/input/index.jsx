import React from "react"

function Input({ label, name, className, placeholder, as, ...rest }) {
  return (
    <div className={className}>
      <label>{label}</label>
      {as === "textarea" ? (
        <textarea class="form-control" rows="3" placeholder={placeholder}></textarea>
      ) : (
        <input {...rest} name={name} placeholder={placeholder} className="form-control" />
      )}
    </div>
  )
}

export default Input
