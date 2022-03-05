cube(`CoreStore`, {
  sql: `SELECT * FROM public.core_store`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
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
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    environment: {
      sql: `environment`,
      type: `string`
    },
    
    tag: {
      sql: `tag`,
      type: `string`
    },
    
    value: {
      sql: `value`,
      type: `string`
    },
    
    key: {
      sql: `key`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
