import Image from 'next/image';
import { BackpackIcon, OpenInNewWindowIcon } from '@radix-ui/react-icons'

type WorkCardProps = {
  imageSource: string;
  name: string[]; 
  designation: string;
  period: string
  highlights?: React.ReactNode;
  technology?: string[];
}

type WorkCardGeneralProps = Omit<WorkCardProps, "imageSource">;

export const WorkCard = ({
  imageSource,
  name,
  designation,
  period,
  highlights,
  technology
}: WorkCardProps) => {
  return (
    <div className="w-full p-4 rounded-sm border border-[#afb9c5] border-opacity-20 relative text-[#2c3136] dark:text-white">
      <div className="flex">
        <div className="w-12 h-12 relative">
          <Image
            src={imageSource}
            quality={95}
            fill
            sizes="100vw"
            className="object-cover object-left"
            alt="work_image"
          />
        </div>
        <div className="flex flex-col ml-2">
          {name[1] ? (
            <a href={name[1]} target="_blank" rel="noopener noreferrer" className="w-fit">
            <span className="text-sm font-semibold mt-1">{name[0]}</span>
            <OpenInNewWindowIcon className="inline ml-1" />
          </a>
          ) : (
            <>
              <span className="text-sm font-semibold mt-1">{name[0]}</span>
              <OpenInNewWindowIcon className="inline ml-1" />
            </>
          )}
          <span className="text-xs dark:text-gray-300 ">{period}</span>
        </div>
      </div>
      <div className="flex flex-col text-sm mt-2 px-4">
        <span className="-ml-4 font-semibold mb-2">{designation}</span>
        {highlights}
        <span className="-ml-4 mt-4">Technology: {technology?.join(", ")}</span>
      </div>
    </div>
  );
}

export const WorkCardGeneral = ({
  name,
  designation,
  period,
  highlights,
  technology
}: WorkCardGeneralProps) => {
  return (
    <div className="w-full p-4 rounded-sm border border-[#afb9c5] border-opacity-20 relative">
      <div className="flex">
        <div className="w-12 h-12 relative">
          <BackpackIcon className="w-12 h-12 text-gray-600 dark:text-gray-300"/>
        </div>
        <div className="flex flex-col ml-2">
          <span className="text-sm font-semibold mt-1">{name[0]}</span>
          <span className="text-xs dark:text-gray-300">{period}</span>
        </div>
      </div>  
      <div className="flex flex-col text-sm mt-2 px-4">
        <span className="-ml-4 mb-2 font-semibold">{designation}</span>
        {highlights}
        <span className="-ml-4 mt-4">Technology: {technology?.join(", ")}</span>
      </div>
    </div>
  );
}

