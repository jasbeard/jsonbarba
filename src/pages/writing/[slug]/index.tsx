import { format, parseISO } from 'date-fns'
import { allWritings } from 'contentlayer/generated'
import { useRouter } from 'next/router'
import { MainLayout } from '@/components/MainLayout';

// TODO: investigate metadata
// export const generateMetadata = ({ params }: { params: { slug: string } }) => {
//   console.log('generateMetadata: ', params)
//   const post = allWritings.find((post) => post._raw.flattenedPath === params?.slug)
//   if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
//   return { title: post.title }
// }

const Content = () => {
  const router = useRouter();
  const post = allWritings.find((post) => post._raw.flattenedPath === router?.query.slug);

  if (!post) return null;

  return (
    <MainLayout>
      <article className="py-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="mb-1 text-base text-gray-400">
            {format(parseISO(post.date), 'LLL d, yyyy')}
          </time>
        </div>
        <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 prose md:prose-lg dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </MainLayout>
  );
}

export default Content