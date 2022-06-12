import { marked } from 'marked';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getTilsPaths } from '../../utils/tils';

type TilProps = {
  content: string;
  url: string;
};

export default function Til({ content, url }: TilProps): JSX.Element {
  return (
    <div className="m-4 flex max-w-3xl flex-col space-y-4">
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose prose-stone border-b-[1px] border-stone-500 pb-4"
      />
      <div>
        <a
          href={url}
          className="text-sm hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          View on Github
        </a>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<TilProps> = async (ctx) => {
  const joined = (ctx.params!.slug as string[]).join('/');
  const source = `https://raw.githubusercontent.com/acdibble/til/master/${joined}.md`;
  let content = '';

  const response = await fetch(source);

  if (response.ok) {
    content = await response.text();
  }

  const url = `https://github.com/acdibble/til/blob/master/${joined}.md`;

  return { props: { content: marked.parse(content), url } };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getTilsPaths(),
  fallback: true, // false or 'blocking'
});
