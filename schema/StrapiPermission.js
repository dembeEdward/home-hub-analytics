cube(`StrapiPermission`, {
  sql: `SELECT * FROM public.strapi_permission`,
  
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
    
    properties: {
      sql: `properties`,
      type: `string`
    },
    
    conditions: {
      sql: `conditions`,
      type: `string`
    },
    
    action: {
      sql: `action`,
      type: `string`
    },
    
    subject: {
      sql: `subject`,
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
