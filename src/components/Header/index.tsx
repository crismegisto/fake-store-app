import React, { useEffect, useState } from 'react';
import { SearchBar } from '@rneui/themed';
import useDebounce from 'hooks/useDebounce';
import { useTranslation } from 'react-i18next';

import './i18n';
import styles from './styles';

const DEBOUNCE_TIME = 400;

function Header({ onSearch }: { query: string; onSearch: (text: string | null) => void }) {
  const [localQuery, setLocalQuery] = useState('');
  const [handleDebouncedSearch] = useDebounce<string>(onSearch, DEBOUNCE_TIME);

  const { t } = useTranslation('HEADER');

  useEffect(() => {
    handleDebouncedSearch(localQuery);
  }, [localQuery, handleDebouncedSearch]);

  return (
    <SearchBar
      lightTheme
      round
      containerStyle={styles.container}
      placeholder={t('TITLE') || ''}
      onChangeText={setLocalQuery}
      value={localQuery}
    />
  );
}

export default Header;
