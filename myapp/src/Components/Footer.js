import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="bg-body-tertiary text-center text-lg-start mt-3">

<div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
  © 2020 Copyright:
  <Link className="text-body" to="/home">Vision EnterPrises</Link>
</div>

</footer>
    </div>
  )
}
