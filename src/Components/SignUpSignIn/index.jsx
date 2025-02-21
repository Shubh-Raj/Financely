import React, { useState } from 'react'

function SignupSigninComponent() {
  const [name, setName] = useState("");

  return (
    <div className='signup-wrapper'>
      <h2 className='title'>
        Sign Up on <span style={{ color: "var(--theme)" }}>FinTrack</span>

      </h2>
      <form>
        <Input
          label={"full Name"}
          state={name}
          setState={setName}
          placeholder={"Shubh"}
        />
        <Input
          label={"full Name"}
          state={name}
          setState={setName}
          placeholder={"Shubh"}
        />
      </form>
    </div>
  );
}

export default SignupSigninComponent
