cube(`EmergencyServices`, {
  sql: `SELECT * FROM public.emergency_services`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    area: {
      sql: `${CUBE}."Area"`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    contact: {
      sql: `contact`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    icon: {
      sql: `icon`,
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
