cube(`Profiles`, {
  sql: `SELECT * FROM public.profiles`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    ProfilesEstates: {
      sql: `${CUBE}.id = ${ProfilesEstates}.profile_id`,
      relationship: `hasMany`
    },
    Users_permissionsUser: {
      sql: `${CUBE}.id = ${Profiles}.profile`,
      relationship: `hasOne`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, surname, idNumber, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    newuser: {
      sql: `${CUBE}."newUser"`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    surname: {
      sql: `surname`,
      type: `string`
    },
    
    mobile: {
      sql: `mobile`,
      type: `string`
    },
    
    idNumber: {
      sql: `id_number`,
      type: `string`
    },
    
    occupation: {
      sql: `occupation`,
      type: `string`
    },
    
    unit: {
      sql: `unit`,
      type: `string`
    },
    
    emergencyContact: {
      sql: `emergency_contact`,
      type: `string`
    },
    
    employment: {
      sql: `employment`,
      type: `string`
    },
    
    temp: {
      sql: `temp`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    publishedAt: {
      sql: `published_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
