cube(`ComponentsCommonServices`, {
  sql: `SELECT * FROM public.components_common_services`,
  
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
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    mobile: {
      sql: `mobile`,
      type: `string`
    },
    
    icon: {
      sql: `icon`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
