cube(`ServiceProvidersEstates`, {
  sql: `SELECT * FROM public.service_providers__estates`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    ServiceProviders: {
      sql: `${CUBE}.service_provider_id = ${ServiceProviders}.id`,
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
    
    Users_permissionsUserEstates: {
      sql: `${CUBE}.estate_id = ${Users_permissionsUserEstates}.estate_id`,
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
