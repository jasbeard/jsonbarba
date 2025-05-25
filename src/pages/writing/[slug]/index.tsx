import { format, parseISO } from 'date-fns';
import { allWritings, Writing } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { MainLayout } from '@/components/MainLayout';
import { NextSeo } from 'next-seo';
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';

interface BlogSpecificImageProps {
  imageSrc: string;
  imageAlt: string;
}

const BlogSpecificImage = ({
  imageSrc,
  imageAlt
}: BlogSpecificImageProps) => {
  const router = useRouter();
  switch(router.query.slug) {
    case 'our-intimate-wedding':
      return <Image  src={imageSrc} alt={imageAlt} className="rounded-xl shadow-lg cursor-help" title="Lola Cafe's glass house" width={800} height={700} />;
    case 'driving-school':
      return <Image  src={imageSrc} alt={imageAlt} className="rounded-xl shadow-lg cursor-help" title="Chat with the driving school coordinator" width={456} height={456}/>
    default:
      return null;
  }
}

const CustomMdxComponents: MDXComponents = {
  img: ({ src, alt }) =>  <BlogSpecificImage imageSrc={src} imageAlt={alt} />
}

export async function getStaticPaths() {
  // Get a list of valid writing paths.
  const paths = allWritings.map((post) => ({
    params: { slug: post._raw.flattenedPath },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // Find the post for the current page.
  const writing = allWritings.find((post) => post._raw.flattenedPath === context.params?.slug)

  // Return notFound if the post does not exist.
  if (!writing) return { notFound: true }

  // Return the post as page props.
  return { props: { writing } }
}

const Content = ({ writing }: { writing: Writing }) => {
  // const post = allWritings.find((post) => post._raw.flattenedPath === router?.query.slug) as Writing;
  const MDXContent = useMDXComponent(writing?.body.code)

  if (!writing) return null;

  return (
    <>
      <NextSeo
        title={writing.title}
        description={writing.bodyPreview}
        themeColor="dark"
      />
      <MainLayout>
        <article className="py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold">{writing.title}</h1>
            <time dateTime={writing.date} className="mb-1 text-base text-gray-400">
              {format(parseISO(writing.date), 'LLL d, yyyy')}
            </time>
          </div>
          <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 prose md:prose-lg dark:prose-invert">
            <MDXContent components={CustomMdxComponents} />
          </div>
        </article>
      </MainLayout>
    </>
  );
}

export default Content;