import { createClient } from 'next-sanity';

import { makeSafeQueryRunner } from 'groqd';
import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const runQuery = makeSafeQueryRunner((query) => client.fetch(query));
