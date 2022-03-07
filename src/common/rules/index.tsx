/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import i18n from '../utils/configI18n';

export const ruleFirstname = {
  required: 'Vorname ist erforderlich',
};

export const ruleLastname = {
  required: 'Nachname ist erforderlich',
};

export const ruleCompanyFoundingYear = {
  validate: async (year: number) => {
    if (year < 1800 || year > new Date().getFullYear()) {
      return 'Gründungsjahr kann nicht vor 1800 und in der Zukunft liegen';
    }

    return true;
  }
};

export const ruleEmailAddress = {
  required: i18n.t('common.error.emailRequired'),
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: i18n.t('common.error.emailWrongFormat')
  }
};

export const rulePasswordConfirmation = (password: string, confirm: string): string | boolean => {
  if (password !== confirm) {
    return 'Passwort-Bestätigung weicht ab';
  }

  return true;
};
