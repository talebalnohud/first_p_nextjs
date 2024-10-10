import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <aside className="bg-sky-200 p-5 mr-5">Admin layout</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
