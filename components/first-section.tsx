import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export type FasterSmarterBeautifulBentoProps = HTMLAttributes<HTMLDivElement>;

export const FasterSmarterBeautifulBento = ({
  className,
  ...props
}: FasterSmarterBeautifulBentoProps) => {
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
      Come together to exchange ideas.
        <span className="block md:mt-0">Faster, smarter and securely.</span>
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-8 md:mt-8">
        <Card className="col-span-2">
          <CardContent className="grid grid-cols-12 gap-8 overflow-hidden p-6 lg:aspect-[2.5/1]">
            <p className="text-foreground/80 col-span-12 leading-relaxed lg:col-span-6">
              <strong className="block">Scripts Listing</strong>
              A place for writers to list their scripts and for producers to find them.
            </p>

            <div className="col-span-12 -my-6 -mr-6 flex items-end justify-end pt-12 lg:col-span-6">
              {/* <Image
                src={cardFastFigure}
                alt="its fast"
                className="max-w-[80%] dark:contrast-[70%] dark:hue-rotate-180 dark:invert lg:max-w-none"
              /> */}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 lg:col-span-1">
          <CardContent className="grid grid-cols-1 gap-8 p-6">
            <p className="text-foreground/80 leading-relaxed">
              <strong className="block">Search and Filter Options.</strong>
              Allowing producers to filter scripts by genre, length, budget requirements and other relevant parameters.
            </p>

            <div className="flex items-center justify-center p-8">
              {/* <Image
                src={cardBeautifulFigure}
                alt="its fast"
                className="w-full max-w-xs dark:contrast-[70%] dark:hue-rotate-180 dark:invert"
              /> */}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 lg:col-span-1">
          <CardContent className="grid grid-cols-1 gap-8 p-6">
            <p className="text-foreground/80 leading-relaxed">
              <strong className="block">Revenue Model</strong>
              Deciding on a revenue model that is fair and sustainable, such as subscription fees, transaction fees, or premium listing options.
            </p>

            <div className="flex items-center justify-center p-8">
              {/* <Image
                src={cardSmartFigure}
                alt="its fast"
                className="w-full max-w-[16rem] dark:contrast-[70%] dark:hue-rotate-180 dark:invert"
              /> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
