import Image from 'next/image';
import Card from '../components/Card';
import Wordle from '../public/wordle.jpg';

const apps = [
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
      <div className="flex w-full flex-col space-y-4 md:px-10">
        {apps.map(({ url, title, body, image }) => (
          <div className="flex w-full flex-col" key={title}>
            <Card image={<Image {...image} />}>
              <Card.Title>
                <a href={url} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </Card.Title>
              <Card.Body>{body}</Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
