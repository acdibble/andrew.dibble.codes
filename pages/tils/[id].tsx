import * as React from 'react';
import showdown from 'showdown';
import { GetStaticPropsContext } from 'next';
import { formatId, getStructureFile, keys } from '../../lib';

export const getStaticPaths = async () => {
  const json = await getStructureFile();

  return {
    paths: keys(json).flatMap((category) =>
      json[category].map((title) => ({
        params: { id: formatId(category, title) },
      })),
    ),
    fallback: true,
  };
};

const getContent = async (id: string): Promise<string> => {
  const res = await fetch(`https://raw.githubusercontent.com/acdibble/til/master/${id}`);

  return res.text();
};

interface Props {
  html: string;
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>,
): Promise<{ props: Props }> => {
  const content = await getContent(context.params!.id);

  const converter = new showdown.Converter();
  const html = converter.makeHtml(content);

  return {
    props: { html },
  };
};

const TIL = ({ html }: Props) => (
  <>
    <style jsx>
      {`
        pre {
          background-color: lightgray;
        }
      `}
    </style>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </>
);

export default TIL;
