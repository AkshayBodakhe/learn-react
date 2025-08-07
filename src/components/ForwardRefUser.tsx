import React, { forwardRef } from "react";
function User(props: any, ref: React.LegacyRef<HTMLInputElement> | undefined) {
  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
}

export default forwardRef(User);


