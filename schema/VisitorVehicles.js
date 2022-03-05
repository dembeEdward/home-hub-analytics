cube(`VisitorVehicles`, {
  sql: `SELECT * FROM public.visitor_vehicles`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    make: {
      sql: `make`,
      type: `string`
    },
    
    model: {
      sql: `model`,
      type: `string`
    },
    
    vin: {
      sql: `vin`,
      type: `string`
    },
    
    engineNo: {
      sql: `engine_no`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    registration: {
      sql: `registration`,
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
