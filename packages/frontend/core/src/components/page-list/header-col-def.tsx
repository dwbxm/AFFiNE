import { Trans } from '@affine/i18n';

import { ListHeaderTitleCell } from './page-header';
import type { HeaderColDef } from './types';

export const pageHeaderColsDef: HeaderColDef[] = [
  {
    key: 'title',
    content: <ListHeaderTitleCell />,
    flex: 6,
    alignment: 'start',
    sortable: true,
  },
  {
    key: 'tags',
    content: <Trans i18nKey="Tags" />,
    flex: 3,
    alignment: 'end',
  },
  {
    key: 'createDate',
    content: <Trans i18nKey="Created" />,
    flex: 1,
    sortable: true,
    alignment: 'end',
    hideInSmallContainer: true,
  },
  {
    key: 'updatedDate',
    content: <Trans i18nKey="Updated" />,
    flex: 1,
    sortable: true,
    alignment: 'end',
    hideInSmallContainer: true,
  },
  {
    key: 'actions',
    content: '',
    flex: 1,
    alignment: 'end',
  },
];

export const collectionHeaderColsDef: HeaderColDef[] = [
  {
    key: 'title',
    content: <ListHeaderTitleCell />,
    flex: 9,
    alignment: 'start',
    sortable: true,
  },
];

export const tagHeaderColsDef: HeaderColDef[] = [
  {
    key: 'title',
    content: <ListHeaderTitleCell />,
    flex: 8,
    alignment: 'start',
    sortable: true,
  },
  {
    key: 'actions',
    content: '',
    flex: 1,
    alignment: 'end',
  },
];
