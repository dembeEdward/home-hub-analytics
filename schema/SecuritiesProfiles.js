cube(`SecuritiesProfiles`, {
  sql: `SELECT * FROM public.securities__profiles`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Securities: {
      sql: `${CUBE}.security_id = ${Securities}.id`,
      relationship: `belongsTo`
    },
    
    Profiles: {
      sql: `${CUBE}.profile_id = ${Profiles}.id`,
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
