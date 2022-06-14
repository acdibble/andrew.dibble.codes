import Card from '../components/Card';
import Wordle from '../public/wordle.jpg';
import Sudoku from '../public/sudoku.png';

const apps = [
  {
    url: 'https://sudoku.dibble.codes',
    title: 'Sudoku Solver',
    body: (
      <p className="text-md">
        A Sudoku solver written in Rust, compiled down to WebAssembly, and
        shipped right to your browser for a lightning-fast Sudoku solving
        experience.
      </p>
    ),
    image: Sudoku,
  },
  {
    url: 'https://wordle.dibble.codes',
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
        {apps.map(({ url, title, body, image }) => (
          <Card key={title}>
            <Card.Title>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 hover:underline"
              >
                <span>{title}</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </Card.Title>
            <Card.Body>{body}</Card.Body>
            <Card.Image href={url} {...image} />
          </Card>
        ))}
      </div>
    </div>
  );
}
