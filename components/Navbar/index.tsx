import { useRouter } from "next/router";
import login from "services/firebase/auth/login";
import links, { LinkProps } from "./links";
import { NavbarContainer, NavLinkContainer } from "./Navbar.styles";

function NavLink({
  label,
  Icon,
  isActive,
  href,
  show,
  isConnected,
}: LinkProps & { isActive: boolean; isConnected?: boolean }) {
  const e = (
    <NavLinkContainer href={href} isActive={isActive}>
      {Icon && <Icon className="icon" />}
      {label && <span className="label">{label}</span>}
    </NavLinkContainer>
  );

  if (!show) return null;
  if (show === "always") return e;
  if (show === "authenticated" && isConnected) return e;
  if (show === "unauthenticated" && !isConnected) return e;

  return null;
}

function Navbar() {
  const { pathname } = useRouter();

  const onClick = async () => {
    const { error, user } = await login();
    if (error) return console.log(error);
  };

  return (
    <NavbarContainer>
      <nav>
        <div className="container">
          {links.top.map((link) => (
            <NavLink
              key={link.href}
              isActive={pathname === link.href}
              {...link}
            />
          ))}
        </div>
        <div>
          <button onClick={onClick}>Login</button>
        </div>
      </nav>
    </NavbarContainer>
  );
}

export default Navbar;
