cube(`Users_permissionsUser`, {
  sql: `SELECT * FROM public."users-permissions_user"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Profiles: {
      sql: `${CUBE}.profile = ${Profiles}.id`,
      relationship: `hasOne`
    },
    Users_permissionsRole: {
      sql: `${CUBE}.role = ${Users_permissionsRole}.id`,
      relationship: `hasOne`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, username, provider, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    confirmed: {
      sql: `confirmed`,
      type: `string`
    },
    
    blocked: {
      sql: `blocked`,
      type: `string`
    },
    
    biostaractive: {
      sql: `${CUBE}."biostarActive"`,
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
    
    provider: {
      sql: `provider`,
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
    
    confirmationtoken: {
      sql: `${CUBE}."confirmationToken"`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
