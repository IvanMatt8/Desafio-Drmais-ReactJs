import React from "react"

function Input({ label, name, className, placeholder, as, ...rest }) {
  return (
    <div className={className}>
      <label>{label}</label>
      {as === "textarea" ? (
        <textarea {...rest} name={name} class="form-control" rows="3" placeholder={placeholder} />
      ) : (
        <input {...rest} name={name} placeholder={placeholder} className="form-control" />
      )}
    </div>
  )
}

export default Input
