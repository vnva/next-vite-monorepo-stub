import Head from 'next/head';

import HouseIllustrationFromAssets from '@packages/assets/images/house.svg';
import { Button } from '@packages/ui-kit';
import { HouseIllustration } from '@packages/ui-kit/src/assets';

export default function Home() {
  return (
    <>
      <Head>
        <title>Client Next app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Client app</h1>
        <div>
          UI Kit component
          <Button>Button from UI Kit package</Button>
        </div>
        <div>
          From ui kit:
          <HouseIllustration height={300} />
        </div>
        <div>
          From assets:
          <HouseIllustrationFromAssets height={300} />
        </div>
      </main>
    </>
  );
}
