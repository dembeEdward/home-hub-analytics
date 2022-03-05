cube(`Users_permissionsUserEstates`, {
  sql: `SELECT * FROM public."users-permissions_user__estates"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Users_permissionsUser: {
      sql: `${CUBE}."users-permissions_user_id" = ${Users_permissionsUser}.id`,
      relationship: `belongsTo`
    },
    
    CommunicationTagsEstates: {
      sql: `${CUBE}.estate_id = ${CommunicationTagsEstates}.estate_id`,
      relationship: `belongsTo`
    },
    
    Estates: {
      sql: `${CUBE}.estate_id = ${Estates}.id`,
      relationship: `belongsTo`
    },
    
    ProfilesEstates: {
      sql: `${CUBE}.estate_id = ${ProfilesEstates}.estate_id`,
      relationship: `belongsTo`
    },
    
    ServiceProvidersEstates: {
      sql: `${CUBE}.estate_id = ${ServiceProvidersEstates}.estate_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  },
  
  dataSource: `default`
});
