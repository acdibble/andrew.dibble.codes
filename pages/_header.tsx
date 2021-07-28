/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from 'next/link';

const Header = () => {
  const pages = [
    ['About', '/'],
    ['TILs', '/tils'],
  ] as const;

  return (
    <>
      <style jsx>{`
        * {
          display: flex;
          color: #dddddd;
        }

        header {
          width: 100%;
          flex-direction: column;
          align-items: stretch;
          background-color: #222222;
        }

        .container {
          justify-content: space-between;
          flex-wrap: wrap;
          flex-direction: row;
          max-width: 860px;
        }

        ul {
          margin: 0;
          height: 100%;
          padding-left: 0;
        }

        li {
          list-style-type: none;
        }

        a {
          text-decoration: none;
        }

        .nice-padding {
          padding: 2vh 25px;
        }

        @media (min-width: 860px) {
          .container {
            margin: 0 4vw;
            min-width: 860px;
          }

          header {
            align-items: center;
          }

          div.nice-padding {
            padding-left: 0;
          }

          li:last-child a.nice-padding {
            padding-right: 0;
          }
        }
      `}</style>

      <header>
        <div className="container">
          <div className="nice-padding">Welcome!</div>
          <nav>
            <ul>
              {pages.map(([name, path]) => (
                <li key={name}>
                  <Link href={path}>
                    <a className="nice-padding" href="">
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
