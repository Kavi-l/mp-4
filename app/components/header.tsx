import Link from "next/link";
import styled from "styled-components";

const StyledH2 = styled.h2`
    margin: auto;
    align-items: center;
    align-self: center;
    font-family: "Times New Roman", Times, serif;
    font-size: calc(24px + 2vw);
`
const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    font-family: "Times New Roman", Times, serif;
    font-size: calc(8px + 2vw);
`
export default function Header() {
    return (
        <header >
            <StyledH2>Harvard Art Museum</StyledH2>
            <StyledNav>
                <Link href="/"> Home </Link>
                <Link href="/about"> About</Link>
            </StyledNav>
        </header>
    )
}