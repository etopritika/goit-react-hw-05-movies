import { StyledLink } from "./BackLink.styled";

export default function BackLink({ to, children }){
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
};
