import * as React from 'react';

const About = () => {
  const contactInfo = [
    ['Github', 'https://www.github.com/acdibble'],
    ['LinkedIn', 'https://www.linkedin.com/in/andrewdibble/'],
    ['Twitter', 'https://twitter.com/_andrew_dibble_'],
    ['Reddit', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
  ] as const;

  return (
    <>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
        }

        article {
          margin: 0 2vw;
        }

        a {
          text-decoration: none;
        }

        li a {
          color: black;
        }

        h1 {
          margin: 0;
        }

        p {
          margin: 1vh 1vw;
        }

        li {
          display: inline-block;
          white-space: nowrap;
          list-style-type: none;
          flex: 1;
          margin: 1vh 2vw;
        }

        ul {
          display: flex;
          justify-content: center;
          margin: 1vh 10vw;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 0;
        }
      `}</style>

      <section>
        <h1>Hello there</h1>

        <article>
          <h3>Bio</h3>
          <p>
            My name is Andrew Dibble. Welcome to my website. It isn&apos;t much, but it&apos;s mine.
            I&apos;m currently located in Berlin with no intention of returning to Austin, so please
            don&apos;t send me job offers for Austin.
          </p>

          <p>
            Feel free to brows the &ldquo;TIL&rdquo; section to see a collection of small things
            I&apos;ve learnt over the past period of time. They&apos;ve been custom-processed to
            display on this page and are best viewed on
            <a href="https://www.github.com/acdibble/til" target="_blank" rel="noreferrer">
              {' '}
              Github
            </a>
            .
          </p>
        </article>

        <article>
          <h3>Contact</h3>
          <p>
            I can be reached at <a href="mailto:andrew@dibble.codes">andrew@dibble.codes</a> or at
            any of the following social media:
          </p>
          <ul>
            {contactInfo.map(([medium, link]) => (
              <li key={medium}>
                <a href={link} target="_blank" rel="noreferrer">
                  <i className={`fab fa-${medium.toLowerCase()}`} />
                  &nbsp;{medium}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default About;
