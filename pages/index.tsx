import type { NextPage } from 'next';
import Image from 'next/image';
import GithubLogo from '../public/github.svg';
import LinkedinLogo from '../public/linkedin.svg';
import RedditLogo from '../public/reddit.svg';
import TwitterLogo from '../public/twitter.svg';

type SVGProps = { src: string; height: number; width: number };

const NextSVG = ({ src, height, width }: SVGProps) => (
  <Image width={width / 32} height={height / 32} src={src} alt="" />
);

const Home: NextPage = () => {
  const media = [
    {
      name: 'Github',
      logo: <NextSVG {...GithubLogo} />,
      href: 'https://github.com/acdibble',
    },
    {
      name: 'Linkedin',
      logo: <NextSVG {...LinkedinLogo} />,
      href: 'https://www.linkedin.com/in/andrewdibble/',
    },
    {
      name: 'Twitter',
      logo: <NextSVG {...TwitterLogo} />,
      href: 'https://twitter.com/_andrew_dibble_',
    },
    {
      name: 'Reddit',
      logo: <NextSVG {...RedditLogo} />,
      href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ] as const;

  return (
    <div className="m-4 flex flex-col space-y-4">
      <h1 className="text-3xl">Hello there</h1>
      <h2 className="text-xl font-semibold">Bio</h2>
      <p>
        My name is Andrew Dibble. Welcome to my website. It isn&apos;t much, but
        it&apos;s mine. I&apos;m a full-stack developer located in Berlin.
      </p>
      <p>
        Feel free to brows the &quot;TIL&quot; section to see a collection of
        small things I&apos;ve learnt over the past period of time.
      </p>
      <h2 className="text-xl font-semibold">Contact</h2>
      <p>
        I can be reached at{' '}
        <a href="mailto:andrew@dibble.codes" className="underline">
          andrew@dibble.codes
        </a>{' '}
        or at any of the following social media:
      </p>
      <div className="flex w-full max-w-full justify-center">
        <div className="grid grid-cols-2 gap-x-10 gap-y-2 md:grid-cols-4">
          {media.map(({ name, logo, href }) => (
            <button
              key={name}
              type="button"
              onClick={() => window.open(href, '_blank')}
              className="flex items-center justify-center space-x-2 rounded-md p-1 transition hover:bg-gray-300"
            >
              {logo}
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
