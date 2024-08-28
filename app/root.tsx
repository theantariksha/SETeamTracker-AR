import {
    Links,
    Link,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";


import pkg from 'react-burger-menu';
const { slide } = pkg;
const Slide = slide; // TS wants the name capitalized!

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    const styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        // bmItem: {
        //     display: 'inline-block'
        // },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    const isAdmin = true

    return (
        <div id="sidebar">

            <Slide styles={styles} >
                {isAdmin ?
                    <>
                        < p > <Link to="/importRoster" className="menu-item" >Import team roster</Link></p>
                        < p > <Link to="/downloadScores" className="menu-item" >Download scores as CSV</Link></p>

                    </>
                    :
                    <>
                        < p > <Link to="/report" className="menu-item" >This week&rsquo;s report</Link></p>
                        < p > <Link to="/feedback" className="menu-item" >My feedback</Link></p>
                    </>
                }
            </Slide>

            <div id="detail">
                <Outlet />
            </div>

        </div >
    );


}