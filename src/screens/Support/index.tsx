import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Animated, { withSpring, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { SuggestionsFormValues } from 'interfaces/suggestionsForm';
import { useTranslation } from 'react-i18next';

import './i18n';
import styles from './styles';

function Support() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SuggestionsFormValues>({
    defaultValues: {
      suggestions: 'Hello!\n'
    }
  });

  const { t } = useTranslation('SUPPORT');

  const offset = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(offset.value)
      }
    ]
  }));

  const onSubmit = () => {
    reset();
    offset.value = 0;
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Name"
            maxLength={40}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text style={styles.textError}>{t('ERROR_NAME')}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            maxLength={60}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

      <Text style={styles.suggestionsTitle}>{t('TITLE_SUGGESTIONS')}</Text>
      <Controller
        control={control}
        rules={{
          minLength: 6
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.largeInput}
            onBlur={onBlur}
            multiline
            onChangeText={onChange}
            testID="suggestionsForm"
            value={value}
          />
        )}
        name="suggestions"
      />
      {errors.suggestions && <Text style={styles.textError}>{t('ERROR_SUGGESTIONS')}</Text>}

      <Animated.View style={[animatedStyles]}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.textButton}>{t('SUBMIT')}</Text>
        </TouchableOpacity>
      </Animated.View>

      {offset.value === 0 && <Text style={styles.thanks}>{t('THANKS')}</Text>}
    </View>
  );
}

export default Support;
