import { marked } from 'marked';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { formatPath, getTils } from '../../utils/tils';

type TilsProps = {
  tils: Record<string, string[]>;
};

export default function Tils({ tils }: TilsProps): JSX.Element {
  return (
    <div className="m-4 flex flex-col space-y-4">
      <h1 className="text-3xl">What I&apos;ve learned:</h1>
      <p className="text-sm">
        A collection of concise write-ups on small things I learn day to day
        across a variety of languages and technologies.
      </p>
      {Object.keys(tils).map((category) => (
        <div key={category} className="space-y-1">
          <h2 className="w-full border-b-[1px] border-stone-400 text-2xl font-semibold">
            {category}
          </h2>
          <ul>
            {tils[category].map((name) => (
              <li key={name} className="prose ">
                <Link href={formatPath(category, name)}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    className="no-underline hover:underline prose-p:m-0"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: marked.parse(name) }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<TilsProps> = async () => ({
  props: { tils: await getTils() },
});
