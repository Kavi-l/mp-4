'use client'

import UpdateTitle from "../components/title";
import styled from "styled-components";

const StyledA = styled.a`
    display: flex;
    justify-content: center;
    color: #3B82F6; /* Tailwind's blue-500 */
    text-decoration: underline;
`

export default function AboutPage() {
    return (
        <>
            <UpdateTitle title="About"/>
            <main className="p-4">
                <p className="text-center text-[calc(4px+1vw)]">This simple website uses the Harvard Art Museums API to display a small number (9) of artworks at a time.
                    It displays a random set at every refresh. The content is styled using a mix of tailwind and styled-components
                </p>
                <StyledA 
                    href="https://github.com/harvardartmuseums/api-docs" 
                    target="_blank"
                    >
                    Learn more
                </StyledA>
            </main>
        </>
    )
}