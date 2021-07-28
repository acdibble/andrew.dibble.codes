/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Converter } from 'showdown';
import Link from 'next/link';
import { formatId, getStructureFile, keys } from '../lib';

interface TILsProps {
  tils: Record<string, string[]>;
}

interface TILProps {
  category: string;
  title: string;
}

const TIL = ({ category, title }: TILProps) => {
  const id = formatId(category, title);

  const converter = new Converter();
  const html = converter.makeHtml(title).replace(/^<p>(.+)<\/p>$/, '$1');

  return (
    <>
      <style jsx>{`
        * {
          display: flex;
          text-decoration: none;
        }

        article {
          align-content: space-between;
          border: 2px solid gray;
          border-bottom: 0;
          flex-direction: column;
        }

        article > div {
          align-content: space-between;
          flex-direction: row;
        }

        article:last-child {
          border-bottom: 2px solid gray;
        }

        h4 {
          margin: 1vh 2vw;
        }

        a {
          flex: 1;
          color: black;
        }

        p {
          margin: 0;
          padding: 0 2vw;
          display: block;
        }
      `}</style>
      <article>
        <div>
          <Link
            key={`${category}-${title}`}
            href={{
              pathname: '/tils/[id]',
              query: { id },
            }}
          >
            <a href="">
              <h4 dangerouslySetInnerHTML={{ __html: html }} />
              {/* <strong>{showTIL ? "-" : "+"}</strong> */}
            </a>
          </Link>
        </div>
      </article>
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    tils: await getStructureFile(),
  },
  revalidate: 60,
});

const TILs = ({ tils }: TILsProps) => (
  <>
    <style jsx>{`
      h1 {
        margin-top: 0;
      }

      @media (min-width: 860px) {
        .mobile-warning {
          display: none;
        }
      }
    `}</style>
    <h1>What I&apos;ve learned:</h1>
    <p>
      A collection of concise write-ups on small things I learn day to day across a variety of
      languages and technologies.
    </p>
    <small className="mobile-warning">The code snippets may look terrible on mobile.</small>
    {keys(tils).map((category) => (
      <section key={category}>
        <h2>{category}</h2>
        {tils[category].map((title) => (
          <TIL key={title} category={category} title={title} />
        ))}
      </section>
    ))}
  </>
);

export default TILs;
