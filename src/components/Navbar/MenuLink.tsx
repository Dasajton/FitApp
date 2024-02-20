import { NavLink } from "react-router-dom";

export const MenuLink = ({
  to,
  children,
}: {
  to: string;
  children: string;
}) => {
  return (
    <NavLink to={to} className="[&.active]:text-blue-500">
      {children}
    </NavLink>
  );
};
