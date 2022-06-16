import Card from '../components/Card';
import Site from '../public/andrew-dibble-codes.png';
import Wordle from '../public/wordle.png';
import Sudoku from '../public/sudoku.png';
import ExternalLink from '../components/svgs/ExternalLink';

const apps = [
  {
    url: 'https://sudoku.dibble.codes',
    repo: 'solid-sudoku',
    title: 'Sudoku Solver',
    body: (
      <p>
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
    repo: 'wordle-helper',
    title: 'Wordle Helper',
    body: (
      <>
        <p>A tool to help you solve Wordle.</p>
        <p className="text-xs">
          Disclaimer: it has not been proven to be 100% successful.
        </p>
      </>
    ),
    image: Wordle,
  },
  {
    url: 'https://andrew.dibble.codes',
    repo: 'andrew.dibble.codes',
    title: 'andrew.dibble.codes',
    body: <p>You&apos;re looking at it.</p>,
    image: Site,
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
              href={`https://github.com/acdibble/${repo}`}
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
