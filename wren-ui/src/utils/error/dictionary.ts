export const ERROR_TEXTS = {
  CONNECTION: {
    DISPLAY_NAME: {
      REQUIRED: 'Please input display name.',
    },
    PROJECT_ID: {
      REQUIRED: 'Please input project id.',
    },
    DATASET_ID: {
      REQUIRED: 'Please input dataset ID.',
    },
    CREDENTIAL: {
      REQUIRED: 'Please upload credential.',
    },
    INIT_SQL: {
      REQUIRED: 'Please input initial SQL statements.',
    },
    CONFIGURATION: {
      KEY: {
        REQUIRED: 'Please input configuration key.',
      },
      VALUE: {
        REQUIRED: 'Please input configuration value.',
      },
    },
    HOST: {
      REQUIRED: 'Please input host.',
    },
    PORT: {
      REQUIRED: 'Please input port.',
    },
    USERNAME: {
      REQUIRED: 'Please input username.',
    },
    PASSWORD: {
      REQUIRED: 'Please input password.',
    },
    DATABASE: {
      REQUIRED: 'Please input database name.',
    },
  },
  ADD_RELATION: {
    FROM_FIELD: {
      REQUIRED: 'Please select a field.',
    },
    TO_FIELD: {
      REQUIRED: 'Please select a field.',
    },
    RELATION_TYPE: {
      REQUIRED: 'Please select a relationship type.',
    },
  },
  SETUP_MODEL: {
    TABLE: {
      REQUIRED: 'Please select at least one table.',
    },
  },
  SAVE_AS_VIEW: {
    NAME: {
      REQUIRED: 'Please input view name.',
    },
  },
  MODELING_CREATE_MODEL: {
    TABLE: {
      REQUIRED: 'Please select a table.',
    },
    COLUMNS: {
      REQUIRED: 'Please select at least one column.',
    },
    PRIMARY_KEY: {
      REQUIRED: 'Please select a column.',
      INVALID:
        'Please select again, the primary key must be one of the selected columns.',
    },
  },
};
