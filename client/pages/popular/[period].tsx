import { Box, Button, ButtonGroup, Paper, Slider, Typography } from '@mui/material';
import { NextPageWithLayout } from '../_app';
import { AppLayout } from '@/components';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { Card as NewsCard } from '@/features/news';
import { SelectFilter } from '@/features/filters';
import { constants } from '@/common';

const Popular: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <>
      <Box my='12px'>
        <SelectFilter options={constants.FILTERS_TIME} />
        <Button
          variant='contained'
          color='secondary'
          onClick={() => router.push('/test')}
          sx={{ marginTop: 1 }}
        >
          Test
        </Button>
      </Box>
    </>
  );
};

Popular.getLayout = (page: React.ReactNode) => {
  return <AppLayout>{page}</AppLayout>;
};

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors'])),
    },
  };
}

export default Popular;
