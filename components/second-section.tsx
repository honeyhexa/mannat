import { HTMLAttributes } from 'react';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

// import backgroundPattern from '@documenso/assets/images/background-pattern.png';
// import cardConnectionsFigure from '@documenso/assets/images/card-connections-figure.png';
// import cardPaidFigure from '@documenso/assets/images/card-paid-figure.png';
// import cardSharingFigure from '@documenso/assets/images/card-sharing-figure.png';
// import cardWidgetFigure from '@documenso/assets/images/card-widget-figure.png';
// import { cn } from '@documenso/ui/lib/utils';
// import { Card, CardContent } from '@documenso/ui/primitives/card';

export type ShareConnectPaidWidgetBentoProps = HTMLAttributes<HTMLDivElement>;

export const ShareConnectPaidWidgetBento = ({
  className,
  ...props
}: ShareConnectPaidWidgetBentoProps) => {
  return (
    <div className={cn('relative', className)} {...props}>
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        {/* <Image
          src={backgroundPattern}
          alt="background pattern"
          className="h-full scale-125 object-cover dark:contrast-[70%] dark:invert dark:sepia md:scale-150 lg:scale-[175%]"
        /> */}
      </div>
      <h2 className="px-0 text-[22px] font-semibold md:px-12 md:text-4xl lg:px-24">
        Your script, your way.
        <span className="block md:mt-0">Next Gen Features Ahead</span>
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-8 md:mt-8">
        <Card className="col-span-2 lg:col-span-1" degrees={120} gradient>
          <CardContent className="grid grid-cols-1 gap-8 p-6">
            <p className="text-foreground/80 leading-relaxed">
              <strong className="block">Secure Script Viewing (Soon).</strong>
              Implementing secure ways to view scripts without the risk of theft. 
            </p>

            <div className="flex items-center justify-center p-8">
              {/* <Image
                src={cardSharingFigure}
                alt="its fast"
                className="w-full max-w-xs dark:contrast-[70%] dark:hue-rotate-180 dark:invert"
              /> */}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 lg:col-span-1" spotlight>
          <CardContent className="grid grid-cols-1 gap-8 p-6">
            <p className="text-foreground/80 leading-relaxed">
              <strong className="block">Connections (Soon).</strong>
              Opportunities for writers to connect directly with interested parties.
            </p>

            <div className="flex items-center justify-center p-8">
              {/* <Image
                src={cardConnectionsFigure}
                alt="its fast"
                className="w-full max-w-sm dark:contrast-[70%] dark:hue-rotate-180 dark:invert"
              /> */}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 lg:col-span-1" spotlight>
          <CardContent className="grid grid-cols-1 gap-8 p-6">
            <p className="text-foreground/80 leading-relaxed">
              <strong className="block">Version Control (Soon).</strong>
              Drafts and revisions are automatically saved and can be accessed at any time.
            </p>

            <div className="flex items-center justify-center p-8">
              {/* <Image
                src={cardPaidFigure}
                alt="its fast"
                className="w-full max-w-[14rem] dark:contrast-[70%] dark:hue-rotate-180 dark:invert"
              /> */}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 lg:col-span-1" spotlight>
          <CardContent className="grid grid-cols-1 gap-8 p-6">
            <p className="text-foreground/80 leading-relaxed">
              <strong className="block">Legal and Copyright Protection (Soon).</strong>
              Will ensure the protection of intellectual property, with clear terms of use and copyright guidelines.
            </p>

            <div className="flex items-center justify-center p-8">
              {/* <Image
                src={cardWidgetFigure}
                alt="its fast"
                className="w-full max-w-xs dark:contrast-[70%] dark:hue-rotate-180 dark:invert"
              /> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
