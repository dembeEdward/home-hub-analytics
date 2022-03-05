cube(`Estates`, {
  sql: `SELECT * FROM public.estates`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, city, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    street: {
      sql: `street`,
      type: `string`
    },
    
    suburb: {
      sql: `suburb`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    code: {
      sql: `code`,
      type: `string`
    },
    
    location: {
      sql: `location`,
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
