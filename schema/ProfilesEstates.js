cube(`ProfilesEstates`, {
  sql: `SELECT * FROM public.profiles__estates`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Profiles: {
      sql: `${CUBE}.profile_id = ${Profiles}.id`,
      relationship: `belongsTo`
    },
    
    SecuritiesProfiles: {
      sql: `${CUBE}.profile_id = ${SecuritiesProfiles}.profile_id`,
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
    
    ServiceProvidersEstates: {
      sql: `${CUBE}.estate_id = ${ServiceProvidersEstates}.estate_id`,
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
