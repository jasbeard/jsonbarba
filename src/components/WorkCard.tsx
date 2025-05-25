import Image, { StaticImageData } from 'next/image';
import {
  ArrowRightIcon,
  BackpackIcon,
  OpenInNewWindowIcon
} from '@radix-ui/react-icons'
import { ReactNode, forwardRef } from 'react';

interface WorkCardBaseProps {
  name: string[];
  lengthOfStay: string;
  designation: string;
  items?: string[];
  stack?: string[];
  image?: StaticImageData;
  children: ReactNode;
}

type CompanyProps = Pick<WorkCardBaseProps, 'name' | 'image' | 'lengthOfStay'>;
type ItemProps = Pick<WorkCardBaseProps, 'designation' | 'items'>;
type TechnologyProps = Pick<WorkCardBaseProps, 'stack'>;

const Root = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>  
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

Root.displayName = 'WorkCardRoot';

const WorkCard = Root;

const Company = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & CompanyProps
>(({ name, image, lengthOfStay, ...props }, ref) => {
  let assistiveLabel = name[0] === 'Asurion' ? `Jason's current contract` : `one of Jason's past contract`;
  return (
    <div ref={ref} {...props}>
      <div className="w-12 h-12 relative">
        {image ? (
          <Image
            src={image}
            quality={95}
            fill
            sizes="100vw"
            className="object-cover object-left rounded" 
            alt="work_image"
          />
        ) : (
          <BackpackIcon className="w-12 h-12 text-gray-600 dark:text-gray-300"/>
        )}
      </div>
      <div className="flex flex-col ml-2 text-xs sm:text-sm">
        {name[1] ? (
          <a
            href={name[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit hover:underline hover:underline-offset-4"
            aria-label={`A link to ${name[0]}'s website, ${assistiveLabel}`}
          >
            <span className="font-semibold mt-1">{name[0]}</span>
            <OpenInNewWindowIcon className="inline ml-1" />
          </a>
        ) : (
          <>
            <span className="font-semibold mt-1">{name[0]}</span>
          </>
        )}
        <span className="dark:text-gray-300 ">{lengthOfStay}</span>
      </div>
    </div>
  );
});

Company.displayName = 'WorkCardCompany';


const Responsibilities = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & Required<ItemProps>
>(({ items, designation, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      <span className="-ml-4 font-semibold mb-2">{designation}</span>
      {items && items.map((exp, index) => (
        <ul key={index}>
          <li className="flex items-start">
            <div><ArrowRightIcon className="-ml-4 mt-[3px] w-3 h-3 sm:w-[15px] sm:h-[15px]"/></div>
            <p className="ml-1 text-left">{exp}</p>
          </li>
        </ul>
      ))}
    </div>
  );
})

Responsibilities.displayName = 'WorkCardResponsibilities';

const Technology = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & Required<TechnologyProps>
>(({ stack, ...props }, ref) => {
  return (
    <div {...props}>
      Technology: {stack?.join(", ")}
    </div>
  )
});

Technology.displayName = 'WorkCardTechnology';

export { WorkCard, Root, Company, Responsibilities, Technology };
