import React from 'react';

function Nav(props)
{
    const {
        aboutSelected,
        contactSelected,
        portfolioSelected,
        resumeSelected,

        setAboutSelected,
        setContactSelected,
        setPortfolioSelected,
        setResumeSelected,
    } = props;


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="computer">💻</span> Creative Designs!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                        <span onClick={() => 
                        {
                            setAboutSelected(true);
                            setPortfolioSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}>
                            About me </span>
                    </li>
                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                        <span onClick={() =>
                        {
                            setPortfolioSelected(true);
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}>
                            Portfolio</span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() =>
                        {
                            setContactSelected(true);
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setResumeSelected(false);
                        }}>
                            Contact</span>
                    </li>
                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <span onClick={() =>
                        {
                            setResumeSelected(true);
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setContactSelected(false);
                        }}>
                            Resume</span>
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default Nav;
