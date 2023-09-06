import { Box } from '@mui/material';
import { NextPageWithLayout } from '../_app';
import { AppLayout } from '@/components';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GetServerSideProps } from 'next';
import { Category } from '@/features/category';
import { SubscribersList } from '@/features/subscribers';
import { constants } from '@/common';

const SubscribersPage: NextPageWithLayout = () => {
  const category = constants.CATEGORIES[5];

  return (
    <>
      <Box>
        <Category category={category} />
        <Box mt={2.85}>
          <SubscribersList />
        </Box>
      </Box>
    </>
  );
};

SubscribersPage.getLayout = (page: React.ReactNode) => {
  return <AppLayout maxWidth='lg'>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale || 'en', ['common', 'errors'])),
    },
  };
};

export default SubscribersPage;
