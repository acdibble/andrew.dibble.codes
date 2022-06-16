import Card from '../components/Card';
import Wordle from '../public/wordle.jpg';
import Sudoku from '../public/sudoku.png';
import ExternalLink from '../components/svgs/ExternalLink';

const apps = [
  {
    url: 'https://sudoku.dibble.codes',
    repo: 'https://github.com/acdibble/solid-sudoku',
    title: 'Sudoku Solver',
    body: (
      <p className="text-md">
        A Sudoku solver written in Rust, compiled down to WebAssembly, and
        shipped right to your browser for a lightning-fast Sudoku solving
        experience. Or if it&apos;s not lightning fast, it runs in a webworker
        and won&apos;t slow you down... 🐢
      </p>
    ),
    image: Sudoku,
  },
  {
    url: 'https://wordle.dibble.codes',
    repo: 'https://github.com/acdibble/wordle',
    title: 'Wordle Helper',
    body: (
      <>
        <p className="text-md">A tool to help you solve Wordle.</p>
        <p className="text-xs">
          Disclaimer: it has not been proven to be 100% successful.
        </p>
      </>
    ),
    image: Wordle,
  },
];

export default function Apps() {
  return (
    <div className="flex w-full flex-col space-y-4 p-4">
      <p className="text-sm">A list of apps I have created for fun.</p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {apps.map(({ url, title, body, image, repo }) => (
          <Card key={title}>
            <Card.Title>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 hover:underline"
              >
                <span>{title}</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </Card.Title>
            <Card.Body>{body}</Card.Body>
            <Card.Image href={url} {...image} />
            <a
              className="!mt-0 flex w-full items-center justify-center space-x-1 py-[2px] text-sm hover:bg-stone-300"
              href={repo}
            >
              <span>Source</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
