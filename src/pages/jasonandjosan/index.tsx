import { GetServerSidePropsContext } from "next"

const Index = () => {
  return (
    <div></div>
  );
}

export default Index;

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return {
    redirect: {
      destination: '/jasonandjosan/photos',
    }
  };
}