cube(`StrapiAdministrator`, {
  sql: `SELECT * FROM public.strapi_administrator`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, firstname, lastname, username]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    isactive: {
      sql: `${CUBE}."isActive"`,
      type: `string`
    },
    
    blocked: {
      sql: `blocked`,
      type: `string`
    },
    
    firstname: {
      sql: `firstname`,
      type: `string`
    },
    
    lastname: {
      sql: `lastname`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    resetpasswordtoken: {
      sql: `${CUBE}."resetPasswordToken"`,
      type: `string`
    },
    
    registrationtoken: {
      sql: `${CUBE}."registrationToken"`,
      type: `string`
    },
    
    preferedlanguage: {
      sql: `${CUBE}."preferedLanguage"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
