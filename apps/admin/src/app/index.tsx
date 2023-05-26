import png from '@packages/assets/images/github.png';
import HouseIllustrationFromAssets from '@packages/assets/images/house.svg';
import { Button } from '@packages/ui-kit';
import { HouseIllustration } from '@packages/ui-kit/src/assets';

import './styles/index.scss';

export const App = () => {
  return (
    <main>
      <h1>Admin app</h1>
      <div>
        UI Kit component
        <Button staticImageSrc={png}>Button from UI Kit package</Button>
      </div>
      <div>
        From ui kit:
        <HouseIllustration height={300} />
      </div>
      <div>
        From assets:
        <HouseIllustrationFromAssets height={300} />
        <img src={png} />
      </div>
    </main>
  );
};
