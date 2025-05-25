import Image from 'next/image';
import {
  BackpackIcon,
  OpenInNewWindowIcon
} from '@radix-ui/react-icons'
import { forwardRef } from 'react';
import { WorkCardContext, useWorkList } from './WorkCardContext';
import { WorkListProps } from '../ExperienceSection';

const Root = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { work: WorkListProps }  
>(({ children, work, ...props }, ref) => {
  return (
    <WorkCardContext.Provider value={work}>
      <div ref={ref} {...props}>
        {children}
      </div>
    </WorkCardContext.Provider>
  );
});

Root.displayName = 'WorkCardRoot';

const WorkCard = Root;

const Company = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const workListContext = useWorkList();
  let assistiveLabel = workListContext?.name[0] === 'Asurion' ? `Jason's current contract` : `one of Jason's past contract`;
  return (
    <div ref={ref} {...props}>
      <div className="w-12 h-12 relative">
        {workListContext?.imageSource ? (
          <Image
            src={workListContext?.imageSource}
            quality={95}
            fill
            sizes="100vw"
            className="object-cover object-left rounded" 
            alt="work_image"
            style={{ filter: "grayscale(90%)" }}
          />
        ) : (
          <BackpackIcon className="w-12 h-12 text-gray-600 dark:text-gray-300"/>
        )}
      </div>
      <div className="flex flex-col ml-2 text-xs sm:text-sm">
        {workListContext?.name[1] ? (
          <a
            href={workListContext?.name[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit hover:underline hover:underline-offset-4"
            aria-label={`A link to ${workListContext?.name[0]}'s website, ${assistiveLabel}`}
          >
            <span className="font-semibold mt-1">{workListContext?.name[0]}</span>
            <OpenInNewWindowIcon className="inline ml-1" />
          </a>
        ) : (
          <>
            <span className="font-semibold mt-1">{workListContext?.name[0]}</span>
          </>
        )}
        <span className="dark:text-gray-300 ">{workListContext?.period}</span>
      </div>
    </div>
  );
});

Company.displayName = 'WorkCardCompany';


const Responsibilities = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const workListContext = useWorkList();
  return (
    <div ref={ref} {...props}>
      <span className="font-semibold mb-2">{workListContext?.designation}</span>
      {workListContext?.highlights && workListContext?.highlights.map((exp, index) => (
        <ul key={index} className="list-disc list-inside marker:text-[#d1d5db] dark:marker:text-[#4b5563]">
          <li>{exp}</li>
        </ul>
      ))}
    </div>
  );
})

Responsibilities.displayName = 'WorkCardResponsibilities';

const Technology = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const workListContext = useWorkList();
  return (
    <div ref={ref} {...props}>
      Technology: {workListContext?.technology.join(", ")}
    </div>
  )
});

Technology.displayName = 'WorkCardTechnology';

export { WorkCard, Root, Company, Responsibilities, Technology };
