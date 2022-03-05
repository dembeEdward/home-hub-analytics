cube(`StrapiWebhooks`, {
  sql: `SELECT * FROM public.strapi_webhooks`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    headers: {
      sql: `headers`,
      type: `string`
    },
    
    events: {
      sql: `events`,
      type: `string`
    },
    
    enabled: {
      sql: `enabled`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    url: {
      sql: `url`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
